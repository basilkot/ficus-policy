/**
 * Настройки Firebase для страницы оплаты рублями (`/ru/beauty/pay/`).
 *
 * Не секрет: эти же значения лежат в каждой копии приложения и в любой веб-странице
 * с Firebase. Доступ решают правила Firestore и проверки на сервере, а не скрытность ключа.
 *
 * Берутся из консоли Firebase → Настройки проекта → «Ваши приложения» → веб-приложение
 * `ficusapps.com`. Пока `apiKey` пуст, страница пишет, что оплата недоступна, и не ломается.
 */
export const firebaseConfig = {
  apiKey: '',
  authDomain: 'beauty-stuff.firebaseapp.com',
  projectId: 'beauty-stuff',
  appId: '',
}
