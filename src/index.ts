import express, { response } from 'express';

/*
  1) yarn init -y
  2) yarn add typescript -D
  3) Criar pasta src
  4) Criar arquivo index.ts
  5) yarn add express
  6) yarn add -D @types/express
  
  Para executar o projeto usando typescript:
  1) yarn tsc --init
  2) alterar a função "outDir": "./dist", 
  3) yarn tsc
  4) node dist/index.js
*/

//Para criar uma aplicação com express
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(33333)