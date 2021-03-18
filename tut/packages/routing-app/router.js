const express = require('express')
const router = express.Router();
const accounts = require('./db')
// Get request parameters
router.get("/accounts", (req,res) => {
    res.json({userData: accounts});
})



module.exports = router;