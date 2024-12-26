FROM ghcr.io/puppeteer/puppeteer:23.11.1

WORKDIR /app

COPY --chown=pptruser:pptruser package*.json ./
COPY --chown=pptruser:pptruser snapshot-server.mjs ./

RUN chown -R pptruser:pptruser /app

USER pptruser

RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", "snapshot-server.mjs"]