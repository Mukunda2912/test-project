FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]


# FROM node:latest as nodeui
# WORKDIR /reactapp
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

 

# # Stage 2 using alpine
# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=nodeui /reactapp/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

 

# Stage 2 using apache
# FROM httpd:latest
# COPY --from=node /app/build /usr/local/apache2/htdocs
