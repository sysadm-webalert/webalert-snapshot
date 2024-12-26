FROM ghcr.io/puppeteer/puppeteer:23.11.1

WORKDIR /app

COPY --chown=pptruser:pptruser package*.json ./
COPY --chown=pptruser:pptruser snapshot-server.mjs ./

RUN chmod 644 /app/package*.json /app/package-lock.json

USER pptruser

RUN npm install --omit=dev --ignore-scripts

USER root

RUN chmod 444 /app/package*.json /app/package-lock.json

USER pptruser

EXPOSE 3000

CMD ["node", "snapshot-server.mjs"]
