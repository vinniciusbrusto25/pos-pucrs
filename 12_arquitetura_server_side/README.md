# Arquitetura Server-Side

Disciplina ministrada pelos professores Cassio Trindade e Miguel Gomes Xavier.

## Conteúdo

Na arquitetura server-side, a renderização das páginas WEB é feita do lado do servidor. O servidor entrega todo o HTML pronto para o “frontend” em detrimento a arquitetura client-side onde os dados são entregues ao navegador e ele faz a renderização das páginas usando frameworks como React, Vue, Angular, entre outros.

## Arquitetura MVC
O professor começou explicando arquitetura server-side trazendo um exemplo de arquitetura MVC do lado do servidor. Nesse projeto, está sendo EJS para renderizar as páginas do lado do servidor.

EJS é semelhante a JSP, onde temos comandos Java misturados com HTML. No EJS, temos comandos Javascript misturados com HTML.

### Model
Aqui estão as lógicas para acesso e manipulação dos dados. Idas ao banco relacional, a bancos noSQL, cache, etc, são encapsuladas neste pacote.

### View
Camada de apresentação, onde estão as EJSs.

### Controller
Camada onde batem as requisições, e o controller decide qual model chamar para recuperar dados necessários para aplicar determinada regra de negócio. É o que faz o trabalho mais pesado nesse modelo de arquitetura.

### Programação Assíncrona
O professor Cassio falou da programação assíncrona. Deu exemplo de uma aplicação que contém a chamada de duas instruções, sendo a primeira delas a leitura de um arquivo grande txt e a segunda a simples impressão de um console.log(‘Arquivo LIDO’). Ao executar a aplicação, o primeiro texto impresso no console é o Arquivo LIDO porque o Node por padrão é assíncrono. Como a tarefa de ler o txt é mais demorada e ele manteve a execução em segundo plano e chamou imediatamente a próxima execução.

### Programação Reativa
Os professores comentaram alguns aspectos relacionados a programação reativa, abordando os seguintes tópicos:

- Observáveis e observadores
- Bibliotecas de programação reativa
- Fluxos de eventos;
- Assinatura e Cancelamento;
- Tratamento de erros;
- Aplicações em tempo real;
- Integração com bancos de dados;
- Aplicações assíncronas de alto desemepenho concorrentes;
- Testes unitários;
- Padrões de design reativos
- Operadores reativos.
  - Map -> Transformar em fluxo de dados, aplica uma operação que transforma os dados.
