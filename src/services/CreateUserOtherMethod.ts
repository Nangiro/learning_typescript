/**
 * Para Criar um usuário:
 *  Nome
 *  Email
 *  Password
 * 
 *  Pode-se criar um meio de passar as informações desconstruindo um objeto
 *  OBS: Para que uma info seja opcional adiciona-se o "?" antes dos ":" como no nome
 *  
 *  2 jeitos de criar um vetor:
 *    1) Array<string> = Criou um array que contem strings
 *    2) colocar um | para adicionar um objeto que contenham mais informações
 *      Exemplo: {title: 'JavaScript', experience: 100}
 *    Obs: Para o metodo 2 deve-se criar mais uma interface
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string> | TechObject;
}

export default function createUser({ name = '', email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}