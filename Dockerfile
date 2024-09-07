FROM node   
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . /home/app/
RUN npm run build 
EXPOSE 3000
CMD ["npm","start"]

 

 

 