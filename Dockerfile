FROM node:12-alpine

RUN apt -q update && apt -qy --no-install-recommends install netcat

WORKDIR /app

COPY . .

RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.2/wait /wait
RUN chmod +x /wait

EXPOSE 8787/udp

CMD /wait && node "index.js"
