# 1. ビルドステージ
FROM oven/bun:1.3 AS builder
WORKDIR /app
COPY package.json ./
COPY bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# 2. 配信ステージ
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]