
## How it Works

Use http://localhost:4000/game endpoint and pass in body as JSON your board:

For example: 
```
{
"board": [
[0, 0, 0],
[0, 1, 0],
[0, 0, 0]
]
}
```
Result will be a status and a change:

``{
"status": 200,
"result": [
[
0,
0,
0
],
[
0,
0,
0
],
[
0,
0,
0
]
]
}``

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
