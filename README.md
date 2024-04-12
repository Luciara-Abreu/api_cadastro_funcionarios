# api_vendas

API Rest em TypeScript

O projeto api-rest-typescript é uma API Rest desenvolvida em TypeScript, visando fornecer uma base sólida e escalável para aplicativos web e serviços. Utilizando as mais recentes tecnologias e melhores práticas, este projeto oferece uma estrutura robusta para criar e gerenciar endpoints de forma eficiente e segura.

Funcionalidades e Tecnologias Principais:

Express: Utilizamos o framework Express para lidar com rotas, middlewares e solicitações HTTP de forma simples e eficiente.
TypeORM: O TypeORM é utilizado para facilitar a interação com o banco de dados, oferecendo suporte a múltiplos bancos de dados, como MySQL e PostgreSQL.
Celebrate: Esta biblioteca é empregada para validação de dados na entrada da API, garantindo que apenas dados válidos sejam processados.
Cors: Implementamos o Cors para permitir o acesso controlado a recursos da API a partir de diferentes origens.
Dotenv: Usamos o Dotenv para carregar variáveis de ambiente de forma segura, facilitando a configuração da aplicação em diferentes ambientes.
Express-async-errors: Esta biblioteca ajuda a lidar com erros assíncronos de forma mais eficiente no Express.
TypeScript: A linguagem de programação TypeScript é utilizada para trazer tipagem estática e outros recursos avançados ao JavaScript, proporcionando maior segurança e produtividade no desenvolvimento.
Nodemon: Nodemon é utilizado durante o desenvolvimento para reiniciar automaticamente o servidor sempre que detectar alterações nos arquivos.
Scripts Úteis:

dev: Inicia o servidor de desenvolvimento utilizando ts-node-dev, habilitando a depuração e a transpilação apenas.
migration:generate: Gera migrações de banco de dados com base no TypeORM.
migration:run: Executa as migrações de banco de dados.
build: Compila o projeto TypeScript para JavaScript, preparando-o para implantação.
start: Inicia o servidor em ambiente de produção.
Dependências e DevDependencies:

O projeto faz uso de diversas dependências essenciais, como Express, TypeORM e outras, além de devDependencies para o ambiente de desenvolvimento, como tipos de bibliotecas e ferramentas de transpilação.

Com um ambiente configurado para desenvolvimento ágil e um conjunto de tecnologias robustas, o api-rest-typescript é uma escolha sólida para construir APIs escaláveis e modernas em TypeScript.
