<h1> Final Project: "Online Forum" </h1>

This project is an online forum that allows users to post questions, 
answers, and interact with one another. <br>
The forum is built using a Node.js server and a React client. 

<h3>Overview</h3>

-The online forum project is a full-stack web application that enables users to engage in discussions by posting questions and answers. <br>
-Users can also express their opinions on posted content by giving likes or dislikes. <br>
-The application uses JWT authentication to ensure secure user access and is built on a MongoDB database.<br>

<h3>Back-end Features:</h3>

- User registration and login: Allows users to sign up for an account and log in to access the forum.
- CRUD operations for questions and answers: Users can create, read, update, and delete questions and answers.
- Handling likes and dislikes: Enables users to like or dislike questions and answers, providing feedback on content quality.
- JWT authentication: Ensures secure user access by implementing JSON Web Token (JWT) authentication.
- Code quality tools: Eslint and Prettier are integrated to maintain consistent code style and formatting.
- MongoDB database: Uses a MongoDB database for efficient data storage and retrieval.
- Technologies: The back-end is built using Node.js, Express, Mongoose, JWT, and Bcrypt.

<h3>Front-end Features:</h3>

- Vite React.js client: The front-end is built using the Vite React.js framework for fast development and optimized production builds.
- Login and registration, questions and answers forms: Provides user interface components for account creation, login, and interaction with questions and answers.
- Standard website layout: The application follows a typical website layout, including a header and footer, navigation, and other necessary elements.

<h3>How to Run the Project:</h3>

- Clone the repository and navigate to the project folder.
- Install dependencies by running npm install or yarn in the both client and server folders.
- Create .env file by running command in the terminal: "cp .env.example .env" and insert the URI of the database and add JWT secret. 
- To generate 256-bit (32-byte) string you can run run "openssl rand -base64 32" in terminal.
- Start the back-end server by running npm run dev start or yarn dev in the server folder.
- Start the front-end client by running npm run dev or yarn dev in the client folder.
- Access the application in your browser at http://localhost:5713.
- Backend will be accessible in your browser at http://localhost:3000.
