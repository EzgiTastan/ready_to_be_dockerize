FROM node:20.11.1

WORKDIR /tmp

COPY . .

EXPOSE 3000:3000

RUN apt update && apt upgrade -y

CMD [ "node", "api-calculator.js" ]