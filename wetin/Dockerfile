# Dockerfile para o build do front-end

# Etapa 1: Usar a imagem Node.js para fazer o build do projeto
FROM node:20 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e instalar dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante dos arquivos para o diretório de trabalho
COPY . .

# Rodar o comando de build
RUN npm run build

# Etapa 2: Criar a imagem final, sem Node.js, apenas com os arquivos estáticos
FROM nginx:latest

# Copiar os arquivos de build do front-end para o Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copiar a configuração customizada do Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
