# Como rodar SonarQube com Docker (compose)

Execute o arquivo compose usando o comando Docker compose:

```bash

docker-compose up -f docker/sonarqube.docker-compose.yaml

```

Verifique os logs do compose para identificar possíveis erros:

```bash

docker-compose logs

```

Talvez ocorra algum problema com a memória, para resolver isso use o comando abaixo:

```bash
wsl -d docker-desktop -u root

sysctl -w vm.max_map_count=262144
```

**Importante:**

1. Você vai precisar do nome da network criada para o container do SonarQube
2. Você vai precisar obter o endereço de IP (IPv4) do container do SonarQube

Com o nome do container do SonarQube em mãos execute:

```bash

docker network inspect <sonarqube-container-network>

```

obs: Altere o valor <sonarqube-container-network> para o nome da network citada no número 1.

```bash
$ docker network inspect <sonarqube-container-network>
[
    {
        "Name": "<sonarqube-container>",
        "Id": "d33093528972c4010a499ad0688dcfbbf58c23bd51f6c6181f230ecfa44338b1",
        ...
        "Containers": {
            "94283a2328524265ec8ea429c002499bed5924f74f43d3a5887d734ab6899331": {
                "Name": "<sonarqube-containeR>",
                "EndpointID": "5477e5f0cd7b7df1811db27f3f03dbf144344888c2b17317163268b41f00d82c",
                "MacAddress": "02:42:c0:a8:d0:03",
                **"IPv4Address": "192.168.208.3/20",**
                "IPv6Address": ""
            },
        },
    }
]
```

**Guarde o endereço IP em destaque (IPv4)**

### SonarQube Setup

A aplicação irá iniciar na porta 9000, você deve acessá-la e fazer as seguintes alterações:

1. No primeiro acesso você deve trocar a senha padrão da aplicação:
   user: admin
   pass: admin

2. Navegue para administration > security > Global Permissions:

```
  administrators:
    administer system: check
    administer:
      Quality Gater: check
      Quality Profiles: check
    execute analysis: check
    create: check
  users:
    administer system: check
    execute analysis: check
    create: check
```

3. My Account > Security > Generate Tokens:

- Adicione o nome para o token;
- Selecione o tipo Global analysis token;
- Gere o token;
- Copie o token;

### Finalizando

Abra o arquivo **docker/sonar-scanner.docker-compose**

- Altere as variaveis

```
  SONAR_HOST_URL= <sonar.host.url> IPv4 dos passos anteriores
  SONAR_SCANNER_OPTS=<sonar.projectKey> Chave do projeto UNICA
  SONAR_TOKEN = <sonar.token> Token gerado
  <path-to-src> = Caminho do diretorio a ser analisado
  <sonarqube-network> = NOME DA NETWORK
```

Abra o arquivo **sonar-project.properties**

- Altere as variaveis

```
  sonar.projectKey=<sonar.projectKey> Chave do projeto UNICA
  sonar.projectName=<sonar.projectName> Nome do projeto
  sonar.token=<sonar.token> Token gerado
  sonar.host.url=<sonar.host.url> IPv4 dos passos anteriores
```

Execute o arquivo compose sonar-scanner para colher metricas do seu projeto:

```bash

docker-compose up -f docker/sonar-scanner.docker-compose.yaml

```

Visualize o resultado na porta 9000
