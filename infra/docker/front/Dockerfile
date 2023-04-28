FROM node:18-alpine3.17

WORKDIR /frontend

# コマンド実行
# linux 最新化、gitインストール、npm最新化、vue-cliインストール
RUN apk update && \
 apk add git

# COPY /frontend/package*.json ./
# RUN npm install

EXPOSE 3000
# CMD ["npm", "run", "dev"]