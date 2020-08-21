/**
 * Para Criar um usuário:
 *  Nome
 *  Email
 *  Password
 * 
 * Formas para definir o tipo de variavel:
 * 1) colocar nome com um valor padrão (como por exemplo uma string vazia) faz com que o compilador entenda que name é do tipo string
 * 2) fazendo com que seja um dado obrigatorio, por exemplo o campo email obrigatoriamente tem que receber uma string
 */

export default function createUser(name = '', email: string, password: string) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}