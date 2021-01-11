const express = require('express');

const router = express.Router();

router.route('/status').get((req, res) => {
    res.json('Server is running');
});

module.exports = router;
