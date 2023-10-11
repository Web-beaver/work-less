FROM node

WORKDIR /work-less

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "node","index.js" ]