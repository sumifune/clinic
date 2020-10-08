const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));





// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  -------------------------------------------------------------------------------------------------------
// const {
//   MONGO_USERNAME,
//   MONGO_PASSWORD,
//   MONGO_HOSTNAME,
//   MONGO_PORT,
//   MONGO_DB
// } = process.env;

// const options = {
//   useNewUrlParser: true,
//   // reconnectTries: Number.MAX_VALUE,
//   // reconnectInterval: 500,
//   useCreateIndex: true,
//   useFindAndModify: false, // to supress deprecation warning
//   connectTimeoutMS: 10000,
//   useUnifiedTopology: true
// };

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// ----------------------------------------------------------------------------------------------------------

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// db.mongoose
//   .connect(url, options)
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// include routes
require("./app/routes/patient.routes")(app);
require("./app/routes/appointment.routes")(app);
require("./app/routes/invoice.routes")(app);
require("./app/routes/service.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});