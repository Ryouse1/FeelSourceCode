# 軽量な nginx イメージを使用
FROM nginx:alpine

# HTML ファイルを nginx の公開ディレクトリにコピー
COPY index.html /usr/share/nginx/html/index.html

# 80番ポートを開放
EXPOSE 80

# nginx をフォアグラウンドで起動
CMD ["nginx", "-g", "daemon off;"]
