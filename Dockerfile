FROM node:20.11-alpine as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:20.11-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm install -g npm@10.5.2
RUN npm run build:production

FROM node:20.11-alpine as runner
WORKDIR /app
ENV NODE_ENV production
RUN npm install -g npm@10.5.2
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["npm", "start"]
