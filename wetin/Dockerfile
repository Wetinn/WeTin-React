FROM node:20 AS builder

WORKDIR /app

#RUN git clone https://github.com/Wetinn/WeTin-React.git

COPY . .

#WORKDIR /app/WeTin-React/wetin

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]