FROM node:20 AS builder
WORKDIR /app
COPY . .
WORKDIR /app/wetin
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/wetin/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
