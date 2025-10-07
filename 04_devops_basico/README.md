# Devops básico

Disciplina ministrada pelos professores Fabricio Veronez e Marco Aurélio Souzan Mangan.

## Fundamentos de DevOps

É comum de acontecerem conflitos entre os times de desenvolvimento e operação por que geralmente atuam de forma isolada nas empresas. Nesse contexto, surge o conceito de cultura devops, que visa unir esses times a fim de reduzir os atritos entregando soluções de forma mais rápida e eficiente.

Algumas técnicas fazem parte dessa cultura:

- Fluxo (integração, testes, entregas pequenas);
- Feedbak (métricas, observabilidade, testes end-to-end);
- Aprendizado contínuo (padronização do que "dá certo").

Outro aspecto importante é o twelve factor apps, que trata-se de uma metodologia para definição de boas práticas em aplicações web. Alguns exemplos dessa metodologia são: base de código única, uso de gerenciadores de dependências (maven ou npm), configuração por variáveis de ambiente, entre outros.

Professores comentaram sobre Git e Github. Que git é a tecnologia para versionamento, enquanto github é o repositório que armazena as versões, ou seja, são coisas distintas, mas se complementam.

O professor Fabricio Veronez deu um enfoque ao assunto de container e a diferença em relação a VMs (virtual machines).

### Docker
Professores trouxeram o docker como a implementação mais famosa do conceito de containers nos dias atuais.

Estudamos o dockerfile, que é o arquivo responsável por viabilizar a automação da criação de imagens.

### Pipelines CI/CD
Estudamos alguns conceitos importantes de devops como:

- CI (integração contínua) -> faz o build de forma automatizada a partir de eventos como o push de um novo commit. Faz o build somente, não implanta.
- CD (entrega/deploy contínuo) -> é um passo além do CI, pois uma vez feito o commit/push, o pipeline configurado se encarrega (em um dos estágios finais) de por a aplicação em produção, ou seja, de implantar, de fazer o deploy.

### Github Actions
Fizemos um exemplo de automação de workflows, com build, teste e deploy usando Node.js e Docker.

O exercício prático está disponível em: [conversao_temperatura](./exercicios/conversao-temperatura/)

### Sonar
Falado um pouco sobre o SonarQube, que já utilizo no meu trabalho. Serve para análise de código, e podemos vincular o disparo dessa análise a partir da configuração de um pipeline. Sempre que for feito um commit/push, chama a análise de código do Sonar. Ele verifica itens como cobertura de testes, vulnerabilidades, má prática (bad smell).


## Conclusão
A disciplina foi importante para reforçar alguns conceitos que já utilizo no meu dia a dia de trabalho, como Docker e pipelines.

No geral, a maioria dos conceitos apresentados são assuntos que já conheço e já utilizo no trabalho, no entanto, foi muito proveitoso o conteúdo passado pelo professor Fabricio, sobre Github Actions.