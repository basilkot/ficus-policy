// @ts-check
import { defineConfig } from 'astro/config'

// Адрес нужен сборке, а не разработке: по нему строятся абсолютные ссылки в OG-тегах
// и sitemap. Относительные там не годятся — Pinterest и мессенджеры читают превью
// с чужой стороны, где «/» означает не то же самое, что здесь.
export default defineConfig({
  site: 'https://ficusapps.com',
  // Каталогом, а не файлом: `/beauty` и `/beauty/` должны быть одной страницей,
  // потому что первый адрес человек наберёт руками с коллажа, а второй поставит ссылка
  trailingSlash: 'ignore',
  build: { format: 'directory' },
})
