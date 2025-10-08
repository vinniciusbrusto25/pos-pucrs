# Bancos de dados nosql

Disciplina ministrada pelos professores Eduardo Henrique Pereira de Arruda e Vinicius Kroth.

## Conteúdo

A primeira coisa interessante que notei, foi uma fala do professor Eduardo Arruda, onde ele diz que a modelagem para estruturar um banco no MongoDB se dá por meio da análise de requisitos. Enquanto isso, no CassandraDB, a modelagem se dá pela forma como as consultas serão feitas.

Ou seja, aparenta existir diferenças entre propósitos de uso dos bancos MongoDB entre diferentes soluções. Nem todo banco NOSQL é igual.

Professor Eduardo salienta a necessidade de seguir sempre o mesmo fluxo para construção de um banco de dados

Começar pelo modelo conceitual para registrar qual a minha compreensão dos requisitos, do negócio.

Depois passamos para o modelo lógico, e por último para a implementação física.

## Modelo lógico relacional
Com base nesse esquema lógico relacional, podemos inferir o seguinte:

- Um cliente faz de 0 a N pedidos.
- Um pedido é feito exatamente por um cliente.

Sempre que tivemos cenários assim, onde um relacionamento é de 1 pra N, ou seja, um cliente pode ter vários pedidos e o contrário não é verdade, um pedido não pode ter N clientes, então considera-se CLIENTES como tabela “pai” e PEDIDOS como tabela “filha”.

## Normalização
A normalização de dados consiste em eliminar redundâncias. Eliminar dados repetidos.

## Teorema CAP
O teorema CAP diz respeito a três princípios básicos que os SGBDs deveriam seguir, no entanto, é impossível conseguir os 3 ao mesmo tempo. Se atender dois princípios, um ficará de fora.

- Consistência -> Se fiz um UPDATE no campo CLI_STATUS de ‘A’ para ‘I’, então o dado atualizado deve estar em todos os “nós” do SGBD. Se um dos nós exibir `A`, então falhou a consistência.
- Availability (disponibilidade) -> Devo sempre disponibilizar o dado, apesar de um nó cair, é melhor entregar a informação desatualizada do que nada (ou gerar erro). No exemplo do item acima, o status vai voltar ‘A’ ao invés de ‘I’. Mas é isso que esse princípio diz. É pra voltar algo, não pode dar erro.
- Particionamento -> Permitir distribuir em vários nós os dados (confirmar melhor se é isso).

## Tipos de Transações
Temos basicamente dois principais tipos de transações:

- ACID
- BASE

### ACID
ACID representa a maioria dos SGBDs:

- A-Atomicidade -> Ou tudo é comitado ou nada. Uma transação com várias operações (UPDATEs, DELETEs) depois de comitada deve ser persistida como um todo no banco.
- C-Consistência -> A transação não deve comprometer a integridade estrutural do banco de dados;
- I-Isolamento -> Transações não podem “enxergar” outras transações. Não podem impactar em outras transações;
- D-Durabilidade -> Se uma transação for concluída (comitada) e logo depois cair a energia, os dados não devem ser corrompidos. A transação que foi efetivada deve ser respeitada a forma como os dados ficaram.

### BASE 
Basically consistency. Consistência básica.

- BA-Basicamente disponível -> Não impõe consistência imediata. O foco é entregar o dado **SEMPRE**.
- S-Soft State -> Por não impor consistência imediata, o estado do dado pode mudar ao longo do tempo;
- E-Eventualmente consistente -> Explicado pelo primeiro item. Não significa que nunca conseguirá ser consistente (refletir exatamente a realidade imediata), mas algumas leituras que forem feitas podem estar “desatualizadas”.

## Organização dos Dados em Bancos NOSQL
Os dados em bancos não relacionais são organizados da seguinte forma:

- **Databases** -> Armazenam registros de dados como documentos (BSON) reunidos em collections.
- **Collections** -> Armazenam os documentos, sendo análogas às tabelas em SGBDs relacionais.

## Atividades práticas

No diretório [exercicios](./exercicios/) encontram-se os comandos praticados em aula para os diferentes bancos nosql disponibilizados pelo professor Vinicius.

## Conclusão

Atualmente trabalho com bancos MongoDB e Redis. Já tenho familiaridade com o uso desses tipos de bancos no dia a dia, e mesmo assim pude aprender algumas coisas novas nesta disciplina.