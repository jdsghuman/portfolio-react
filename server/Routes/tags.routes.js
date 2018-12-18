const express = require('express');
const pool = require('../module/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // Return tags
  const queryText = `SELECT * FROM "tags";`;

  pool.query(queryText)
    .then(result => {
      console.log(result);
      res.send(result.rows);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
})

module.exports = router;