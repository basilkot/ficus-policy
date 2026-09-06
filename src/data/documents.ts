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
 *
 * Единственное исключение из «без изменений» — `beauty-stuff/terms/policy-*.html`. Условия
 * Android-версии ссылаются на политику соседним файлом: в приложении обе страницы лежат
 * рядом в `assets` и открываются без сети. На сайте политика разделом выше, поэтому по тому
 * же адресу положен переход в две строки. Сам текст не тронут — а значит, и разойтись
 * с приложением ему негде.
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
    href: '/beauty-stuff/terms/',
    title: 'Beauty Stuff for Android — Terms of Use',
    note: 'English',
  },
  {
    href: '/beauty-stuff/terms/ru/',
    title: 'Beauty Stuff для Android — условия использования',
    note: 'По-русски',
  },
  {
    href: '/beauty-stuff/delete/',
    title: 'Beauty Stuff for Android — Deleting your account and data',
    note: 'The address Play shows on the store listing',
  },
  {
    href: '/beauty-stuff/delete/ru/',
    title: 'Beauty Stuff для Android — удаление учётной записи и данных',
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
