FROM cgr.dev/chainguard/node:latest AS app

ADD ./package.json ./package-lock.json ./
RUN npm ci

Add ./pages ./pages
Add ./public ./public
Add ./src ./src
Add ./.eslintrc.json ./next.config.js  ./README.md ./tsconfig.json ./
run npm run build

# Cannot Export static files to NGINX, because we use Backend APIs for /api/{ping,metricsscraper}
EXPOSE 3000
CMD [ "npm", "run", "start" ]