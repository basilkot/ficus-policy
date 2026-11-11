import type { APIRoute } from 'astro'

/**
 * Карта сайта — единственный путь, которым поисковик узнаёт о странице, если на неё
 * никто не сослался снаружи. Калькулятор на `/beauty/calculator` ради этого и завёл её.
 *
 * Собирается из самих страниц, а не списком: новая страница попадает в карту без правки
 * этого файла, и забыть её негде. `@astrojs/sitemap` не взят — ради двадцати строк
 * он тянет зависимость и пишет индекс карт, который сайту из пяти страниц не нужен.
 *
 * `/legal` и политики в карту не входят. Карточки сторов ведут на них прямыми адресами,
 * а поисковику сайт должен сообщать, что он про приложения, — см. `pages/index.astro`.
 * Политики вдобавок лежат в `public/` и страницами Astro не являются.
 */
// `/beauty/paid/` — страница возврата после оплаты, искать её незачем
const excluded = ['/legal/', '/beauty/paid/']

const paths = Object.keys(import.meta.glob('./**/*.astro'))
  .map((file) => file.replace(/^\./, '').replace(/(index)?\.astro$/, '').replace(/([^/])$/, '$1/'))
  .filter((path) => !excluded.includes(path))
  .sort()

export const GET: APIRoute = ({ site }) => {
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join('\n')
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
