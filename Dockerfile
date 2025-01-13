# ========
# Build
# ========

FROM node:23-alpine3.20 AS builder

RUN apk add --no-cache \
    nodejs \
    npm \
    git \
    python3 \
    make \
    g++

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm
RUN pnpm ci

COPY . .

RUN pnpm build

# ========
# Production
# ========

FROM node:23-alpine3.20 AS runner

RUN apk add --no-cache nodejs npm

RUN npm install -g pnpm

WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.cjs ./

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "start"]