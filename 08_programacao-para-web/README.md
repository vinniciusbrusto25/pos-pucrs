# Programação para web

Disciplina ministrada pela professora Andrea Konzen e pelo professor Luis Fernando Planella Gonzalez.

## Histórico
A professora passou um breve histórico da internet e mencionou 3 fases importantes da web.

- Web 1.0 -> conteúdo estático (90s)
- Web 2.0 -> conteúdo interativo (2000s) início de grandes players Google, Youtube, entre outros.
- Web 3.0 -> web inteligente, personalização de conteúdo de propaganda de acordo com os gostos dos usuários.

## Arquiteturas web
### Cliente-servidor (arquitetura de três camadas)

Na arquitetura cliente-servidor, temos estas três camadas:

- Camada de frontend (apresentação)
- Camada de backeng (negócios)
- Camada de dados (banco de dados)

### Arquitetura orientada a Serviços (SOA)
Serviços independentes. Podem ser acessados por outros serviços, ou aplicativos. Cada serviço desenvolvido será responsável por uma tarefa específica.

Independentes de qualquer plataforma específica, linguagem de programação ou SO.

Enfatiza a integração e a interoperabilidade entre diferentes sistemas e aplicações.

(ponto negativo) Complexa e exige esforço significativo de design e implementação.

### Arquitetura baseada em microserviços
Semelhante a SOA, a aplicação é dividida em microserviços independentes que se comunicam entre si via APIs.

Cada microserviço tem seu próprio banco de dados.

Equipes consigam trabalhar de forma independente. Não gera problemas no contexto geral da aplicação. Tá focado específico num serviço proporcionando escalabilidade.

Conseguimos trabalhar com substituição (de linguagem, de infraestrutura) de forma mais facilitada.

Permite maior tolerância a falhas.

(ponto negativo) complexidade na orquestração gerenciamento dos serviços.

## Dimensões de projeto
Como as aplicações podem ser estruturadas?

Seguem 3 pontos principais mencionados na aula:

- Estrutural
  - define a organização das informações a serem tratadas pela app e os seus relacionamentos
- Navegacional
  - como acesso as informações no sistema web, como fica a navegação
- Apresentação
  - como as informações são apresentadas ao usuário.

## Protocolos
- sintaxe -> formato dos dados, ordem
- semântica -> significado
- timing -> tempo

exemplos:
tcp/ip, http, https, ftp, dns, smtp/pop3/imap, icmp.

## Protocolos de transporte
- tcp e udp
- Verifica a confiabilidade dos dados, verificando a ordem correta dos dados.

### TCP
Aplicações práticas:
- email
- navegação na internet
- transferência de arquivos / download de arquivo na internet
- streaming de vídeo

### UDP
Sem garantias de que o pacote chegue no destino da forma correta.
Vantagem é a velocidade da transmissão. Desvantagem é a segurança.

Aplicações práticas:
- Jogos online (respostas rápidas e responsivas)
- Transmissão de vídeo ao vivo
- Aplicativos de voz sobre IP (skype e zoom)
- IOT
- DNS

## Protocolos de Aplicação
HTTP, HTTPS, FTP, SMTP, DNS, SSH, 

# Conclusão

A impressão que ficou para mim, refletindo sobre os conteúdos vistos nas 3 aulas, foi a de que as duas primeiras ficaram um pouco repetitivas, considerando o longo período que atuo na área de TI. Muitas vezes, os assuntos trazidos já eram de meu conhecimento. Confesso que me frustrei um pouco com as duas primeiras aulas, pois foi muita teoria e muito do que eu vi já vivenciei na minha carreira. 

Na terceira parte, com as atividades práticas, tive uma sensação um pouco melhor com a demonstração do professor na prática de aspectos importantes do desenvolvimento web como design responsivo.