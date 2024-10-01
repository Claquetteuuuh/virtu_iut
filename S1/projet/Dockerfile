FROM node:latest

WORKDIR /app/user/goofy/

RUN ["apt", "update", "-y"]
RUN ["apt", "upgrade", "-y"]

COPY . /app/user/goofy/

RUN ["npm", "install"]

EXPOSE 3000
RUN ["npm", "run", "build"]

CMD ["npm", "start"]