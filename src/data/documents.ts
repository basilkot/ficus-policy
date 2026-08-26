/**
 * Юридические страницы — те, на которые ссылаются карточки в сторах.
 *
 * Лежат в `public/` целыми файлами, а не собираются как остальной сайт, и это не лень.
 * Единственный источник правды у политики — файл внутри самого приложения: человек читает
 * её прямо там, и расхождение между двумя текстами — ровно то, к чему придирается Play.
 * Поэтому страница сюда **копируется без изменений**, а всё, что умеет менять текст
 * по дороге — шаблоны, общая обвязка, подстановка года, — этой копии противопоказано.
 *
 * Здесь только опись: что где лежит, чтобы корневая страница могла их перечислить,
 * а список не приходилось держать в голове.
 */
export interface DocumentEntry {
  href: string
  title: string
  note: string
}

export const documents: DocumentEntry[] = [
  {
    href: '/beauty-stuff/',
    title: 'Beauty Stuff for Android — Privacy Policy',
    note: 'English',
  },
  {
    href: '/beauty-stuff/ru/',
    title: 'Beauty Stuff для Android — политика конфиденциальности',
    note: 'По-русски',
  },
  {
    href: '/beauty-stuff-ios/',
    title: 'Beauty Stuff for iPhone — Privacy Policy',
    note: 'The app collects data differently on iOS, so the document is separate',
  },
  {
    href: '/beauty-stuff-ios/ru/',
    title: 'Beauty Stuff для iPhone — политика конфиденциальности',
    note: 'По-русски',
  },
  {
    href: '/beauty-stuff-ios/support/',
    title: 'Beauty Stuff for iPhone — Support',
    note: 'English',
  },
  {
    href: '/beauty-stuff-ios/support/ru/',
    title: 'Beauty Stuff для iPhone — поддержка',
    note: 'По-русски',
  },
]
