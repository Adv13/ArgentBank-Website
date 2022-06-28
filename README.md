![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions in order to launch the project

### Backend part

1. Fork the repo https://github.com/Adv13/Project-13-Bank-API
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!
Your API documentation will be at http://localhost:3001/api-docs and the part 2 of the API documentation will be at http://localhost:3001/api-docs2

## Populated Database Data

Once you run the `populate-db` script on the Backend part, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### Frontend part

1. Fork the repo https://github.com/Adv13/DENIE_Tiffany_13_19052022
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

### `npm install`

In order to install all packages required for this project.
If needed, install sass (globally : npm i -g sass OR locally : npm i sass --save-dev)

### `npm start`

In order to launch this project at http://localhost:3000/.
If you don't see the project on this port, It might be already occuped. Try another one !
