const router = require('express').Router();

router.use('/stories', require('./stories'));
router.use('/authors', require('./authors'));
router.use('/info', require('./info'));

module.exports = router;
