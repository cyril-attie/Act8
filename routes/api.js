const router = require('express').Router();
const inmueblesApiRouter = require('./api/inmuebles');
router.use('/inmuebles', inmueblesApiRouter);
module.exports = router;