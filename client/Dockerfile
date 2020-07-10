FROM node:alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install --production=true

COPY . /usr/src/app
RUN npm run build

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
RUN chown nginx.nginx /usr/share/nginx/html -R

EXPOSE 80