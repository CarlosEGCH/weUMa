# FirstProjectDBW

Website that simulates a helpdesk for the University of Madeira called **WeUMa**.

## Project Description

The main objective was to create a web application where the administrators or agents can receive and answer tickets submitted by the users. For this purpose, there are many tools that help the administrators to achieve this objective.

First, the administrators must always have an account and must have an area (or many areas) of specialization (category), given that each ticket will be transfered to the inbox of each agent depending on whether or not the admin is specialized in that category or not.

On the other hand, people with or without accounts on the website are able to submit tickets, having in mind that an email address must be provided for the answer to be sent. All solved tickets are also stored in the administrator's profile where they can also be re-opened, deleted or sent to Frequently Asked Questions.

The website also has a **_forum_** that serves as a general chat divided by categories in which every user can participate by sending live messages including images and emojis. Messages can be deleted, edited and used to open a new ticket having the content of the message as the question in the ticket form.

Administrators have the option to create **_shortcuts_** which are answers that are commonly used. These **_shortuts_** can be used in the **forum_** and to create them there is a dedicated page that can only be accessed by administrators.

Another page called **_FAQ_** contains the Frequently Asked Questions and is divided by category. When a user enters this page there will be many icons that indicate each category and after clicking one the user will be sent to the list of FAQ's that have been answered through time. Administrators can also pin down questions to put them first in the list and un-pin them as well.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Install and Run Instructions](#install-and-run)
- [How to Use this Project](#how-to-use)
- [Final Notes](#final-notes)

## Technologies Used

This project was created using the MERN Stack of technologies as the fundamental base, including more libraries and tools that will be explained in this section.

* Node.js: Used as the base for the server given that is compatible with many of the tools that were used on this project.

* Express.js: It was used because of the simplicity that it provides in terms of routing and compatibility with Node.js and many other libraries.

* MongoDB: Database that was used for storing and retrieving a large part of the data used on the app.

* React: Single Page Application library used for it's flexibility in terms of implementation of user interfaces.

* [Chakra-UI](https://chakra-ui.com/): Component library compatible with React. Contains pre-build classes and functions that facilitate interface creation.

* Axios: Used only for the image uploading function utilized in the **_forum_** and **_signup_** pages.

* Multer: Media handling library. Utilized to store images in the server and attribute hashed names to these.

* Socket.io: Event handling javascript library used to handle live events like message and ticket submitting and admin registration.

* jsonwebtoken: Used to create and handle cookies and user authentication.

* bcrypt: Utilized to encrypt and decrypt user passwords to store them in the database.

* CORS: It was necessary to allow the communication between the client-side and server-side.

* Morgan: It was used to make server interaction more visual, which helped in the development process.

* Mongoose: Used to interact with the Mongo database from the server.

* Nodemon: Also an assistant library. Updates the server every time that a change is made in the code. Helped to speed up the development process.

* Nodemailer: Library used to send emails with the response to the tickets to the email that was specified in the ticket's description.

* dotenv: Used to implement enviroment variables to save critical information of the database, email address and _bcrypt_ hashing key.

## Install and Run

### **NOTE:** This project will not work if there is no **_.env_** file inside the server folder 

After downloading this repository, just execute `npm install` inside the **_/server_** folder. After that, execute the same command inside the **_/frontend_** folder.
Finally, execute `npm run dev` inside the **_/server_** folder and then execute `npm start` inside the **_/frontend_** folder. The page will automatically be opened in a new tab in on the predetermined browser.

## How to Use

To be able to use all the available functions (including administrator functions) the user must create an account and then enter into the database using _mongo_ or _mongo-compass_ and change the *role* field from **user** to **admin** and a *category* of list of categories have to be selected from the available ones for the tickets to be sent to that account.  
