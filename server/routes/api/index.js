var router = require('express').Router();

router.use('/characters', require('./characters'));

module.exports = router;
