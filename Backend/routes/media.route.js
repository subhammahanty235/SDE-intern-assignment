const router = require('express').Router();
const {uploadMedia , getAllMedia} = require('../controllers/media.controller')

router.route('/uploadmedia').post(uploadMedia);
router.route('/getall').get(getAllMedia);

module.exports = router