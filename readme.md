# ficus-policy

Политики конфиденциальности приложений — по публичному адресу, потому что Google Play требует
ссылку в карточке приложения, а документа, встроенного в само приложение, для этого мало.

Опубликовано через GitHub Pages из ветки `main`, корень репозитория:
**https://basilkot.github.io/ficus-policy/**

| Приложение | Адрес | Исходник |
|---|---|---|
| Beauty Stuff | [/beauty-stuff/](https://basilkot.github.io/ficus-policy/beauty-stuff/) | [`beauty-stuff/app/src/main/assets/policy.html`](https://github.com/basilkot/beauty-stuff/blob/main/app/src/main/assets/policy.html) |

## Как обновлять

Единственный источник правды — файл в самом приложении: пользователь читает политику прямо
в нём, и расхождение между двумя версиями — это ровно то, к чему Play придирается. Поэтому
правим сначала в репозитории приложения, а сюда копируем без изменений:

```sh
cp ../beauty-stuff/app/src/main/assets/policy.html beauty-stuff/index.html
```

и проверяем, что копия совпала:

```sh
diff beauty-stuff/index.html ../beauty-stuff/app/src/main/assets/policy.html
```

Дату в начале документа меняем при каждом изменении состава собираемых данных.

`.nojekyll` лежит здесь намеренно: страницы — обычный HTML, собирать их Jekyll'ом незачем,
файлы отдаются как есть.
