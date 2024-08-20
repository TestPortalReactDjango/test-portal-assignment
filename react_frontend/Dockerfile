FROM node:22-latest
WORKDIR /react_frontend
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]
