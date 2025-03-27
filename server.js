
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();
const routes = require("./routes/routes"); // routes.js ka import

// Static files serve karne ke liye
app.use(express.static(path.join(__dirname, "public")));

// Favicon set karne ke liye
app.use(favicon(path.join(__dirname, "public", "images", "rid_logo0_1.png")));

// Routes use karne ke liye
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


