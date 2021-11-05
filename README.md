# copero

A free service to store plain text.

## API

### `GET /api/all`

> https://copero.vercel.app/api/all

Returns a list of:

```typescript
interface Snippet {
  snippet: string;
  slug: string;
}
```

Example:

```json
[
  {
    "snippet": "Hello, world!",
    "slug": "VPLkxD"
  }
]
```

### `GET /api/all?only={slug/snippet}`

> https://copero.vercel.app/api/all?only=slug

Returns a list of strings, example:

```json
["VPLkxD", "fdOqXz", "GIobVf", "YlWAeH", "ggoXpB"]
```

### `POST /api/post`

Example using curl:

```bash
curl -d '{"snippet":"hello world"}' -H "Content-Type: application/json" -X POST https://copero.vercel.app/api/post
```

If everything goes OK, it will return:

```json
{
  "snippet": "hello world",
  "slug": "akgAWr"
}
```

## TODO

- Learn how to do a decent frontend

- Agressively refactor the frontend

## Licence

This project is licensed under the [MIT Licence](./license).
