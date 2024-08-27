FROM oven/bun:slim AS base

WORKDIR /usr/src/app

# For Caching
FROM base AS install

COPY package.json bun.lockb nx.json project.json ./

RUN bun install --frozen-lockfile

FROM base AS builder

COPY --from=install /usr/src/app/node_modules ./node_modules
COPY . .

RUN bun run build:landing

# Production image, copy all the files and run nest
FROM base AS runner

ARG PORT=4321
ARG APP_DOMAIN=${project.APP_DOMAIN | 'https://your-domain.com'}
ARG APP_TITLE=${project.APP_TITLE | 'Monthly Party'}

RUN echo "Using ARGs: APP_DOMAIN=$APP_DOMAIN ; APP_TITLE=$APP_TITLE"

ENV PORT=$PORT
ENV APP_DOMAIN=$APP_DOMAIN
ENV APP_TITLE=$APP_TITLE

WORKDIR /usr/src/app
COPY --from=install /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist/apps/landing ./dist/apps/landing
COPY --from=builder /usr/src/app/package.json ./

EXPOSE $PORT

CMD ["bun", "run", "./dist/apps/landing/dist/server/entry.mjs"]
