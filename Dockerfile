FROM node:16

WORKDIR /app/

COPY package.json package-lock.json* /app/

RUN npm i

COPY . .

ENV AWS_ACCESS_KEY_ID=xxx
ENV AWS_SECRET_ACCESS_KEY=xxx
ENV AWS_DEFAULT_REGION=xxx

ENV MONGO_URI= mongodb://xxx:xxx@xxx:27017/xxx?authSource=admin
ENV DB_NAME=xxx
ENV JWT_SECRET=xxx

EXPOSE 3000
CMD [ "npm", "run", "start"]