# Project Title

Better Bookmarks

## Description

An MVP version of a full stack app to allow users to share meaningful links related to programming resources. Built with Javascript, Node.JS, Express.JS, EJS and Tailwind CSS.

## Packages

"bcrypt": "^5.0.1",<br />
"cloudinary": "^1.25.1",<br />
"connect-mongo": "^3.2.0",<br />
"daisyui": "^2.31.0",<br />
"dotenv": "^8.2.0",<br />
"ejs": "^3.1.6",<br />
"express": "^4.17.1",<br />
"express-flash": "^0.0.2",<br />
"express-session": "^1.17.1",<br />
"method-override": "^3.0.0",<br />
"mongodb": "^3.6.5",<br />
"mongoose": "^5.12.3",<br />
"morgan": "^1.10.0",<br />
"multer": "^1.4.5-lts.1",<br />
"nodemon": "^2.0.7",<br />
"passport": "^0.6.0",<br />
"passport-local": "^1.0.0",<br />
"validator": "^13.6.0"

## Executing program

* Install

`npm install`

---

* Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

* Run

`npm start`

## Optimizations

-Add a favourite feature to save individual links to your profile<br />
-Improve layout design<br />
-Improve liking feature to allow only one like per user
