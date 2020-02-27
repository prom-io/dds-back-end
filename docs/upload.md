# Api для загрузки файла

### Url and methods

> **Url**: /file/upload

> **Method**: POST

### Данные для загрузки

1. filename - название файла
2. file - сам файл

### Пример

###### Запрос

```
 http://localhost:3000/file/upload
```

Тело запроса

filename=test.jpg
file - сам файла

###### Ответ
Status code: 200 Success

```
{
	"status": "success"	
}
```