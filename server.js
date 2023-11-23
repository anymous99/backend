const express = require("express");
const path = require("path");
const cors = require("cors"); // Import the cors middleware
const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the cors middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Update with the actual origin of your frontend
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
