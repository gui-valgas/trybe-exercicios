# Praticando Docker Compose

## **Estrutura do projeto:**

- O objetivo será criar três serviços que vão comunicar-se entre si. Vamos simular uma arquitetura muito comum com um banco de dados, um serviço de back-end e um serviço de front-end.

```docker
aula-docker-compose/
├── backend
│   └── Dockerfile
├── frontend
│   └── Dockerfile
└── docker-compose.yaml
```

- Crie a pasta `backend` e o arquivo Dockerfile com o seguinte conteúdo:

```docker
FROM betrybe/docker-compose-example-backend:v1
ENTRYPOINT ["npm", "start"]
```

-  crie a pasta `frontend` e o arquivo Dockerfile com o seguinte conteúdo:

```docker
FROM betrybe/docker-compose-example-frontend:v1
ENTRYPOINT ["npm", "start"]
```

Para o database, vamos usar a seguinte Imagem Docker já pronta:

`betrybe/docker-compose-example-database:v1`

## **Criando serviços**

- No Compose existe o conceito de services. Logo, vamos configurar nosso arquivo Compose com os três serviços que citamos acima

```docker
version: '3'
services:
  frontend:
    build: frontend/    # Especificamos o contexto, ou seja, a pasta onde está o Dockerfile.
  backend:
    build: backend/     # Mesmo caso aqui.
  database:
    image: betrybe/docker-compose-example-database:v1    # Especificamos a Imagem Docker diretamente.
```

## **Mapeamento de portas**

A próxima configuração importante de cada serviço é o mapeamento de portas.  

 Dentro de cada serviço, podemos especificar o `ports`, que é uma lista de mapeamentos de portas entre o computador local e as portas do container.

```docker
version: '3'
services:
  frontend:
    build: frontend/
    ports:
      - 3000:3000
  backend:
    build: backend/
    ports:
      - 3001:3001
  database:
    image: betrybe/docker-compose-example-database:v1
```

## **Reinicialização**

O Compose nos permite configurar uma **política de reinicialização!**

Dizemos ao Compose o que ele deve fazer caso um container pare sua execução, de maneira automática! Devemos configurar este comportamento através da chave restart.

O Compose possui quatro políticas de reinicialização, sendo elas:

`no` : define que o container não reiniciará automaticamente (Padrão);  

`on-failure`: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;  

`always`: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;  

`unless-stopped`: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente.

```docker
version: '3'
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```

## **Usando variáveis de ambiente**

Variável de ambiente é um recurso disponível nos sistemas operacionais que permite criar uma variável no formato `NOME_DA_VARIÁVEL=VALOR`

```docker
version: '3'
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```

## **Dependência entre Serviços**

Uma configuração importante para garantir a ordem de inicialização e encerramento dos nossos serviços é a chave `depends_on`. Com esta chave, conseguimos criar dependências entre os serviços!

```docker
version: "3"
services:
  frontend:
    build: frontend/
    restart: on-failure
    ports:
      - 3000:3000
    depends_on:
      - backend
  backend:
    build: backend/
    restart: on-failure
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: on-failure
```

- Cada serviço do nosso arquivo docker-compose.yaml recebeu a chave depends_on, que é uma lista de quais serviços o Compose deve executar primeiro, antes de executar o serviço atual. Nesse exemplo, os serviços serão iniciados respeitando a ordem que especificamos: primeiro o serviço database será iniciado, depois o serviço backend e finalmente o serviço frontend!

## **Subindo todos os serviços**

- Para subir todos os serviços, utilizamos o comando `docker-compose up -d` no terminal.
  - a flag `-d` serve para exercutarmos todos os serviços em **segundo plano**

## **Reconstruindo a Imagem Docker**

Vamos alterar o arquivo Dockerfile do front-end, onde substituiremos a linha de ENTRYPOINT, o novo arquivo ficará assim:

```docker
FROM betrybe/docker-compose-example-frontend:v1
ENTRYPOINT ["sh", "-c", "npm start > /var/log/frontend/logs.txt"]
```

_Podemos deixar nítido que as imagens precisam ser construídas novamente usando o Compose. Para isso, utilizamos a flag --build, junto com o comando docker-compose up_


## **Descendo todos os serviços**

Se quisermos descer nossos serviços, podemos utilizar o comando docker-compose down. Com ele, todos os containers serão parados e removidos.

## **Criando Volumes**

Os volumes nos permitem persistir arquivos entre execuções dos nossos serviços. Essa funcionalidade é super importante quando subimos serviços como banco de dados, onde precisamos manter os dados caso o serviço seja reiniciado.

```docker
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db

volumes:
  dados-do-banco:
```

## **Ilustração da integração entre volumes e serviços no Compose**

<img src="https://content-assets.betrybe.com/prod/Integra%C3%A7%C3%A3o%20entre%20volumes%20e%20servi%C3%A7os%20no%20Compose.png">  


## **Criando redes virtuais**

o Compose nos permite criar múltiplas redes virtuais entre os serviços. Isso é muito importante, pois nos permite criar arquiteturas mais seguras, por exemplo:

- O serviço front-end só precisa se comunicar diretamente com o back-end;
- O serviço back-end precisa se comunicar tanto com o front-end quanto com o database;
- O serviço database só precisa se comunicar diretamente com o back-end.

```docker
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend
    networks:
      - rede-virtual-1
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
    networks:
      - rede-virtual-1
      - rede-virtual-2
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db
    networks:
      - rede-virtual-2

volumes:
  dados-do-banco:

networks:
  rede-virtual-1:
  rede-virtual-2:
```

<img src="https://content-assets.betrybe.com/prod/Integra%C3%A7%C3%A3o%20entre%20redes%20virtuais%20e%20servi%C3%A7os%20no%20Compose.png">