# Boa pratica setar a versao senao pode quebrar alguma coisa pegando da latest
FROM node:16.14.0

# Diretorio em que vai ser construido o app
WORKDIR /app

# Preciso do package.json para a instalação das dependencias
COPY package*.json ./

RUN npm install

# Depois de instalar copiar todo o conteudo para /app
COPY . .

# Executar a aplicacao
CMD ["node", "server.js"]