const express = require('express');
const router = express.Router();

function itsHealt (req, res) {
    res.status(200).json({
        status: "ok"
    })
}

router.get('/healt', itsHealt);

module.exports = router;