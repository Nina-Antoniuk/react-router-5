# Домашне завдання 5

## Тема: react router

Завдання виконано відповідно ТЗ -
https://github.com/goitacademy/react-homework/tree/master/homework-04

## Технології:

- React;

- Для компонентов описаны propTypes, и где необходимо, defaultProps

- preview -
  https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view

- https://developers.themoviedb.org/3/trending/get-trending - список самых
  популярных фильмов на сегодня для создания коллекции на главной странице. +
- https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по
  ключевому слову на странице фильмов. +
- https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной
  информации о фильме для страницы кинофильма. +

[

- https://developers.themoviedb.org/3/movies/get-movie-credits - запрос
  информации о актёрском составе для страницы кинофильма.
- https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров
  для страницы кинофильма.
  https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  ]

- В приложении должны быть следующие маршруты. Если пользователь зашел по
  несуществующему маршруту, его необходимо перенаправлять на домашнюю
  страницу. +
- '/' - компонент <HomePage>, домашняя страница со списком популярных
  кинофильмов. +
- '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому
  слову. +
- '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной +

информацией о кинофильме. /movies/:movieId/cast - компонент <Cast>, информация о
актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах.
Рендерится на странице <MovieDetailsPage>.

Добавь асинхронную загрузку JS-кода для маршрутов приложения используя
React.lazy() и Suspense.
