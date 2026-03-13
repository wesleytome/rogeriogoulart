FROM node:20-alpine

LABEL org.opencontainers.image.title="rogeriogoulart"

WORKDIR /app

RUN apk add --no-cache bash \
  && corepack enable \
  && corepack prepare pnpm@10.32.1 --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 5174

CMD ["pnpm", "run", "dev", "--host", "--port", "5174"]
