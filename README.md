## Starter Node TypeScript API REST e Graphql

Esse é um stater para criação de APIs REST e Graphql com Node e TypeScript.

## Tecnologias

- Node.js
- TypeScript
- Express
- Graphql
- TypeORM
- Bcrypt
- JWT
- Jest

## Usando

1 - Baixar o projeto em seu ambiente de trabalho e instalar as dependências

```
yarn i
```

ou

```
npm i
```

2 - Após instalar as dependências deve configurar o banco de dados no arquivo <code>.env</code>

```
DB_CONNECTION=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=boilerplate-graphql-ts
```

3 - Agora para estartar a aplicação em modo de desenvolvimento basta rodar o comando abaixo:

```
yarn dev
```

ou

```
npm dev
```

4 - Para buildar o projeto para produção basta usar o comando abaixo:

```
yarn build
```

ou

```
npm build
```

5 - Agora basta rodar o comando abaixo para levantar a aplicação em movo produção:

```
yarn start
```

ou

```
npm start
```

## Collection

Importe essa [collection](postman_collection.json) no Postman para saber quais o serviços REST e GRAPHQL que já existem.

## Todo

- Continuar na criação dos relacionamentos
- Criar uma interface de paginação
- adicionar o class-validator para validar os models
- Criar Seed para popular o banco
- Ajustar build da imagem docker
- ver as sequences no banco que não tão de 1 em 1
- ver update de functionality

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

## Contribuir

Leia [CONTRIBUTING.md](CONTRIBUTING.md) para obter detalhes sobre nosso código de conduta e o processo de envio de solicitações pull para nós.

## Versão

1.0.0
