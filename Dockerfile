FROM node:14.17-alpine
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install
RUN npm run build
CMD [ "npm", "run", "start" ]

# docker build -t "orthohome:Dockerfile" .
# docker run -p 80:3000 orthohome:Dockerfile