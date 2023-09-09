Aqui estão alguns comandos Docker com suas descrições para que você possa entender o que cada um faz:

docker pull <imagem>:

Este comando é usado para baixar uma imagem Docker do Docker Hub ou de um registro de contêiner. Você precisa especificar o nome da imagem que deseja baixar.
docker build -t <nome_da_imagem> <caminho_do_Dockerfile>:

Este comando é usado para criar uma nova imagem Docker a partir de um Dockerfile. A flag -t permite que você dê um nome ou tag à imagem.
docker run <opções> <imagem>:

Utilizado para criar e executar um novo contêiner com base em uma imagem existente. Você pode definir várias opções, como mapeamento de portas, variáveis de ambiente e muito mais.
docker ps:

Exibe uma lista de contêineres em execução no sistema.
docker ps -a:

Exibe uma lista de todos os contêineres, incluindo os que estão parados.
docker stop <contêiner>:

Este comando é usado para startar um contêiner. Você pode especificar o nome ou o ID do contêiner.
sudo docker start database-mysql

Este comando é usado para parar um contêiner em execução. Você pode especificar o nome ou o ID do contêiner.
docker stop <contêiner>:

Inicia um contêiner que foi parado anteriormente. Mais uma vez, você precisa especificar o nome ou o ID do contêiner.
docker restart <contêiner>:

Este comando para o contêiner e, em seguida, o inicia novamente.
docker rm <contêiner>:

Remove um contêiner existente. Você precisa especificar o nome ou o ID do contêiner.
docker rmi <imagem>:

Remove uma imagem Docker do sistema. Certifique-se de que nenhum contêiner esteja usando essa imagem antes de removê-la.
docker logs <contêiner>:

Exibe os logs de saída de um contêiner em execução. Isso é útil para verificar o que está acontecendo dentro do contêiner.
docker exec -it <contêiner> <comando>:

Permite executar um comando dentro de um contêiner em execução. A opção -it significa interativo, permitindo que você interaja com o comando.
docker network ls:

Exibe uma lista de redes Docker disponíveis no sistema.
docker volume ls:

Mostra uma lista de volumes Docker disponíveis no sistema.
docker-compose up:

Usado para iniciar serviços definidos em um arquivo docker-compose.yml. É uma maneira conveniente de gerenciar vários contêineres como uma aplicação única.
docker-compose down:

Para os serviços definidos em um arquivo docker-compose.yml e remove os contêineres associados.

docker-compose ps:

Exibe o status dos serviços definidos em um arquivo docker-compose.yml, incluindo informações sobre os contêineres em execução e as portas mapeadas.
docker-compose logs:

Exibe os logs de saída dos serviços definidos em um arquivo docker-compose.yml.
docker-compose build:

Constrói as imagens Docker para os serviços definidos em um arquivo docker-compose.yml, se as imagens ainda não existirem.
docker-compose down -v:

Para os serviços definidos em um arquivo docker-compose.yml e remove os contêineres associados, bem como os volumes de dados.
docker images:

Lista todas as imagens Docker disponíveis no sistema, incluindo as imagens que você baixou ou construiu.
docker network create <nome_da_rede>:

Cria uma nova rede Docker com o nome especificado. Isso pode ser útil para conectar contêineres entre si.
docker network connect <rede> <contêiner>:

Conecta um contêiner a uma rede Docker existente.
docker network disconnect <rede> <contêiner>:

Desconecta um contêiner de uma rede Docker.
docker volume create <nome_do_volume>:

Cria um novo volume Docker com o nome especificado. Volumes são usados para armazenar dados persistentes usados por contêineres.
docker volume rm <nome_do_volume>:

Remove um volume Docker existente.
docker stats <contêiner>:

Exibe estatísticas em tempo real sobre o uso de recursos (CPU, memória, E/S) de um contêiner em execução.
docker info:

Exibe informações detalhadas sobre o ambiente Docker, incluindo configurações e recursos do sistema.
docker version:

Exibe informações sobre a versão atual do Docker instalada no sistema.
docker system prune:

Remove todos os contêineres parados, imagens não utilizadas e outros recursos não utilizados para liberar espaço no sistema.
---------------------------------------------------------------------------------------------------------------------
** COMANDO PARA CRIAR UMA IMAGEM MYSQL NA VERSÃO DESEJAVA
docker run --name bd_mysql -e MYSQL_ROOT_PASSWORD=012345678910 -d mysql:8.0

** descobrir o ip do container
sudo docker inspect bd_mysql | grep IPAddress


** Para listar todos os contêineres Docker 
docker ps  ou docker container ls

** Para listar todas as imagens
docker images ou docker image ls

** Para listar todos os contêineres Docker incluindo os parados
docker ps -a ou docker container ls -a

** Para remover uma imagem: 
Substitua <nome_da_imagem> pelo nome ou ID da imagem que você deseja remover
docker rmi <nome_da_imagem>

** Para remover um contêiner: Para isso o cntainer tem que estar parado.
docker stop meu_conteiner
docker rm <nome_do_contêiner>

** BANCO DE DADOS
** Criar um Banco de Dados:
CREATE DATABASE api_cadastro_funcionarios;

comandos para entrar no container do banco de dados no docker ==> 
docker exec -it database-mysql mysql -u root -p

Descartar ou exluir o Banco de Dados Antigo (Opcional):
DROP DATABASE app_vendas;

Listar todos os DATABASES que tenho cadastrados  MySQL
SHOW DATABASES;

Listar todos os DATABASES que tenho cadastrados  PostgreSQL:
psql -U seu_usuario -d seu_banco_de_dados

Listar todos os DATABASES que tenho cadastrados  SQLite:
sqlite3 seu_banco_de_dados.db

Como ver ou Listar só esse meu database MySQL:
USE seu_banco_de_dados;

Listar tabelas: 
SHOW TABLES;

Para exibir os campos de uma tabela MySQL usando a linha de comando, 
você pode usar o comando DESCRIBE ou SHOW COLUMNS
DESCRIBE nome_da_tabela;
SHOW COLUMNS FROM nome_da_tabela;

Como ver ou Listar só esse meu database PostgreSQL:
psql -U seu_usuario -d seu_banco_de_dados

Como ver ou Listar só esse meu database SQLite:
sqlite3 seu_banco_de_dados.db
.tables

Comando para ver o ip do mysql no docker ==> 
sudo docker inspect database-mysql | grep IPAddress

//acessar o banco de dados pelo docker
docker exec -it database-mysql mysql -u root -p


** Como trocar o nome do meu banco de dados dentro do container?

Acesse o Contêiner: Use o comando docker exec para acessar o contêiner onde o banco de dados está em execução. Substitua <nome_do_contêiner> pelo nome ou ID do seu contêiner e <seu_shell> pelo shell que você deseja usar (geralmente /bin/bash ou /bin/sh).

bash
Copy code
docker exec -it <nome_do_contêiner> <seu_shell>
Inicie o Cliente do Banco de Dados: Uma vez dentro do contêiner, inicie o cliente do banco de dados que você está usando. Isso pode variar dependendo do banco de dados específico (por exemplo, mysql, psql para PostgreSQL, mongo para MongoDB, etc.). Você precisará fornecer as credenciais de acesso, como nome de usuário e senha, para se conectar ao banco de dados.

Renomeie o Banco de Dados: Use o cliente do banco de dados para renomear o banco de dados. A sintaxe exata pode variar dependendo do banco de dados que você está usando. Aqui estão exemplos para alguns bancos de dados populares:

MySQL:
RENAME DATABASE nome_antigo TO nome_novo;

PostgreSQL:
ALTER DATABASE nome_antigo RENAME TO nome_novo;

MongoDB (usando o shell mongo):
db.copyDatabase('nome_antigo', 'nome_novo');

Saia do Contêiner: Após concluir a renomeação do banco de dados, saia do contêiner.

Reinicie o Banco de Dados (opcional): Dependendo do banco de dados, você pode precisar reiniciar o processo do banco de dados dentro do contêiner para que as alterações tenham efeito.

