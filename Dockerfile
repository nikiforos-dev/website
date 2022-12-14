FROM node:14.17-alpine
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]