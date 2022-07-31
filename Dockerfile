# Specify the base image
From node:alpine


#INstall Dependencies
WORKDIR /usr/app
COPY ./package.json /usr/app
RUN npm install 
COPY ./  ./
#Default command

CMD ["npm", "start"]