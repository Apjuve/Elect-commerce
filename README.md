# <p align="center">Welcome to my Elect-Commerce!</p> 
## <p align="center">A command line application for managing a store database with a RESTful API.

</p>

## Link to Deployed Site
(https://github.com/Apjuve/Elect-commerce)

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Challenges](#challenges)
  * [Usage](#usage)
  * [Test](#test)
  * [Contributors](#contributors)
  * [License](#license)
  * [Questions](#questions)

## Description

This application allows the user to create and edit notes. It was built with JavaScript, Node.js, Express, and Heroku. When the user navigates to the application, they see a landing page with a "Get Started" button. From there, they can navigate to the note taking page and start creating notes. Only notes with a title and body can be saved. Once a note is created and saved, the user can click on it in the notes list to reopen and edit that note.
 
## Technologies
* HTML
* CSS
* Express
* UUID V4
* Heroku
* JavaScript
* Node.js


## Functionality

The application uses Express, Node.js, MySQL, and Segeulize to enable users to manage an e-commerce database from the command line. Once the app is installed, the user can connect to the database and manage the items in the online store by running "mysql -u root -p" and entering their password. Users will then need to create the database by running "sourece db/schema.sql" in the command line. Users will need to create a new .env file to create and store environment variables. Once connected to SQL, users can run "npm run seed" to seed the database and then "npm start" to connect to the api. Using Insomnia to test, users can easily keep track of the items in the store and can also use the application to create, read, update, or delete items. The application uses routes to create a RESTful API that users can interact with from the command line.

## Demo


## Example Note Taker
#### 

## Challenges

* Testing routes in Insomnia and double checking code when errors popped up.
* Understanding the hasMany relationship.
* There are a lot if files to keep track of.


## Usage
* Use this app to keep track of an e-commerce shop.
* Use this app to understand object relational mapping.
* Use this app to see how Node.js and SQL work together.

## Installation
* npm install
* mysql -u root -password
* source db/schema.sql
* exit
* npm run seed
* npm run start

## Future Development
* Test it in a real-world environment.
* Update older projects to include an api.


## Questions
* Take a look at my GitHub profile to see other projects: 
[My GitHub Profile](https://github.com/Apjuve)
* If you have any questions, please reach out via email: abiponce.ap@gmail.com

## License

MIT
