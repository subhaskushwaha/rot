// const express = require("express");
// const path = require("path");
// const router = express.Router();

// // Controllers import karen agar hain
// // const someController = require("../controllers/someController");

// // Home route
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/main.html"));
// });

// // Test routes
// router.get("/test", (req, res) => {
//     res.send("Test category available");
// });

// // JEE category routes
// router.get("/test/jee", (req, res) => {
//     res.send("JEE test category available");
// });

// // MPPSC category routes
// router.get("/test/mppsc", (req, res) => {
//     res.send("MPPSC test category available");
// });

// // 10th & 12th category routes
// router.get("/test/10th", (req, res) => {
//     res.send("10th board test category available");
// });

// router.get("/test/12th", (req, res) => {
//     res.send("12th board test category available");
// });

// // Feedback
// router.get("/feedback", (req, res) => {
//     res.send("Feedback page");
// });

// // Logout
// router.get("/logout", (req, res) => {
//     res.send("Logout successful");
// });

// // Profile & purchases
// router.get("/my_profile", (req, res) => {
//     res.send("User profile");
// });

// router.get("/myPurchases", (req, res) => {
//     res.send("User purchases");
// });

// // Policies
// router.get("/privacyPolicy", (req, res) => {
//     res.send("Privacy Policy page");
// });

// router.get("/refundPolicy", (req, res) => {
//     res.send("Refund Policy page");
// });

// router.get("/terms", (req, res) => {
//     res.send("Terms and Conditions page");
// });

// // Category route
// router.get("/category", (req, res) => {
//     res.send("Category page");
// });





// // Routes for Group A
// app.get("/groupA/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupA", req.params.file));
// });

// // Routes for Group B
// app.get("/groupB/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupB", req.params.file));
// });

// // Routes for Group C
// app.get("/groupC/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupC", req.params.file));
// });

// module.exports = router;








const express = require("express");
const path = require("path");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/main.html"));
});

// Test routes
router.get("/test", (req, res) => res.send("Test category available"));
router.get("/test/jee", (req, res) => res.send("JEE test category available"));
router.get("/test/mppsc", (req, res) => res.send("MPPSC test category available"));
router.get("/test/10th", (req, res) => res.send("10th board test category available"));
router.get("/test/12th", (req, res) => res.send("12th board test category available"));

// Feedback & Logout
router.get("/feedback", (req, res) => res.send("Feedback page"));
router.get("/logout", (req, res) => res.send("Logout successful"));

// User Profile & Purchases
router.get("/my_profile", (req, res) => res.send("User profile"));
router.get("/myPurchases", (req, res) => res.send("User purchases"));

// Policies
router.get("/privacyPolicy", (req, res) => res.send("Privacy Policy page"));
router.get("/refundPolicy", (req, res) => res.send("Refund Policy page"));
router.get("/terms", (req, res) => res.send("Terms and Conditions page"));

// Category route
router.get("/category", (req, res) => res.send("Category page"));

// ✅ Serve all files inside GroupA (supports nested paths)
router.get("/groupA/*", (req, res) => {
    const filePath = req.params[0]; // Capture everything after /groupA/
    res.sendFile(path.resolve(__dirname, `../public/GroupA/${filePath}`));
});

// ✅ Serve all files inside GroupB (supports nested paths)
router.get("/groupB/*", (req, res) => {
    const filePath = req.params[0];
    res.sendFile(path.resolve(__dirname, `../public/GroupB/${filePath}`));
});

// ✅ Serve all files inside GroupC (supports nested paths)
router.get("/groupC/*", (req, res) => {
    const filePath = req.params[0];
    res.sendFile(path.resolve(__dirname, `../public/GroupC/${filePath}`));
});

module.exports = router;

