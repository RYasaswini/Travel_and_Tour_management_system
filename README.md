# Travelworld-project
<div align="center">
  <a href="https://github.com/Yashg5311/travelworld-project">
    <img width="255" alt="logo" src="https://github.com/Yashg5311/travelworld-project/assets/91370994/6065f7cf-9240-417c-9235-350580f47906">
  </a>

  <h2 align="center">TravelWorld</h2>

  <p align="center">
    Build with the MERN stack (MongoDB, Express, React and NodeJS).
    <br />
    <a href="https://travelworld-cwkp.onrender.com/home"><strong>Explore the Project »</strong></a>
    <br />
    <br />
  </p>
</div>

![Screenshot (11)](https://github.com/Yashg5311/travelworld-project/assets/91370994/6a72b3c2-3e8d-430c-a1d9-c29bb0920de0)

## MERN Stack Travel Booking Website

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  


## Introduction
This is a MERN Stack project on a Travel Application Booking. With this application, we can login and register and create a account book a tour. Users can search a tour on Location, Distance, Max people.Features of Best Services,  Featured Tours, Gallery have been added. Users can also book Tour and give a review. But I'll appreciate you if you can report any issue. Have a Look at Features!

![Screenshot (13)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/7d45a534-2f32-4989-9342-f1a85a7dc391)
![Screenshot (14)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/d1dd3a64-5bbe-49ca-a68b-04fa3ef110e5)
![Screenshot (15)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/a753d9fb-cc28-4fa3-b58d-a27d9fc6ec71)
![Screenshot (16)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/ebf826eb-1f9a-4fb0-b5c7-afdb7f32dece)
![Screenshot (17)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/f1073e96-02ec-46fa-ae79-59c1e71ffc03)
![Screenshot (18)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/3ff62f68-be96-492e-bf49-9686bbe4f58d)
![Screenshot (19)edit](https://github.com/Yashg5311/travelworld-project/assets/91370994/462b9f1d-b3e0-43de-82cd-b5d2baca1fb6)




## Key Features
- Engineered an interactive web platform to streamline travel tour bookings for tourists. 
- Users can search tour by location,group Size and distance,add reviews to tours, can book tours
-  user registration and login.
- Authentication using JSON web token (JWT) 


## Technologies used
This project was created using the following technologies.

#### Frontend

- React JS
- HTML
- CSS
- JavaScript
- BootStrap

#### Backend

- ExpressJS
- NodeJs
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)

#### Database
MongoDB (MongoDB Atlas)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

$ cd frontend
$ npm install (to install client-side dependencies)
$ npm start (to start the client)


For setting up backend
- cd create a .env file in the root of your directory.
- Supply the following credentials


PORT=3001
MONGO_URI=
JWT_SECRET_KEY=





Provide some random key in ACCESS_TOKEN_SECRET or you could generate one using node enter the below command in the terminal to genrate a random secret key 


node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"


In the second terminal (*in the project root directory (back-end))

```
$ npm install (to install server-side dependencies)
& npm run start-dev (to start the server)
