FROM node:18.16.0

# for caching optimisations
COPY package*.json /
RUN npm install
# required to serve the react app on the live server
RUN npm install -g serve

COPY . /app
WORKDIR /app

ENV PATH=/node_modules/.bin:$PATH
ENV PORT=80
ENV HOST=0.0.0.0
ENV BROWSER='none'

RUN npm run build

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]