const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/deshbord/index.html'));
});

router.get('/dashboard/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/deshbord/profile.html'));
});

module.exports = router;
