# syntax=docker/dockerfile:1.7

# ─── Stage 1: Build ──────────────────────────────────────────────
FROM node:22-alpine AS build

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --no-audit --no-fund

COPY . .

RUN npm run build

# ─── Stage 2: Production ─────────────────────────────────────────
FROM node:22-alpine AS production

RUN apk update && apk upgrade --no-cache && \
    apk del --no-cache npm 2>/dev/null || true

RUN addgroup -g 1994 appgroup && \
    adduser -D -u 1994 -G appgroup appuser

WORKDIR /app

COPY --from=build --chown=1994:1994 /app/.output ./output

ENV HOME=/tmp \
    NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

EXPOSE 3000

USER 1994:1994

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["node", "./output/server/index.mjs"]