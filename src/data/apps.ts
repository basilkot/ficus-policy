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
 * Токен провайдера в App Store Connect — число, опознающее аккаунт разработчика.
 *
 * Один на все приложения и все кампании: меняется только `ct`. Отдельно он нигде
 * не выдаётся, а создаётся сам при первой кампании в Analytics → Acquisition → Campaigns,
 * и берётся из готовой ссылки.
 *
 * Без него метка кампании уходит в пустоту: Apple параметр примет, но в отчётах не покажет
 * — разбивка существует только в паре `pt` + `ct`. Пока токена нет, ссылка остаётся
 * рабочей, а вот измерять по ней нечего.
 */
export const appleProviderToken: string | null = '125907492'

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
 *
 * **С токеном адрес другой, и это не украшение.** У ссылок с кампанией Apple свой
 * канонический вид — `/app/apple-store/idNNN` и `mt=8` в придачу к `pt` и `ct`, — и он
 * единственный, про который известно, что кампания в отчётах доезжает. Без токена
 * считать всё равно нечего, поэтому там остаётся короткий адрес: лишние части нужны
 * ровно тогда, когда появляется, ради чего их терпеть.
 */
export function appStoreURL(app: AppEntry, campaign: Campaign): string {
  if (!appleProviderToken) {
    return `https://apps.apple.com/app/id${app.appStoreId}`
  }

  const url = new URL(`https://apps.apple.com/app/apple-store/id${app.appStoreId}`)
  url.searchParams.set('pt', appleProviderToken)
  url.searchParams.set('ct', campaign)
  // Тип содержимого — «программа». Параметр древний, но Apple приводит его в своём
  // же образце ссылки, и спорить с образцом дороже, чем дописать четыре символа
  url.searchParams.set('mt', '8')
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
