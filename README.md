# Velpflix - Movie Streaming Site 🎥
https://velpflix.netlify.app/
![Velpflix2](https://user-images.githubusercontent.com/89810118/215290702-7fdb95b1-52d4-490d-bdfd-69f603b4ae3a.png)

# Search your favourite movies 👀
Inspired from Netflix, created my personal Velpflix logo along with movie-streaming site features. Site still currently in the making 🛠️
![Velpflix3](https://user-images.githubusercontent.com/89810118/215290704-0df6f5dc-188c-42c2-8598-2d1266a6db29.png)

### Built Using

* [JavaScript](https://www.javascript.com/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://web.dev/learn/css/)
* [FetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [OMDb API](https://www.omdbapi.com/)

## API Reference
https://www.omdbapi.com/
#### Get all items



```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
