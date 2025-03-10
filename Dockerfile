# ========
# Build
# ========

FROM --platform=linux/amd64 node:21.7.3-alpine AS builder

RUN apk add --no-cache \
  npm \
  git \
  python3 \
  make \
  g++

RUN node -v
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# ========
# Production
# ========

FROM --platform=linux/amd64 node:21.7.3-alpine AS runner

RUN apk add --no-cache nodejs npm jq curl

RUN npm install -g pnpm@10.2.1

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/.next ./.next

COPY --from=builder /app/next.config.mjs ./

COPY ./scripts ./scripts

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3001

CMD ["pnpm", "start"]