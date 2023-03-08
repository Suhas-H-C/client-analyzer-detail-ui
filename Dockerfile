FROM node:latest AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest 
COPY --from=builder /app/dist/ang-dashboard/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","deamon off;"]