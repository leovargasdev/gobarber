<h1 align="center">
  <img alt="GoBarber" title="Fastfeet" src=".github/logo.svg" width="100px" />
</h1>

<h2 align="center">
  GoBarber
</h2>

<p>
  O GoBarber uma aplicação completa(Back-end, Front-end, Mobile) desenvolvida durante as aulas do Bootcamp GoStack da <a target="_blank" href="https://rocketseat.com.br/">Rocketseat</a>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leeonardovargas/gobarber.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leeonardovargas/gobarber.svg">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leeonardovargas/gobarber.svg">

  <a href="https://github.com/leeonardovargas/gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leeonardovargas/gobarber.svg">
  </a>
  
  <a href="https://github.com/leeonardovargas/gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/leeonardovargas/gobarber.svg">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/leeonardovargas/gobarber.svg">
</p>

## :computer: Tecnologias

-  [Node.js](https://nodejs.org/en/)
-  [React](https://pt-br.reactjs.org/)
-  [React Native](https://reactnative.dev/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [Styled-Components](https://styled-components.com/)
-  [React-Icons](https://react-icons.netlify.com/)
-  [Date-fns](https://date-fns.org/)

## 💻 Projeto

  - Descrever aplicação.
  - Tanto no Web quanto no mobile foi usado o [Redux](https://redux.js.org/) e o [Redux-Saga](https://redux-saga.js.org/).
  - Middleware para validação de entrada [Yup](https://github.com/jquense/yup)
  ### Backend
  -  [Docker](https://docs.docker.com/)
  -  [PostgreSQL](https://www.postgresql.org/)
  -  [MongoDB](https://www.mongodb.com/)
  -  [MailTrap](https://mailtrap.io/)
  -  [Redis](https://redis.io/)

  ### Web
  -  [Unform](https://unform.dev/)
  -  [React-Toastify](https://github.com/fkhadra/react-toastify#installation)

  ### Mobile
  -  [React-Navigation V5](https://reactnavigation.org/)

## :rocket: Instalação e execução

Faça um clone desse repositório

  ### Backend
  1. A partir da raiz do projeto, entre na pasta rodando `cd backend`;
  2. Execulte `yarn install` ou `yarn` para instalar as dependências;
  2. Execulte `node ./init.js` para preencher as variáveis de ambiente;
  3. Execulte `docker-compose up` para iniciar o servidor backend com todos os bancos de bados;
  
  ### Web
  1. A partir da raiz do projeto, entre na pasta rodando `cd frontend`;
  2. Execulte `yarn install` para instalar as dependências;
  3. Execulte `yarn run start` para iniciar o servidor de desenvolvimento;
  4. Abra `http://localhost:3000` para ver o projeto no navegador.

  ### Mobile
  1. A partir da raiz do projeto, entre na pasta rodando `cd mobile`;
  2. Execulte `yarn install` para instalar as dependências;
  3. Execulte `yarn run start` para iniciar o servidor de desenvolvimento;
  4. Cheque o ip do servidor e substitua `localhost` do atributo `baseURL` no arquivo `src > services > api.js`;
  5. Execulte `yarn run android` para iniciar a instalação no smartphone;

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
