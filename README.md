# PET-PROJECT: Приложение-рандомайзер по подбору фильмов/сериалов для просмотра.

## Example Screenshot
![Изображение с примером](/README-images/example.png)

## Example Deploy
[Ссылка на deploy примера с использованием Git Hub pages](https://modern4ik.github.io/movies-randomizer-project/)

## Project Description
Данное приложение позволяет пользователю получать рандомные фильмы/аниме/сериалы/мультфильмы в зависимости от выставленных запросов пользователя в фильтре.

Идея состоит в том, что людям иногда сложно определитьcя, что они хотят посмотреть вечером, дабы скоротать вечер. Это приложение призвано помочь с этим.

## Tech Stack
- **React**
    ##### Дополнительные библиотеки
    - *react-router-dom*
    - *axios для запросов по сети*
- **JS (ES6)**
- **JSX**
- **KinopoiskAPI**
- **HTML5**
- **CSS3**

## In Development:
- Адаптивность/адаптивная вёрстка, данный сайт сделан с подходом "Desktop First". В данный момент адаптивность под мобильные устройства находится в процессе реализации

- Анимации смены страниц и более плавного появление элементов страницы для улучшения качества UI/UX. Возможно будут применены дополнительные библиотеки React, такие как "react-transition-group" или "reac-spring"
- Также возможны некоторые мелкие баги

## Installation:
Если вы планируете клонировать проект на свою локальную машину,
то после клонирования вам нужно будет прописать в консоли следующее:

```
git clone https://github.com/Modern4ik/movies-randomizer-project.git
cd movies-randomizer-project
npm install
npm start
```

## Additional Information:
Так как в данном проекте используется KinopoiskAPI, то для осуществления запросов к нему
нужен уникальный API-KEY. Его вы можете получить в [Telegram данного API](https://t.me/kinopoiskdev_bot) 

Также прошу обратить внимание, что у данного API есть платные и бесплатные версии.
В данном пет-проекте используется бесплатная версия API, поэтому максимальное число запросов к API в сутки составляет 200 единиц.

[Документация KinopoiskAPI](https://api.kinopoisk.dev/documentation)