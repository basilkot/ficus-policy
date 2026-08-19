# ficus-policy

Политики конфиденциальности приложений — по публичному адресу, потому что Google Play требует
ссылку в карточке приложения, а документа, встроенного в само приложение, для этого мало.
Здесь же лежит страница поддержки: App Store требует Support URL, и это тоже должен быть
публичный адрес, а не почта.

Опубликовано через GitHub Pages из ветки `main`, корень репозитория:
**https://basilkot.github.io/ficus-policy/**

| Приложение | Адрес | Исходник |
|---|---|---|
| Beauty Stuff для Android | [/beauty-stuff/](https://basilkot.github.io/ficus-policy/beauty-stuff/) | [`beauty-stuff/app/src/main/assets/policy-en.html`](https://github.com/basilkot/beauty-stuff/blob/main/app/src/main/assets/policy-en.html) |
| Beauty Stuff для Android, по-русски | [/beauty-stuff/ru/](https://basilkot.github.io/ficus-policy/beauty-stuff/ru/) | [`beauty-stuff/app/src/main/assets/policy-ru.html`](https://github.com/basilkot/beauty-stuff/blob/main/app/src/main/assets/policy-ru.html) |
| Beauty Stuff для iPhone | [/beauty-stuff-ios/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/) | [`beauty-stuff-ios/docs/privacy/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/privacy/index.html) |
| Beauty Stuff для iPhone, по-русски | [/beauty-stuff-ios/ru/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/ru/) | [`beauty-stuff-ios/docs/privacy/ru/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/privacy/ru/index.html) |
| Beauty Stuff для iPhone — поддержка | [/beauty-stuff-ios/support/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/support/) | [`beauty-stuff-ios/docs/support/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/support/index.html) |
| Beauty Stuff для iPhone — поддержка по-русски | [/beauty-stuff-ios/support/ru/](https://basilkot.github.io/ficus-policy/beauty-stuff-ios/support/ru/) | [`beauty-stuff-ios/docs/support/ru/index.html`](https://github.com/basilkot/beauty-stuff-ios/blob/main/docs/support/ru/index.html) |

**Документа два, и это не дубль.** Приложения собирают данные по-разному, а политика
описывает состав собираемого — общий документ был бы неверен для обеих версий.

**Английская версия лежит в корне раздела, русская — в `ru/`.** Так же, как в самом
приложении: с версии 1.2 базовый язык у него английский, и `/beauty-stuff/` — это то, что
видит каждый, чьего языка у политики нет. Русская карточка в Play должна ссылаться прямо
на `/beauty-stuff/ru/`; остальные — на `/beauty-stuff/`. Раньше по адресу `/beauty-stuff/`
лежал русский текст, так что **ссылку в русской карточке нужно поменять** — иначе русский
пользователь после этой правки попадёт на английскую страницу.

**У iOS-версии то же устройство — с версии 1.1**, где приложение заговорило на двенадцати
языках. Русская локаль в App Store Connect ссылается на `/beauty-stuff-ios/ru/`
и `/beauty-stuff-ios/support/ru/`, остальные одиннадцать — на адреса без `/ru/`.
Приложение выбирает страницу само, по языку интерфейса. До 1.1 в корне лежал русский
текст, скачиваний у 1.0 не было, поэтому переезд никого не задел.

## Как обновлять

Единственный источник правды — файл в самом приложении: пользователь читает политику прямо
в нём, и расхождение между двумя версиями — это ровно то, к чему Play придирается. Поэтому
правим сначала в репозитории приложения, а сюда копируем без изменений:

```sh
cp ../beauty-stuff/app/src/main/assets/policy-en.html beauty-stuff/index.html
cp ../beauty-stuff/app/src/main/assets/policy-ru.html beauty-stuff/ru/index.html
cp ../beauty-stuff-ios/docs/privacy/index.html beauty-stuff-ios/index.html
cp ../beauty-stuff-ios/docs/privacy/ru/index.html beauty-stuff-ios/ru/index.html
cp ../beauty-stuff-ios/docs/support/index.html beauty-stuff-ios/support/index.html
cp ../beauty-stuff-ios/docs/support/ru/index.html beauty-stuff-ios/support/ru/index.html
```

и проверяем, что копии совпали:

```sh
diff beauty-stuff/index.html ../beauty-stuff/app/src/main/assets/policy-en.html
diff beauty-stuff/ru/index.html ../beauty-stuff/app/src/main/assets/policy-ru.html
diff beauty-stuff-ios/index.html ../beauty-stuff-ios/docs/privacy/index.html
diff beauty-stuff-ios/ru/index.html ../beauty-stuff-ios/docs/privacy/ru/index.html
diff beauty-stuff-ios/support/index.html ../beauty-stuff-ios/docs/support/index.html
diff beauty-stuff-ios/support/ru/index.html ../beauty-stuff-ios/docs/support/ru/index.html
```

Дату в начале документа меняем при каждом изменении состава собираемых данных.

`.nojekyll` лежит здесь намеренно: страницы — обычный HTML, собирать их Jekyll'ом незачем,
файлы отдаются как есть.
