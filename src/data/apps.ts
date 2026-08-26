/**
 * Реестр приложений — единственное место, где записаны их адреса в сторах.
 *
 * Отдельным файлом, а не строками внутри страниц, по одной причине: адрес приложения
 * повторяется в переходе, в лендинге, в QR-коде и в OG-тегах, и разойдясь однажды,
 * он разойдётся молча — сломанная ссылка в сторе ничем себя не выдаёт.
 */

/** Откуда человек пришёл. Ровно те метки, что подставляют приложения при отправке. */
export type Campaign = 'collage' | 'year' | 'site' | 'qr'

export interface AppEntry {
  /** Кусок адреса: `ficusapps.com/beauty`. Короткий, потому что его набирают руками с картинки. */
  slug: string
  name: string
  tagline: { en: string; ru: string }
  appStoreId: string
  playPackage: string
  icon: string
}

/**
 * Токен провайдера в App Store Connect.
 *
 * Без него метка кампании (`ct`) уходит в пустоту: Apple принимает параметр, но в отчётах
 * не показывает — разбивка по кампаниям существует только в паре `pt` + `ct`. Пока токена
 * нет, ссылка остаётся рабочей, а вот измерять по ней нечего.
 */
export const appleProviderToken: string | null = null

export const apps: AppEntry[] = [
  {
    slug: 'beauty',
    name: 'Beauty Stuff',
    tagline: {
      en: 'Keep track of what is in your makeup bag and when it expires.',
      ru: 'Косметичка, которая помнит сроки годности за вас.',
    },
    appStoreId: '6801481425',
    playPackage: 'ru.basilkot.beautystuff',
    icon: '/beauty/icon.png',
  },
]

export function appBySlug(slug: string): AppEntry {
  const found = apps.find((app) => app.slug === slug)
  if (!found) {
    throw new Error(`Нет приложения с адресом «${slug}» — проверьте src/data/apps.ts`)
  }
  return found
}

/**
 * Ссылка в App Store.
 *
 * Без названия в пути (`/app/idNNN`, а не `/app/beauty-stuff/idNNN`): название в адресе
 * Apple всё равно игнорирует, а переименование приложения оставило бы в коллажах
 * прошлых лет ссылку с прошлым именем.
 */
export function appStoreURL(app: AppEntry, campaign: Campaign): string {
  const url = new URL(`https://apps.apple.com/app/id${app.appStoreId}`)
  if (appleProviderToken) {
    url.searchParams.set('pt', appleProviderToken)
    url.searchParams.set('ct', campaign)
  }
  return url.toString()
}

/**
 * Ссылка в Google Play.
 *
 * Метка кампании уезжает внутрь `referrer` целой строкой запроса — так её требует Play,
 * и поэтому она кодируется дважды: один раз здесь, второй раз при подстановке в адрес.
 */
export function playStoreURL(app: AppEntry, campaign: Campaign): string {
  const referrer = new URLSearchParams({
    utm_source: campaign,
    utm_medium: 'share',
    utm_campaign: 'ficusapps',
  }).toString()

  const url = new URL('https://play.google.com/store/apps/details')
  url.searchParams.set('id', app.playPackage)
  url.searchParams.set('referrer', referrer)
  return url.toString()
}
