FROM node:alpine

# fbaena@: React scrips has some issues with live reloading
# check out [this](https://github.com/facebook/create-react-app/issues/8688)
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY ./ ./

CMD ["npm", "start"]