# Utilisation d'une image de base Node.js pour construire l'application
FROM node:lts as build-stage

# Installation de serveur HTTP pour Angular
RUN npm install -g http-server

# Création d'un répertoire de travail pour l'application
WORKDIR /app

# Copie de tout le code source de l'application dans le conteneur
COPY . .

# Installation des dépendances
RUN npm install

FROM nginx:latest

COPY --from=build-stage /app/dist/bank-root-front /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# Commande pour démarrer le serveur HTTP
CMD [ "nginx", "-g", "daemon off;"]
