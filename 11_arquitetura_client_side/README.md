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

#### Hooks

Hooks são funções que tem um comportamento especial no ciclo de vida dos componentes gerenciados pelo React. Estes hooks estão intimamente relacionados ao ciclo de vida de renderização dos componentes.

Um dos mais famosos é o `useState`.

##### `useState`

`useState` -> Função que entra um estado e devolve um novo valor de um outro estado. Nunca altera o estado.

No exemplo construído em [demo_react_usestate](./exercicios/demo_react_usestate), o react não renderiza tudo de novo, apenas altera o estado do componente que configuramos.

Outro hook mencionado pelo professor é o `useReducer`.

##### useReducer

O `useReducer` depende de uma função responsável por toda a manutenção do estado do componente. A função de redução tem 2 argumentos: primeiro é o estado atual do sistema, segundo a função a ser efetuada.

Exercício disponível em [demo_react_usereducer](./exercicios/demo_react_usereducer).

##### useEffect

Usar com cuidado devido possibilidade de causar efeitos colaterais na aplicação.

Normalmente usado quando precisamos invocar algo externo ao nosso componente.

Professor Julio dá uma explicação bem detalhada do exemplo do hook `useEffect`, passo por passo da construção do código e do efeito que isso causa na renderização.

Ressalta-se que é algo externo. Não é o própio componente que está mudando algo.

Fizemos um exemplo bem simples em [demo_react_useeffect](./exercicios/demo_react_useeffect), mas que já ajuda a ter uma compreensão bem interessante sobre como o `useEffect` funciona.

##### Hooks customizados

Podemos criar nossos próprios hooks. Na aula, o professor dá o exemplo do "online" e "offline" do browser.

##### Gerenciamento de Estado

Se o gerenciamento de estado aumentar no quesito complexidade, pode ser que o React não nos atenda. Então duas APIs são comumente usadas para isso:

- Redux
- Recoil

### Formularios

Vimos dois tipos de formulários no React:

- Sem controle dos componentes;
- Com controle dos componentes.

No form sem controle dos componentes, o React não está gerenciando o estado. No exemplo, estamos pegando os valores diretamente da DOM, do html.

Já no form com controle, é o react que gerencia o estado dos dois inputs.

![Inputs](img/controlled-form-input.png)






## Atividades práticas

No diretório [exercicios](./exercicios/) encontram-se exercícios práticos desenvolvidos durante a aula.