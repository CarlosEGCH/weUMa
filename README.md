# FirstProjectDBW:

Website that simulates a helpdesk for the University of Madeira called **WeUMa**.

## Project Description

The main objective was to create a web application where the administrators or agents can receive and answer tickets submitted by the users. For this purpose, there are many tools that help the administrators to achieve this objective.

First, the administrators must always have an account and must have an area (or many areas) of specialization (category), given that each ticket will be transfered to the inbox of each agent depending on whether or not the admin is specialized in that category or not.

On the other hand, people with or without accounts on the website are able to submit tickets, having in mind that an email address must be provided for the answer to be sent. All solved tickets are also stored in the administrator's profile where they can also be re-opened, deleted, edited or sent to Frequently Asked Questions.

The website also has a **_forum_** that serves as a general chat divided by categories in which every user can participate by sending live messages including images and emojis. Messages can be deleted, edited and used to open a new ticket of faq having the content of the message as the question in the respective form.

Administrators have the option to create **_shortcuts_** which are answers that are commonly used. These **_shortuts_** can be used in the **forum_** and to create them there is a dedicated page that can only be accessed by administrators.

Another page called **_FAQ_** contains the Frequently Asked Questions and is divided by category. When a user enters this page there will be many icons that indicate each category and after clicking one the user will be sent to the list of FAQ's that have been answered through time. Administrators can also pin down questions to put them first in the list and un-pin them as well.

## Table of Contents:
- [Technologies Used](#technologies-used)
- [Install and Run Instructions](#install-and-run)
- [How to Use this Project](#how-to-use)
- [Final Notes](#final-notes)
- [References](#references)

## Technologies Used:

This project was created using the MERN Stack of technologies as the fundamental base, including more libraries and tools that will be explained in this section.

* [Node.js](https://nodejs.org/es/): Used as the base for the server given that is compatible with many of the tools that were used on this project.

* [Express.js](https://expressjs.com/es/): It was used because of the simplicity that it provides in terms of routing and compatibility with Node.js and many other libraries.

* [MongoDB](https://www.mongodb.com/es): Database that was used for storing and retrieving a large part of the data used on the app.

* [React](https://es.reactjs.org/): Single Page Application library used for it's flexibility in terms of implementation of user interfaces.

* [Chakra-UI](https://chakra-ui.com/): Component library compatible with React. Contains pre-build classes and functions that facilitate interface creation.

* [Axios](https://github.com/axios/axios): Used only for the image uploading function utilized in the **_forum_** and **_signup_** pages.

* [Multer](https://www.npmjs.com/package/multer): Media handling library. Utilized to store images in the server and attribute hashed names to these.

* [Socket.io](https://socket.io/): Event handling javascript library used to handle live events like message and ticket submitting and admin registration.

* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Used to create and handle cookies and user authentication.

* [bcrypt](https://www.npmjs.com/package/bcrypt): Utilized to encrypt and decrypt user passwords to store them in the database.

* [CORS](https://www.npmjs.com/package/cors): It was necessary to allow the communication between the client-side and server-side.

* [Morgan](https://www.npmjs.com/package/morgan): It was used to make server interaction more visual, which helped in the development process.

* [Mongoose](https://mongoosejs.com/): Used to interact with the Mongo database from the server.

* [Nodemon](https://www.npmjs.com/package/nodemon): Also an assistant library. Updates the server every time that a change is made in the code. Helped to speed up the development process.

* [Nodemailer](https://nodemailer.com/about/): Library used to send emails with the response to the tickets to the email that was specified in the ticket's description.

* [dotenv](https://www.npmjs.com/package/dotenv): Used to implement enviroment variables to save critical information of the database, email address and _bcrypt_ hashing key.

* [Mailtrap](https://mailtrap.io/): This was used as inbox to receive and redirect the emails sent after a ticket is answered.

## Install and Run:

### **NOTE:** This project will not work if there is no **_.env_** file inside the server folder with the following syntax:

```
BASE_URL = <URL of the database>
SECRET_KEY = <hash key that for password encryption
MAIL_HOST = <host for the email service>
MAIL_PORT = <port for the email service>
MAIL_USER = <username for the email service>
MAIL_PASS = <password for the email service>
```

After downloading this repository, just execute `npm install` inside the **_/server_** folder. After that, execute the same command inside the **_/frontend_** folder.
Finally, execute `npm run dev` inside the **_/server_** folder and then execute `npm start` inside the **_/frontend_** folder. The page will automatically be opened in a new tab in on the predetermined browser.

## How to Use:

To be able to use all the available functions (including administrator functions) the user must create an account and then enter into the database using _mongo_ or _mongo-compass_ and change the *role* field from **user** to **admin** and a *category* of list of categories have to be selected from the available ones for the tickets to be sent to that account.

## Final Notes:

The following functions were implemented:

* Login and Signup system with cookie authentication.

* Forum with a chat system where both users and administrators can participate.

* Ticket pool that the administrators can solve depending on their category of specialization.

* When the tickets are being answered there is a checkbox that gives the option to save the question-answer pair on FAQs.

* Frequently Asked Questions can be deleted, edited, pinned on the start of the list, and reopened as new tickets and are created based on the ticket's title and it's response by the admin.

* Frequently Asked Questions are divided by categories and are displayed as collapsible items on a list.

* A message written in the chat can be used as the base for a new ticket, having to provide an email and a title for the question, as well as a category.

* Each ticket has a category that will define which admins will receive it in their inbox.

* User profile contains the amount of tickets solved on that account, as well as the question-answer set for each one.

* It is possible to re-open a ticket either from the solved tickets section as well as the FAQ's section.

* Unsolved tickets are displayed on the UI for the admin's tickets in the form of a list. The admins can open and close tickets on this page improve the user experience.

* The amount of tickets unsolved are always shown as a badge on the icon that leads the user to the tickets solving page.

* The administrators that are online are shown on the right of the page when on desktop mode.

* The chat was implemented with the possibility of sending emojis, images, edit and delete messages and open tickets and FAQs from the messages.

* Each administrator has the option to create _shortcuts_ that are quick answers that each admin can write to prevent writing the same answer multiple times. A shortcut can be creted, edited and deleted at any moment inside the **shortcuts** page which is available for every admin at the top-right corner of the website.

* On the bottom-right corner there are two links to **moodle** and **infoalunos** having in mind that this website is student-oriented.

## References:

* Fazt-Code: https://www.youtube.com/c/FaztTech
