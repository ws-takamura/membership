# LaravelとNextのDocker環境

## バージョン
1. php7.4
2. laravel6

## 環境構築の手順
1. リポジトリをクローンする
2. frontendディレクトリを作成する
3. 以下のコマンドでコンテナを作成する
```
make create-project
```
4. frontコンテナに入り、Nextjsをインストールする
```
make front
npx create-next-app ./ --typescript
npm install
```
※ 対話式で聞いてくるNextjsのオプションは適宜必要な項目を選択してください

5. docker-compose.ymlのfrontにあるコメントアウトを外す
docker-compose.yml
```
npm run dev
```

6. コンテナを再構築する
```
make up
```

7. localhostへアクセスして、起動していることを確認する
### フロントエンド
http://localhost:3000/

### バックエンド
http://localhost/

