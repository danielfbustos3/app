const express = require('express');
const router = express.Router();

router.get("/testing", (req, res) => {
    console.log("Hello API");
    res.send('Hello iot API');
});

module.exports = router;