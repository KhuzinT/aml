# Список фильмов

### Что сделано?

Реализованы две страницы - Home и Favorite. Home - список всех доступных фильмов, Favorite - только понравившихся. На Home странице при нажатии на звезду в углу постера можно добавить/удалить фильм из избранного. На Favorite странице можно только удалить

### Что не сделано, а хотелось бы?

Не сделана авторизация и нет возможности создавать свои списки фильмов. Также используется мало информации о фильме (только название, постер и дата выхода), но если добавить больше информации, то концептуально ничего не изменится 

### API

1) `GET /api/home`
Получить список всех фильмов
2) `PUT /api/home/{id}`
Добавить/удалить фильм из избранного по id 
3) `GET /api/favorite`
Получить список понравившихся фильмов 
4) `PUT /api/favorite/{id}`
Удалить фильм из понравившихся по id 

### Как запустить?

1) Перейдите в `backend` и выполните `./mvnw spring-boot:run`
2) Перейдите в `frontend` и выполните `npm install`, а затем `npm start`

### Как выглядит? 

Несколько скриншотов в папке img
