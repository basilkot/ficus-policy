/**
 * Настройки Firebase для страницы оплаты рублями (`/ru/beauty/pay/`).
 *
 * Не секрет: эти же значения лежат в каждой копии приложения и в любой веб-странице
 * с Firebase. Доступ решают правила Firestore и проверки на сервере, а не скрытность ключа.
 *
 * Берутся из консоли Firebase → Настройки проекта → «Ваши приложения» → веб-приложение
 * `ficusapps.com` (заведено 12 ноября 2026). Будь `apiKey` пуст — страница пишет, что оплата
 * недоступна, и не ломается.
 */
export const firebaseConfig = {
  apiKey: 'AIzaSyDtwFB0fFm-w5WRTR5JNlo0mhVRPxBK7oY',
  authDomain: 'beauty-stuff.firebaseapp.com',
  projectId: 'beauty-stuff',
  appId: '1:778227282451:web:a19c5ed44f1a98e8d245e6',
}
