const router = require('express').Router();
const axios = require('axios');
const crypto = require('crypto');

const {
  urlBaseCharacter,
  apikey,
  privateApiKey,
} = require('../../constants.js');
const ts = Date.now();
const hash = crypto
  .createHash('md5')
  .update(ts + privateApiKey + apikey)
  .digest('hex');

router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get(urlBaseCharacter, {
      params: {
        apikey,
        hash,
        limit: req.query.limit,
        offset: req.query.offset,
        ts,
      },
    });

    if (response.data.code === 200) {
      res.send(response.data.data);
    } else {
      // should never happen
      let unexpectedError = new Error(
        `Marvel API - Unexpected Status Code ${response.data.code}`
      );
      unexpectedError.status = response.data.code;
      next(unexpectedError);
    }
  } catch (error) {
    if (error && error.response && error.response.data) {
      let apiError = new Error(error.response.data.status);
      apiError.status = error.response.data.code;
      next(apiError);
    } else {
      next(error);
    }
  }
});

module.exports = router;
