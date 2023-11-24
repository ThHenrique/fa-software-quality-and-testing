# Stress and Performance Test

Este Projeto foi desenvolvido visando demonstrar na prática a aplicação de testes de performance e stress de um software

> Aplicação desenvolvida por Gabriel Camargo Leite, João Marcos de Oliveira Santos e Thiago Henrique Ferreira alunos do 6º semestre do tecnólogo em Desenvolvimento de Software Multiplataforma, na FATEC Profº Jessen Vidal - São José dos Campos, SP :rocket:

### :hammer_and_wrench: Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas neste projeto: `Typescript, Vite, Grafana K6, Grafana, influxdb, Docker`

### :gear: Como utilizar

Para executar este projeto, é preciso seguir o passo a passo abaixo.

- Tutorial para rodar o projeto

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/ThHenrique/fa-software-quality-and-testing.git

# Acesse a pasta do projeto
$ cd fa-software-quality-and-testing/stress-performance-test

# instale as dependencias
$ yarn install

# Utilize o docker-compose para baixar e configurar o grafana e o banco de dados influxdb
$ docker-compose -f docker/docker-compose.yml up -d

# Execute os testes
$ yarn test
```

O projeto será executado localmente, aguarde a realização de todos os testes e visualize a performance obtida no Grafana (pelo link [http://localhost:3001](http://localhost:3001))
