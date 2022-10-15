FROM node:latest

RUN echo "building backend"
RUN mkdir -p Seven/packages/backend

WORKDIR /Seven/packages/backend
COPY package.json /Seven/packages/backend

RUN ls
RUN cd /Seven/packages/backend



EXPOSE ${BACKEND_PORT}

CMD ["npm", "run", "dev"]
