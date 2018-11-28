let router = require('express').Router();

router.get('/', function (req, res) {
    res.send('Alexandre Rosset');
});

module.exports = router;