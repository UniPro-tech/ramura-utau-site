FROM node:24-slim

RUN apt-get update && apt-get install -y \
  zip \
  unzip \
  curl

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

RUN npm run build

EXPOSE 3000

CMD ["bun", "start"]