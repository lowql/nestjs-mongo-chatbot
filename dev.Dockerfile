FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE $PORT
CMD ["npm", "run","start:dev"]