const express = require("express");
const path = require("path");
const router = express.Router();

// Controllers import karen agar hain
// const someController = require("../controllers/someController");

// Home route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

// Test routes
router.get("/test", (req, res) => {
    res.send("Test category available");
});

// JEE category routes
router.get("/test/jee", (req, res) => {
    res.send("JEE test category available");
});

// MPPSC category routes
router.get("/test/mppsc", (req, res) => {
    res.send("MPPSC test category available");
});

// 10th & 12th category routes
router.get("/test/10th", (req, res) => {
    res.send("10th board test category available");
});

router.get("/test/12th", (req, res) => {
    res.send("12th board test category available");
});

// Feedback
router.get("/feedback", (req, res) => {
    res.send("Feedback page");
});

// Logout
router.get("/logout", (req, res) => {
    res.send("Logout successful");
});

// Profile & purchases
router.get("/my_profile", (req, res) => {
    res.send("User profile");
});

router.get("/myPurchases", (req, res) => {
    res.send("User purchases");
});

// Policies
router.get("/privacyPolicy", (req, res) => {
    res.send("Privacy Policy page");
});

router.get("/refundPolicy", (req, res) => {
    res.send("Refund Policy page");
});

router.get("/terms", (req, res) => {
    res.send("Terms and Conditions page");
});

// Category route
router.get("/category", (req, res) => {
    res.send("Category page");
});

module.exports = router;
