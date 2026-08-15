# ficus-policy

Политики конфиденциальности приложений — по публичному адресу, потому что Google Play требует
ссылку в карточке приложения, а документа, встроенного в само приложение, для этого мало.
Здесь же лежит страница поддержки: App Store требует Support URL, и это тоже должен быть
публичный адрес, а не почта.

Опубликовано через GitHub Pages из ветки `main`, корень репозитория:
**https://basilkot.github.io/ficus-policy/**

| Приложение | Адрес | Исходник |
|---|---|---|
| Beauty Stuff для Android | [/beauty-stuff/](https://basilkot.github.io/ficus-policy/beauty-stuff/) | [`beauty-stuff/app/src/main/assets/policy.html`](https://github.com/basilkot/beauty-stuff/blob/main/app/src/main/assets/policy.html) |
| Beauty Stuff для iPhone | [/beauty-stuff-ios/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/) | [`beauty-stuff-ios/docs/privacy/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/privacy/index.html) |
| Beauty Stuff для iPhone — поддержка | [/beauty-stuff-ios/support/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/support/) | [`beauty-stuff-ios/docs/support/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/support/index.html) |

**Документа два, и это не дубль.** Приложения собирают данные по-разному, а политика
описывает состав собираемого — общий документ был бы неверен для обеих версий.

## Как обновлять

Единственный источник правды — файл в самом приложении: пользователь читает политику прямо
в нём, и расхождение между двумя версиями — это ровно то, к чему Play придирается. Поэтому
правим сначала в репозитории приложения, а сюда копируем без изменений:

```sh
cp ../beauty-stuff/app/src/main/assets/policy.html beauty-stuff/index.html
cp ../beauty-stuff-ios/docs/privacy/index.html beauty-stuff-ios/index.html
cp ../beauty-stuff-ios/docs/support/index.html beauty-stuff-ios/support/index.html
```

и проверяем, что копии совпали:

```sh
diff beauty-stuff/index.html ../beauty-stuff/app/src/main/assets/policy.html
diff beauty-stuff-ios/index.html ../beauty-stuff-ios/docs/privacy/index.html
diff beauty-stuff-ios/support/index.html ../beauty-stuff-ios/docs/support/index.html
```

Дату в начале документа меняем при каждом изменении состава собираемых данных.

`.nojekyll` лежит здесь намеренно: страницы — обычный HTML, собирать их Jekyll'ом незачем,
файлы отдаются как есть.
