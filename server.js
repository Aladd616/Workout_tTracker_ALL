const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const apiRoutes = require("./routes/api.js");
// const htmlRoutes = require("./routes/html.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
// app.use(apiRoutes);
// app.use(htmlRoutes);
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
