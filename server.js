// require express in order to run server
const express = require('express');
// import routes
const routes = require('./routes');
// import sequelize connection 
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT} !`));
});
