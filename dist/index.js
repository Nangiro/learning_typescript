"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
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
  3) yarn tsc src/index.ts
*/
//Para criar uma aplicação com express
var app = express_1.default();
app.get('/', function (request, response) {
    return response.json({ message: 'Hello World' });
});
app.listen(33333);
