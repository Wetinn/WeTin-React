# Usar a imagem oficial do Nginx como base
FROM nginx:latest

# Copiar o arquivo de configuração do Nginx para o contêiner
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos do build do React para o diretório padrão do Nginx
COPY ./build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80
