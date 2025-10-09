# Devops avançado

Disciplina ministrada pelos professores Cassio Trindade e Marcelo Veiga Neves.

## Introdução
Professor Cassio começa falando sobre o que não é DevOPS. Fala de como surgiu, devido a duas coisas:

- Necessidade de mudança (desenvolvedor);
- Necessidade de estabilidade (ops).

É uma **cultura** de entrega continua de produtos digitais, com valor. O objetivo é entregar valor contínuo (sempre soltando produto no mercado). Combina áreas de “desenvolvimento” e “operações”.

Principais práticas:
- Integração contínua (CI);
- Distribuição/implantação contínua (CD);
- Virtualização (IaaS) e containers;
- Infraestrutura como código;
- Gerenciamento de configuração;
- Comunicação e colaboração (soft skill).

## Planejamento
- Metas e Objetivos
  - Levantamento das dificuldades
  - Definição do objetivo
  - Definição de metas (SMART)
- Equipe multidisciplinar
  - Integração e treinamneto
- Método / Ferramentas
  - Scrum, kanban e extreme programming (XP);
  - GIT, AWS, Azure, jenkins, etc…

## Build / Construção

**Etapa 1 (foco no build)**: Na etapa de build, o professor comenta que utilizaremos ECR (Elastic Container Registry, parece ser um dockerhub especializado da AWS para docker). Em seguida, a imagem passa para um ECS (Elastic Container Service). Depois vai para um Fargate (serverless) junto de um cluster.

Fluxo:

- Github;
- CodeBuild;
- ECR
- ECS
  - Dentro do ECS, professor criou um cluster usando infraestrutura com AWS Fargate - (serverless)
    - No cluster criado, o processor deu um “Run Task” para rodar o serviço dele.
    - Na página EJS que ele criou, mostra o IP interno da task que ele criou.
    - Fica aqui a dica, entender a diferença entre Task e Service.
    - A gente usa a imagem criada no ECR

**Etapa 2 (CI e CD)**: Professor começa explicando a diferença entre Continuous Integration e Continuous Deployment: 

- CD -> Depende de ação manual (alguém apertar um botão) para ir para produção;
- CI -> Um evento (commit) dispara um pipeline que automaticamente põe a aplicação em produção.

Professor Cassio menciona a importância da etapa de testes unitários de código depois da etapa de build (que é o que já fazemos no dia a dia). Menciona o cypress para testes de frontend (que a gente também já utiliza).

- Definição de um load balancer para definir um nome mais amigável para não precisar ficar acessando por IP (serviço de HTTP)
- Target group é para IP addresses (não é lambda, não é instâncias).
- No ECS tinhamos criado Tasks (task definition) e nesta etapa 2 faremos a configuração de um **serviço**.
  - Havia sido feito a configuraçao para rodar uma única Task na etapa 1.
  - Agora a ideia é criar um serviço que roda 3 tasks.
  - Um service é um conjunto de tasks.
    - Proporcionar alta disponibilidade
    - Trata-se de um cluster ao invés de uma task isolada
    - Se um nó cai, sobe outro

**Etapa 3 (criar um pipeline)**: A aws disponibiliza um recurso chamado CodePipeline.

- Adicionar um source (github)
- Indicar o repositório;
- indicar a branch
  - O push na main dispara o pipeline
  - Cria-se um webhook que é associado a uma execução
- É um single build.
- O deploy provider é o ECS
- Indicar o nome do cluster que criamos na etapa anterior
- Indicar o Service que criamos antes
- Professor usou um “Image definition file” que descreve o nome do conteiner, imagem, tag, etc

**Etapa 4: Testar a infraestrutura**

- Fazer uma alteração simples no código e comitar/push
  - Professor alterou o fundo da index pra amarelo.
- O pipeline tem que disponibilizar a nova aplicação automaticamente sem interação do usuário.

Na aula 2, parte 1 o professor faz uma revisão dos conceitos envolvidos na atividade prática.

- Container -> empacota código fonte num ambiente próprio…
  - Guardar imagens:
    - Dockerhub para armazenar containers (repositório)
    - A AWS tem ECR (repositório)
  - Usar essas imagens (orquestração e gerenciamento)
    - ECS
    - Kubernetes (precede o ECS da AWS) que é open source
    - EKS (kubernetes na AWS)
  - Executar essas imagens / rodar / deploy / publicar
    - Serverless (AWS fargate)

Professor Cassio comenta algo importante, que a cultura devops é se preocupar com a entrega, com o código, com o que agrega valor. Não dedicar tanto tempo em cima de servidor, montar tudo sozinho. Consumir serviços que tem que disponibilizar o servidor para gente. Alta disponibilidade.

Importante: qualquer coisa que desejamos fazer na AWS, precisa existir obrigatoriamente uma conta (IAM Service Role) definida, com as devidas políticas de segurança atribuídas.

Professor menciona algumas coisas interessantes como:

- Cloudwatch -> geração de eventos de pipelines
  - Notificações SNS, falhas no pipeline, stages cancelados
- AWS CloudTrail pode ser usado para auditar AWS api calls

## Exemplo de CI com BeanStalk

**Etapa 1: Criar o ambiente no elastic beanstalk**

Aqui é demonstrado pelo professor como criar um pipeline de CI com Beanstalk da AWS.

- servidor web
- especificar os ambientes
  - homologation
  - production
- o Beanstalk faz tudo, cria tudo sozinho, load balancer, subnets, dá até para configurar - um domínio já existente. Já deixa rodando
- Cria uma aplicação de exemplo “app-modelo” em NodeJS ou qualquer coisa que seja.

**Etapa 2: Configurar CodeCommit (parecido com o uso do Github)**

- Cria um repositório
  - Permite clonar o repositório
  - Necessário de usuário no IAM manager
  - Professor comenta um pouco sobre o IAM manager (minuto 10 ~ 12 da parte 2 da aula 2)
- Professor clonou o repositório que ele criou por dentro da AWS beanstalk na máquina dele
  - Criou dois ambientes produção e homologação
  - Criou pipelines para com base no commit e push no beanstalk atualizar a aplicação em homologação.

Após, o professor Cassio instalou o Jenkins Codeya e fez um exemplo de CI com Jenkins.