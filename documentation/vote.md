# Hamburger stats

Route: `/voting/vote`

METHOD: POST

BODY: 

```json
{
    "vote": "hamburger|hotdog"
}
```

Response:

```json
{
    "response": string,
}
```

or

```json
{
    "error": string,
}
```

## Description

Votes in the poll.