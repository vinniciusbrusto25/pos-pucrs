# Conteúdo visto em aula

- Segurança de Software
- Aulas com Moisés Brandalise e Avelino Zorzo.

## Algoritmos de Criptografia
  - Aqui vimos alguns conceitos básicos por trás dos 3 tipos principais de algoritmos de criptografia: AES (simétrica), RSA (assimétrica) e SHA (hash).
- Planejamento de construção de uma solução de segurança
  - Na etapa de planejamento, precisamos Identificar ativos: bases de dados, servidores de aplicação, análise de riscos, vulnerabilidades, probabilidade, impacto, requisitos de segurança, políticas de segurança, testes de segurança.

## Exemplo de mapeamento:
Aqui o professor traz um exemplo de cenário.  

A ameaça é: comprometimento credencial do usuario.

Nesse caso, o ativo é: tabela de usuários.
	
	
## Segurança no desenvolvimento de software
Nesse tópico, o professor passou uma visão geral de alguns métodos e ferramentas de segurança utilizados:
    
- Análise de código estático e dinâmica
  - estratégias para identificar vulnerabilidades
    - SAST
      - Build
      - Sonarqube (esse nós usamos no trabalho)
    - DAST
      - testes
- Testes de invasão e avaliação de vulnerabilidades
  - Gerenciametno de configuração segura
    - Ansible (sobe EC2 na amazon de forma parametrizada)
	  - Configuração e implantação (Sobe uma instância na amazon com postgre etc)
	  - Teste de segurança automatizado
	  - Gerenciamento de vulnerabilidades
	  - Monitoramento de segurança
	  - Autorização e autenticação
	  - Auditoria e conformidade
  - Autenticação e autorização seguras
    - Protocolos (OAuth, OpenID Connect e JWT)
	- SSO (single Sign-on): usuários fazem login apenas uma vez; Active directory
	- Multi-factor (Authenticator)
	API Manager (Token JWT)
  - Criptografia e gerenciamento de chaves
    - HashiCorp Vault
    - AWS (KMS)
	- Azure Key Vault
	- Google Cloud Key Management Service (KMS)
  - Monitoramento e detecção de incidentes
    - Exemplos de softwares: IBM Qradar e Splunk 
    - Planejamento: o que precisa ser monitorado?
	- coleta de dados: enviar dados para o SIEM (software de gestão e monitoramento)
	- Correlação: Identificar possíveis ameaças. Alguém acessou tal documento, não devia, então deve-se emitir um alerta.
	- Notificação
	- Investigar e responder

## Problemas comuns de segurança indicados pela OWASP
O professor Moisés comenta sobre a "Open web Application Security Project" que é um projeto/fundação que lista e organiza incidentes relacionados a segurança de software.

Na aula, ele traz um overview dos top 10 incidentes de segurança, bem como algumas soluções possíveis.
- Quebra de controle de acesso
  - autenticação forte (evitar força bruta)
  - servidor de identidades
  - acessando api sem controles de acesso para post, put e delete
- Falhas criptográficas
  - problemas possíveis
    - falha criptográfica pode permitir que um invasor decifre uma informação que deveria estar protegida.
    - Acontece quando um sistema implementa criptografia de forma inadequada.
    - força bruta
    - interceptação
  - soluções possíveis
    - usar bilbiotecas criptográficas confiáveis
    - usar criptografia forte para armazenar senhas e chaves de autenticação.
- Injeção
  - problemas possíveis
    - atacante insere código malicioso em um sistema
    - invasor usa comandos SQL maliciosos num banco de dados
  - soluções possíveis
    - Utilizar mecanismos de preparação de consulta para evitar concatenação de strings
    - sanitizar entradas de usuários para evitar de execução de comandos não autorizados (_no javascript isso é muito comum, a pessoa mal intencionada pode injetar um script na URL, e, se o método que recepciona esses parâmetros estiver mal programado, lendo tudo e executando, pode ser que execute algo malicioso_)
  - design inseguro
    - configuração de segurança incorreta
    - componnetes vulneraveis e desatualizados
    - falhas na identificação e autenticação
    - falhas na integridade de software e dados
    - falha no registro e monitoramento de segurança
    - falsificação de solicitação do lado do servidor (ssrf)
	  
## Autenticação e Autorização
Aqui os professores comentam da importância de utilização de políticas de autenticação e autorização.

Dentre os assuntos comentados, destacam-se:
- proteção contra roubo de identidade
  - impedir modificações indevidas
  - definir o que os usuários acessam
  - Autenticação
    - validação da identidade
    - senha
    - smart card
    - biometria
    - quanto mais fatores de autenticação, maior é a garantia que aquela pessoa é quem ela está dizendo ser
    - armazenamento seguro
    - sessões de login
    - uso de https
- métodos de autenticação
  - validação de identidade
    - o que podemos saber?
      - senhas
      - perguntas secretas
    - o que podemos possuir?
      - cartões inteligentes
      - tokens
    - quem podemos ser?
      - voz
      - assinatura
      - reconhecimento facial
  - mfa adaptativo
    - são cenários mais complexos
    - ex.: autenticação em plataforma financeira
      - senha
      - localização
      - transações atípicas
  - passwordless
    - sem necessidade de senha
    - quanto menos passar responsabilidade para o usuário melhor
    - sem depender que ele lembre dos dados que configurou
    - biometria - sugestão: não criar dentro de casa porque é muito complexo, ou seja, se possível use soluções prontas de mercado. Compre serviços para isso.
    - biometria facial
- como implementar autenticação e autorização
  - sistema de gerenciamento de usuários
    - LDAP - exemplos mais comuns:
      - Active Directory (AD do windows); OpenLDAP (opção de software livre).
  - controle de acessos
    - função / role
    - regra / rule 
	
## Contexto atual e segurança
Neste tópico, o professor traz um panorama do contexto atual de segurança de software e traz um exemplo prático de uso citando o Whatsapp.

Comenta que criptografia, na prática, diz respeito a comunicação entre remetente e receptor, onde há uma transformação nas mensagens entre estes participantes de modo a "cifrar" essa comunicação.

Um exemplo contemporâneo do uso de criptografia é o whatsapp.

## Metas da Segurança
O professor Moisés traz alguns princípios, ou metas de segurança.

- Privacidade: não podemos vazar dados confidenciais;
- Autenticação: não pode se passar por outro indivíduo;
- Integridade: sem alteração;
- Não-repúdio: não ser capaz de negar.

## Tipos de criptografia
- Criptografia assimétrica:
  - chaves diferentes, uma pública e uma secreta.
  - aritmética modular
- Criptografia simétrica:
  - matemática simples
  - Algoritmo AES
  - Paradoxo do aniversário
    - Qual a chance de duas ou mais pessoas, em um mesmo grupo, fazerem aniversário na mesma data? Os resultados podem ser surpreendentes e contra intuitivos.
  - Pega-se um conjunto de bits, em geral, 128, pega esse bloco, embaralha, e gera um bloquinho. 
    - Então, se eu tiver um texto de 1gb, o algoritmo vai quebrar esse 1gb de texto em blocos de 128 bits.
      - Se eu tiver uma imagem no whats, mandando para outro contato, então o algoritmo vai quebrar a imagem em blocos de 128 bits. Cada bloco passa por diversas rodadas de "embaralhamento". Com base na chave, transformo em chaves diferentes para cada uma das rodadas.
- Modo de operação
  - Modo ECB -> permite vazamento de dados
  - Modo CBC -> vetor de inicialização, não pode ser paralelizado
  - Modo CFB -> cifrar e decifrar são as mesmas
  - Modo CBC -> Tem contador inicial, é um número de 128. Cifro o contador, e depois utilizo ele par fazer um xor
- Padding
  - serve pra preencher, a mensagem não é múltipla d 128, faltam bits pra chegar em 129. Tem que fazer um preenchimento.
  - Tem padrões d epreenchimento.
    - PKCS7. se o ultimo bloco for > 0, faz o byte pad n n n n.
	
## Exemplo Prático (Whatsapp)
O whatsapp criptografa todas as mensagens que são enviadas entre os contatos. Cada nova mensagem usa uma chave diferente. O whats tenta usar o conceito One Time Pre Key.

Whats usa curvas elípticas ao invés de RSA. A quantidade de bits necessários para um algoritmo de curva elíptica é menor do que no RSA.

Algoritmo do whats compõe basicamente:
- ECDH (Elliptic Curve Diffie Helman)
- HKDF (HMAC based Extract-and-Expand Key Derivation Function).
  - Função para derivar Root key e chain key a partir de uma master_secret.
- Curve25519
  - Curva elíptica
  - Uma das mais rápidas e menos suscetível a geradores de números aleatórios fracos.

O professor comenta que quando instalamos o whats, é gerado um par de chaves, pública e privada. Depois de instalado, essas chaves são usadas para gerar o _master_secret_.

Usuários usam chaves assimétricas, parte pública, parte privada com curvas elípticas.

Sessões/mensagens usam chaves simétricas (AES).

### Instalação
Como vimos, quando o whatsapp é instalado, ele cria as chaves públicas identity key, signed pre key e one-time pre keys (lote) e as envia para o servidor do Whatsapp na nuvem.

Também são criadas as chaves privadas do usuário, as quais o whatsapp não tem acesso.

### Sessão
O iniciador precisa estabelecer uma sessão cifrada com o outro contato ao qual ele quer enviar uma mensagem.

Para estabelecer a sessão segura com o destinatário da conversa, não é necessário que ele esteja ativo porque quando ele instalou o aplicativo, ele já mandou as suas chaves públicas para o servidor do Whatsapp.

Como é estabelecido a sessão secreta entre o requisitante João com destinatário Pedro?
João solicita as chaves públicas do Pedro (identity key, signed pre key e one-time pre key).

O servidor do whatsapp valida a identidade do Pedro. Tem que checar se ele existe.
Servidor retorna as chaves requisitadas. A one-time pre key é usada somente uma vez, então é removida do servidor depois de requisitada.

Se a Aline requisita uma sessão com o Pedro, outra one-time pre key do Pedro será disponibilizada e removida do servidor.

O iniciador João gera um par de chaves efêmeras com Curve25519 (2 elevado a 255 -19)

O iniciador João carrega sua Identity Key (chave privada) como Initiator.

O iniciador calcula um master_secret. Aqui coisas como ECDH estão envolvidas.
Protocolo de troca de chaves diff helman.

Tenho a minha chave privada (João) e a chave pública do Pedro.

É partir da chave privada do João e a chave pública do Pedro que consigo gerar a master_secret.

O Pedro, na outra ponta, vai ter a chave privada dele e a chave pública do João.

O iniciador usa HKDF para criar uma root key e chain keys a partir do master_secret.
Chaves simétricas

Estes 7 pontos principais são suficientes para se estabelecer uma sessão cifrada entre as duas pontas.

Cada mensagem, envia nos seus cabeçalhos essas informações das chaves públicas, chave efêmera, além da própria mensagem.

O próximo passo é a troca de mensagens que vai ocorrer também mediante algoritmo de cifragem, utilizando criptografia simétrica AES.

### Comunicação
Cada mensagem enviada uma message key com criptografia AES 256 (simétrica) no modo CBC.

Messages keys são únicas, não são reutilizadas.

Whatsapp tenta simular one-time pre key.

Usa o mecanismo de racheting. 

Quando o usuário envia uma mensagem, é calculado o hash da chain key.
Usa a função resumo criptográfico.
Quando o outro usuário recebedor da mensagem recebe-a, então é gerado uma nova chain key e root key.

### Transmissão de Mídias e Anexos
Os seguintes passos são feitos para o envio de mídias (áudio, imagens, etc.), que são tratadas como BLOB (binary large object):

O remetente gera uma chave AES efêmera de 32 bytes, e uma chave HMAC-SHA256 efêmera de 32 bytes.

O remetente cifra o BLOB com a chave AES gerada no passo anterior com CBC e IV aleatório.

O remetente envia o anexo cifrado com essa chave K1 para o servidor.

O remetente transmite a mensagem toda cifrada ao destinatário. 

A mensagem que vai cifrada, mesmo que seja interceptada não tem como saber o que é.
Vai um ponteiro para apontar onde tá o objeto BLOB

Destinatário decifra a mensagem, descobre que tem um Blob na store da whatsapp. Verificar o hash, verificar o mac.