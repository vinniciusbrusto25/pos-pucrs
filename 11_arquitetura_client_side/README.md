# Arquitetura client side

Aula ministrada pelos professores André Luiz Mendes Pereira e Júlio Henrique Araújo Pereira Machado.

## Conteúdo

Dentre os vários conteúdos vistos em aula, o que mais me chamou atenção foi o React e Next.

Dentro do React, vimos:

* Ferramentas de construção;
* Componentes;
* JSX;
* Hooks;
* Consumo de APIs REST;
* Formulários

O `index.js` de um projeto react é o bootstrap, o que dá a partida na execução do projeto

### Instaladores

Professor Júlio comenta duas formas de criação de uma aplicação Javascript client-side:

* npm create react app
* npm create vite@latest
  - Gera arquivos .jsx

São duas possibilidades de criação de um novo projeto.

### Outras IDEs

Professor comenta de outras opções além do VSCode:

* CodeSandBox
* StackBlitz
* replit

### Componentes

Devemos priorizar no início a construção de componentes React.

Uma inferace de usuário React é uma composição de componentes.

A ideia é cada componente ter uma responsabilidade única (S do Solid).

Professor Júlio faz uma observação que a componentização por meio de classes no React ficou depreciada, é considerado código legado. A estratégia que superou essa abordagem é através de funções.

Podemos misturar Javascript puro com JSX.

A convenção para componentes JSX é declarar os nomes com as iniciais em Maiúsculo.

Componentes podem receber dados do "mundo externo". Parâmetro da função é um objeto conhecido como `Props`.

#### Listas

Necessário ter o atributo key em listas.

**Jamais invente de gerar um valor de ID/Key programaticamente.**

#### Eventos

Nomes dos eventos são camelCase, começam com minúsculas.

- onClick -> tem uma função handleClick()

Professor comenta sobre o bubbling (evento sobe na árvore DOM até a raiz e depois ele desce). Também falou de como parar a propagação do evento com `stopPropagation`. Nesse caso, estamos falando de HTML e não de React. O exercício que ilustra é o [demo_react_componentebasico](./exercicios/demo_react_componentebasico).

## Atividades práticas

No diretório [exercicios](./exercicios/) encontram-se exercícios práticos desenvolvidos durante a aula.