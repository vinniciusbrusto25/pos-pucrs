# Qualidade e Teste de Software

Disciplina ministrada pelos professores Ricardo Beck e Daniel Callegari.

## KPIs (indicadores de qualidade)
Foi abordado o assunto dos indicadores de qualidade, que basicamente são os seguintes:

- satisfação cliente
- processo interno de qualidade
- satisfação funcionario
- indice de performance financeira
- throughput
- satisfação consumidor
- médio de tempo resposta inicial

O professor Ricardo comenta que quanto mais métricas, mais complicado é gerenciar tudo.

## Verificação e validação de software
No quesito verificação e validação de software, precisamos nos fazer algumas perguntas quanto a consistência, clareza e segurança:

- O produto foi construído corretamente?
- Apliquei as técnicas corretas?
	
## Validação
Num âmbito mais geral, precisamos refletir se:

- O produto correto foi construído?
- Era aquilo que o cliente me contratou pra desenvolver?
  
## Técnicas
O professor expõe duas abordagens de técnicas relacionadas a qualidade de software:
- Estáticas -> Antecede a fase do código;
- Dinâmicas -> Requer trabalhar um um executável do sistema, além de testes automatizados.
	
Terminologias
  Caso de teste é um subconjunto de entradas e saídas planejadas, para um ambiente controlado de execução.
  Roteiro de teste é o conjunto de casos de teste
	

Desafio:
  Definir um subconjunto mínimo de casos de teste com a maior probabilidade de apontar erros
  
Dimensões de teste
  O que testar
	regrassão
	usabilidae
	desempenho
	configuração
	segurança
	instalação
  Como testar
	caixa preta
	  casos de uso
	  Não estou interessado nem quero conhecer o código fonte. Quero os requisitos. É um teste funcional, o que o software faz e não como ele faz.
	  É alto nível, independe de linguagem.
	  Depende muito dos requisitos. Requisitos precisam estar claros e bem definidos.
	caixa branca
	  fluxos de controle
	  fluxo de dados
	  Caixa branca ou transparente porque eu vejo o código fonte, quero validar a estrutura do programa, por isso também é chamado de teste estrutural (sobre o código-fonte).
	  Valido o comportamento interno da unidade.
	  Uso mais comum: nível de unidade e integração.
	  
	  Complexidade Ciclomática
	    Quantos caminhos possíveis existem no meu software (isso me lembra as "branchs" ou "ramos" não cobertos exibidos no report do jacoco no Java quando alguma parte de uma condição não foi coberta com testes).
  Quando testar
    testes de unidade
	teste de integração
	teste de sistema
	teste de aceitação
	

Testes de integração
Top down
  começando pelos stubs substituindo aos poucos
  
  
Bottoms up
  Começando pelos componentes mais básicos
  

teste de aceitação
  se condiz com o que o usuário espera
  
Teste de regressão
  se uma alteração não quebrou nada do que já está implementado
  
Teste de sistema
  O sistema atende aos requisitos
  teste de caixa preta
  
FURPS
Funcionalidade, Usabilidade, Confiabilidade, Desempenho e Suportabilidade.
