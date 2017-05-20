##Introduction
This is the term project for SFSU CSC 667/867 course, a poker game based on Socket.io, Node, Express, Angular, Sequelize and Bootstrap.<br/>
Front folder consists of angular(Front end).<br/>
Back folder consists of express(Back end).<br/>
Front-end runs on port 4200.<br/>
Back-end runs of port 3000.<br/>
The proxy of angular cli is redirected to 3000 in proxy.config.json.<br/>
The aws-sdk config is location in aws.config.json.<br/>
Please refer to the documentation of angular/cli and nodemon for further details about development environment.<br/>

##Instructions
Install node and npm<br/>
Install nodemon,sequelize-cli and @angular/cli globally via npm<br/>
Go to front folder and npm install dependencies<br/>
Go to back folder and npm install dependencies<br/>
Create a postgres database<br/>
Edit database configurations in back/config/config.json<br/>
Enter AWS SES details in back/config/aws.json<br/>
Run npm start in front folder<br/>
Run npm start in back folder<br/>
Run the sequelize seeders in the back folder<br/>
Default sample logins are preloaded<br/>
Username:qwe Password:qwe<br/>
Username:qwe1 Password:qwe<br/>
Username:qwe2 Password:qwe<br/>