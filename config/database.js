const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      console.log("connected to db");
    })
    .catch((e) => {
      console.log("something went wrong!!!");
      console.log(e.message);
      process.exit(1);
    });
};

module.exports = connectToDB;