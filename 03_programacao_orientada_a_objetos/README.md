# Programação orientada a objetos

Disciplina ministrada pelos professores Alessandro Valério e Edson Moreno.

Seguem anotações referentes ao conteúdo visto em aula, bem como o fechamento da disciplina.

Vimos sobre:
- Classes 
- Herança
- Polimorfismo
- Interfaces
- Genéricos 
- Arrow functions. ​

Além disso, exploramos `filter`, `map` e `reduce`, além de construtores de tipos. ​

## POO
A POO é um paradigma que foca em objetos ao invés de funções. ​

Linguagens como Java, C++, Python e JavaScript implementam a POO, mas nenhuma é puramente orientada a objetos. ​
A POO permite a agregação de dados e funcionalidades em objetos, facilitando a manutenção e a reutilização de código. ​

Os objetos são estruturas que contêm dados e funcionalidades relacionadas. ​

Atributos representam o estado do objeto, enquanto métodos definem suas ações. ​
O acesso a atributos e métodos é feito através da notação de ponto ou colchetes. ​

Encapsulamento e herança são conceitos centrais da POO.

Vimos que o encapsulamento protege dados e métodos, expondo apenas o necessário. ​
A herança (através do prototype no javascript) permite o compartilhamento de atributos e métodos entre objetos, possibilitando a reutilização de código. ​

Polimorfismo e abstração são fundamentais para a flexibilidade do código. ​

O polimorfismo permite que métodos de diferentes objetos tenham o mesmo nome, mas comportamentos distintos. ​
A abstração envolve a simplificação de problemas complexos, focando no que é essencial. ​

O professor Alessandro falou sobre a criação de Objetos em JavaScript
JavaScript oferece várias formas de criar objetos.

Objetos podem ser criados de forma literal, usando funções construtoras ou classes.
A palavra-chave "new" é utilizada para instanciar objetos a partir de construtores.

Também foi tratado aspectos relacionados a visibilidade dos dados como sendo algo crucial na POO. ​

JavaScript utiliza identificadores para definir a privacidade de variáveis e métodos. ​
É importante proteger objetos para evitar alterações indesejadas em seus atributos. ​

## Funções e arrays
Funções e arrays são componentes essenciais em JavaScript. ​

Funções podem ser anônimas e manipuladas como valores. ​
Arrays permitem o armazenamento de coleções de itens e possuem métodos específicos para manipulação. ​

Foi falado sobre as funções de alta ordem que permitem manipular arrays de forma eficiente utilizando funções de transformação. ​

Métodos como ``Array.some()``, ``Array.every()``, ``Array.filter()``, ``Array.forEach()``, ``Array.reduce()`` e ``Array.map()`` são utilizados para diferentes operações em arrays. ​

Closure é uma função que "lembra" do ambiente em que foi criada, associando dados a uma função. ​
Arrow functions oferecem uma sintaxe mais curta, mas não podem ser usadas como construtoras de objetos. ​

## Modularização
A modularização organiza o código em blocos reutilizáveis, facilitando o desenvolvimento em grupo.

O ECMAScript 6 Module permite a importação dinâmica de recursos e é suportado pelo Node.js. ​
Módulos definem interfaces com a palavra-chave export e importam dependências com a palavra-chave import. ​
CommonJS é um padrão utilizado por pacotes NPM, usando exports e module.exports para definir interfaces. ​

## Propriedades/atributos
Propriedades e atributos são características que podem ser associadas a objetos em JavaScript.

Atributos privados em classes podem ser manipulados através de regras de comportamento.
A desestruturação permite "desempacotar" arrays e objetos em partes menores. ​

## JSON
JSON é um formato leve para troca de dados entre sistemas, suportando tipos primitivos e estruturados. ​

O método JSON.stringify converte objetos em strings JSON, enquanto JSON.parse converte strings JSON em objetos. ​
É importante evitar referências circulares ao usar JSON.

## Exceções
Exceções são usadas para lidar com situações anormais em funções, evitando a interrupção do programa. ​

O tratamento de exceções é feito com try, catch e finally, permitindo capturar e tratar erros. ​
As exceções ajudam a suavizar problemas que poderiam causar falhas abruptas no código. ​

## Async/await e promises
Funções assíncronas permitem a execução de operações sem bloquear o fluxo do programa. ​

Callbacks e promises são usados para gerenciar a execução assíncrona, com promises oferecendo um controle mais limpo. ​
Async/await facilita o uso de promises, permitindo que o código aguarde a resolução de operações assíncronas. ​

## Conclusão (minha opinião pessoal)

Comecei a programar em Delphi em 2017, e naquela época não tinha ainda muita noção das vantagens da POO pois apesar do Delphi prover orientação a objetos, o estilo de programação onde eu trabalhei (e meu conhecimento também) era muito procedural.

Em 2021 comecei a trabalhar com Java e aos poucos a OO foi fazendo mais sentido pra mim a medida em que eu me aprofundava mais em Clean Architecture. O uso de contratos, isolamento das camadas de negócio com as tecnologias, injeção de dependências me fez abrir os horizontes para a OO de modo que hoje isso faz parte do meu cotidiano.

De 2024 para cá, venho estudando um pouco mais de WEB (javascript, react, next, etc.) e foi bacana essa aula para ver como podemos "simular" a OO em Javascript, já que para a linguagem isso não é nativo do mesmo modo como em Java. Aqui parece utilizar um conceito muito mais de herança (com o arquétipo prototype) e não há nenhum problema nisso. A aula do professor Alessandro foi bem descontraída e proveitosa. O professor Edson trouxe a parte acadêmica também de forma eficiente. De modo geral, foi muito bom relembrar todos esses conceitos de OO que para mim estão bem consolidados, acrescentando coisas específicas do mundo Node como promises.