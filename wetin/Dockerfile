FROM node:20 AS builder

# Definindo diretório de trabalho
WORKDIR /app

# Clonando o repositório do GitHub
RUN git clone https://github.com/Wetinn/WeTin-React.git

# Mudando para o diretório do repositório clonado (ajuste conforme necessário)
WORKDIR /app/WeTin-React/wetin

# Instalando as dependências e exibindo mensagens de conclusão
RUN npm install

# Fazendo o build do projeto
RUN npm run build

# Fase de produção (NGINX)
FROM nginx:alpine

# Copiando arquivos do build gerado para o NGINX
COPY --from=builder /app/WeTin-React/wetin/build /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80
