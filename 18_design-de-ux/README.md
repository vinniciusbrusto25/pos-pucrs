# Design de UX

Disciplina ministrada pelos professores Rubem Pechansky e Milene Selbach Silveira.

## Princípios de usabilidade
Durante a disciplina estudamos os princípios da usabilidade, que estão ordenados abaixo:

- Autonomia
  - Autonomia de o usuário fazer o que ele tem que fazer de forma relativamente livre, exemplo, salvar. Ação de salvar.
    - Um formulário com 10 campos, pode ser necessário obrigar o usuário a informar algumas informações antes de outras.
    - Preenchimento numa ordem pré-determinada, isso tira a autonomia do usuário.
- Consistência
  - Fazer as mesmas coisas de maneiras semelhantes
    - Uma tela que exibe uma lista de fornecedores, outra tela que exibe uma lista de usuários, mas de formas diferentes, com padrões diferentes. Neste caso estou quebrando a consistência.
- Eficiência
  - Fazer bem e fazer rápido. Não demorar mais do que eu preciso fazer.
    - Sistemas tem problemas de atraso, queries grandes, latências grandes entre outras aplicações.
    - Time de UI deve conversar com time de backend para reduzir estes problemas/gargalos.
    - Geralmente os gargalos estão no backend.
    - Nesse ponto, lembro de um caso típico de ineficiência que experimentei no trabalho, o usuário começava a preencher informações em alguns campos, não tinha como salvar o progresso, lá pelas tantas, precisavam trocar de tela ou fazer outra coisa, aí perdiam tudo. Pura ineficiência.
- Familiaridade
  - Algo que está numa tela, deve ser reconhecida imediatamente.
    - Por vezes confundida com consistência.
    - Exemplo, o botão de salvar imprime. Não é familiar a ação dele.
    - Designer é um aplicador de padrões, e não um criador de coisas novas.
    - Menu principal na lateral esquerda é o mais comum.
- Simplicidade
  - Sistemas tem que ser o mais simples possíveis.
    - Menos é mais.
    - Dificil é produzir algo simples. Whatsapp é extremamente simples de usar.
- Tolerância
  - Tolerância a falhas/erros
    - Usuário tem que ser capaz de fazer o que ele quer e o sistema não pode dar erro.
    - Usuário preencheu um campo de forma incorreta. Aplicação devolveu erro. Deveria devolver mensagem tratada.
    - Exceções não tratadas. Importantíssimo.
- Visibilidade
  - Indicador de processamento em andamento em background.
    - Pode ser que travou e o usuário não sabe.
    - Mostrar o estado do sistema
    - Mostrar o que fazem certos ícones.
    - Tooltips (dicas, legendas, hints, etc.)

## UX x UI
Pode soar muito parecido o que ambas as áreas representam no mundo do desenvolvimetno de software, no entanto, existem algumas diferenças fundamentais entre Design de Experiência do Usuário e Design de Interfaces de Usuário:

  - UX é mais abrangente que a UI.
  - UX não é só sobre a pessoa que faz telas, mas também um aspecto das questões visuais
  
## Usuários intermediários
No decorrer da disciplina, o professor mostrou uma "curva de Gauss" com 3 tipos de usuários de sistemas: principiante, intermediario e expert.

Diante disso, o foco deve estar sempre no usuário intermediário, que representa a maioria.
  
## Caminho feliz
O professor Rubem compartilhou a importância de se mapear o fluxo ideal, ou "caminho feliz" de telas e rotinas de sistemas.
  
## Revelação progressiva e frequência de uso

Um aspecto importante que o professor Rubem traz, é a revelação progressiva, que consiste em ir revelando aos poucos o conteúdo. 

Por exemplo, uma manchete de um jornal (só um título abstrato), depois um parágrafo de duas ou três linhas (adentrando no contexto) e por fim a matéria completa.

Outro exemplo interessante é a tela de impressão de páginas aberta no chrome quando damos um CTRL + P. A primeira ação é o botão/ícone do imprimir. Depois algums opções (as principais) são exibidas, como número de cópias e qual a impressora. No botão "Mais definições", temos a possibilidade de informar se o layout é "Retrato" ou "Paisagem". É uma revelação progressiva

## Textos e mensagens
Aspectos importantes relacionados a forma como escrevemos textos e mensagens:

- Títulos, labels/captions, mensagens, etc
- Uso de "eye tracking" que gera os mapas de calor de um determinado conteúdo. Onde o usuário olha mais.
- Textos curtos, quanto menos eu escrever, maiores são as chances de que TODO o conteúdo será lido.

## Design de UX

Nesse tópico, algumas sugestões são dadas sobre como escrever textos em nossos sistemas:

- Tom neutro, informativo, conciso, amigável.
- Linguagem fácil de entender.
- Nomenclatura simples e conhecida
  - Evitar siglas específicas do negócio.
- Padronizar palavras. Professor deu exemplo de que em um lugar do sistema temos "Criar endereço", e em outro lugar temos "Adicionar nota fiscal". Aí em outro local temos "Novo contato", etc. É criar ou adicionar? É novo ou adicionar? Todos estão corretos! No entanto, estamos "despadronizados" no sistema, o que contribui para quebrar um dos princípios de UX que é a consistência.

## Evitar

Outro ponto interessante que é posto, refere-se a cenários que devemos evitar:

- ESCREVER GRITANDO
- Usar exclamações!!!
- Misturar termos em inglês e português
- Usar termos técnicos que são familiares para nós, como:
  - Campo. Ah, preencha o campo "Usuário". Prefira, Informe o usuário.
    - Banco de dados
    - Consulta no banco de dados / query. Não usar termos que são conhecidos a nós desenvolvedores como "query". Consulta no banco.
    - Programa. Não usar o termo "programa", prefira "solução", "aplicação", "suíte".

Professor Rubem comentou sobre algumas diferenças importantes entre acessar e usar uma aplicação "mobile" e uma aplicação web/windows "normal". Como exemplo, o "hover" do mouse, botão direito, bolinha do scroll, enfim, inúmeras coisas que perdemos ao usar uma aplicação mobile. Em compensação temos outras possibilidades como "swipe" ou arrastar para os lados horizontal e vertical. Isso signifca que não será a mesma aplicação web e mobile, haverão diferenças no planejamento/desenvolvimento nos aspectos da experiência do usuário. Dá pra se dizer que serão dois projetos distintos, portanto.

Outro ponto interessante, ainda seguindo nessa linha, é que como não há teclado físico no mobile, temos que fazer o usuário digitar o menos possível. Ideal é que ele nem precisasse digitar nada. Nielsen menciona que é melhor o usuário escolher (selecionar) algo do que memorizar ações maiores.

## Affordance
- Qualidade de um determinado produto ou artefato de com base numa simples observação, poder definir o que é esse produto, ou para quê ele se destina.
- Professor Rubem deu exemplo de um expremedor de frutas com um design esquisito. Impossível dizer que é um expremedor de frutas.
  
## Constraints
- Constraint significa criar uma restrição na interface para impedir um provável erro do usuário.
- Restrição - analogia, preciso de uma chave para abrir uma porta.
- Exemplo bom: preciso preencher um campo de quantidade de itens que vou comprar. Precisa ter uma restrição, se tá em 0, não pode habilitar o menos pra diminuir pra -1.
  
## Exemplos práticos
- Professor Rubem mostrou alguns cases reais onde ele trabalhou, de cenários onde sua empresa/equipe remodelou sistemas para atender as melhores práticas de UX.
- Mostrou um exemplo real de "Design System" do MP-RS.
  
## Design System
- Design system se destina a todos que irão trabalhar no sistema, seja designers, seja desenvolvedores. Professor citou o Figma para design system.
- O design system que o professor mostrou lista todos os ícones usados na aplicação. Quem gerencia isso é o designer. Supondo que alguém peça um novo ícone, o designer então vai alterar o design system adicionando o novo ícone.
- Professor mostrou um pouco da operação do Figma do design system do mp-rs
- No design system, são colocados exemplos de cada componente do sistema: botões, janelas, telas, formulários, listagens, tooltips, balões, etc. Tudo que é visual, fica definido no design system. Isso me lembra aquele esquema de "identidade visual" que comentaram na ESM.
- No final das contas o design system é uma documentação dos componentes visuais utilizados no sistema.
- No design systema, defininmos todas as possibilidades, por exemplo, de exibição de um campo de texto num formulário. Como ele irá aparecer quando estiver desabilitado, com foco, obrigatório, etc. E são inúmeras variações.

## IHC
- Interação humano computador
  
## Interface
- É o que ele tá vendo, por onde ele tá interagindo.
- Dispositivos de entrada e saída.
- UX é uma boa experiência com a interface. A interface proporcione uma experiência satisfatória.
- Sentimentos, estado de espírito. São aspectos sociais no uso de sistemas.
- Acessibilidade envolvida...
  
## Princípios de Design
- Visibilidade
  - Tornar visível o que é possível fazer
- Feedback
  - Dar retorno para o usuário do que ele tá fazendo.
    - Clicou em negrito, selecionou Negrito, está aparecendo o ícone de forma diferente...
- Restrições
  - Desabilita o campo quando ele não pode fazer algo...
- Consistência
  - Tipo uma padronização de componentes.
    - Word, Excel e PowerPoint tem o mesmo "padrão".
- Affordance
  - Qualidade de o atributo "dar uma pista" do que ele faz ou é.

## Processos de design
- Planejar a intervenção para resolução do problema
  
##Pesquisa com usuários
  - Questões éticas
  - Deixar usuário ciente do propósito da coleta dos dados para fins da pesquisa

## Coleta de Dados
- Para entender quem é meu usuário, quais as características, do que ele precisa, identificar necessidades. Se ele já tem alguma ideia em mente, alguma sugestão de sistema.
- Posso usar diferentes fontes (logs de interações, etc).
- Que tecnologia vou usar, etc.
- Quais os objetivos do meu usuário.
- Técnica de coleta: entrevista.
  - Legal aqui é que se ele não entendeu a pergunta, é possível explicar "olho no olho".
- Questionários
  - Questões descritivas tem baixo índice de aceitação.
    - Mas online é possível obter mais informações.
- Grupos de foco
- Estudos de campo
- Brainstorming
- Classificação de cartões
  
## Organizar os dados coletados
- Depois de coletar os dados...
- Que dados são esses?
- Como faço para chegar ao que o usuário precisa?
- Quem é esse usuário?
- Podem ser classificados por idade
  - Por atitudes.
- Objetivo aqui é traçar o perfil do usuário, ou os perfis.
- Elaboração de Personas (características das personas)
- Quais são os objetivos desta persona?
  
## Cenários
- É uma história
- Trata-se de uma parte ou cenário específica de como uma persona faz determinada coisa.
- É uma narrativa, textual ou pictórica, de uma situação d euso da aplicação, envolvendo usuários, processos e dados reais ou potenciais.
- Trata-se de uma fase de entendendimento do que são as tarefas do usuário.
- Aqui não tem detalhes de interface!
- É análise do negócio, do problema do usuário.
- Precisamos saber o ambiente, atores, objetivos, planejamento, ações, eventos e avaliação.
- Casos de uso (diagramas)

## Avaliação
- Toda etapa de desenvolvimento necessita de uma avaliação.
- Estamos no caminho certo?
- Validar com usuário sempre que possível.
- Apropriação de tecnologia pelos usuários
- Ideias e alternativas de design
- Avaliação formativa (ao longo do processo) informal
- Avaliação somativa (realizada no final do processo como se fosse uma prova)
  
## Métodos de avaliação
- Investigação
  - entrevistas
    - questionarios
    - diarios
- Inspeção
  - AVALIAÇÃO heuristica
    - percurso cognitivo
    - inspeção semiotica
- Observação Direta
  - testes de usabilidade
    - avaliação em comunicabilidade
    - prototipagem em papel
- Observação Indireta
  - Logs

## Métodos de inspeção
- Verificação de diretrizes
  - Temos algumas diretrizes, uma lista, um checklist pra checar se tá de acordo.
    - Podem ser grandes listas a serem verificadas
    - 200 diretrizes... etc
    - Ah, o titulo tá centralizado...?
- avaliação heurística
  - o mais vendido entre os UXers
    - 10 mandamentos/heuristicas
    - quem avalia? 3 a 5 avaliadores
    - quando se avalia? ao longo do processo (formativa)
    - quanto tempo dura uma avaliação? uma a duas horas a sessão
- Etapa individual
  - Cada avaliador avalia em separado se está de acordo com as diretrizes
- Etapa conjunta
  - os avaliadores da etapa anterior se juntam e debatem o que encontraram.
    - É problema de usabilidade, um expõe e todos discutem, lógico o que encontrarem de pontos negativos.
    - Aplicam graus de severidade

## Severidade de um problema
- Graus de severidade de problemas nas interfaces
- frequência
- impacto (usuário consegue se recuperar)
- persistência (vai ficar atrapalhando o usuário)
- problema cosmético (fonte, básico)
- pequeno
- grande
- catastrófico

## Métodos de observação de uso
- Vamos observar o usuário usando o sistema
  
## Estudos em Laboratório (controlados)
- Estudo de campo
- Testes de usabilidade
- Avaliação de comunicabilidade
- prototipagem em papel
  
## Exemplo de tipo de teste: usabilidade
- Quero verificar se meu sistema está de acordo com critérios de usabilidade
- É facil de usar?
- É para medir o desemepneho do meu usuário ao logno do processo de design
- Testar o uso dos usuários principiantes
  - Em quanto tempo tá usando?
	
## As 10 heurísticas de Nielsen
- visibilidade do estado do sistema
- correspondencia entre o sistema e o mundo real
- controle e liberdade do usuario
- consistencia e padronização
- prevenção de erros
- reconhecimento em vez de memorização
- flexibilidade e eficiencia de uso
- projeto estetico e minimalista
- auxilia os usuários a reconhecerem, diagnosticarem e se recuperarem de erros
- ajuda e documentação

## Conclusão

O design de UX leva muito em conta aspectos humanos, para concepção de sistemas que possibilitem uma experiência mais agradável. Ao longo da disciplina, algumas coisas me chamaram muito atenção, como os exemplos que o professor Rubem trouxe, de telas totalmente poluídas, com muitos campos, edits, inputs, etc. Já presenciei cenários assim no meu dia a dia de trabalho e isso é péssimo até para se dar manutenção. Uma simples alteração de posição de um "edit" pode impactar vários outros, e gerar um efeito cascata.

Proporcionar uma experiência mais agradável, seguindo diretrizes, técnicas e método estudados nessa disciplina contribuem para desenvolvermos soluções que satisfaçam por completo as necessidades de nossos clientes.