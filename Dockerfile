# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
# RUN npm run build

# production stage
FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
EXPOSE 80/tcp

COPY ./resources/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]