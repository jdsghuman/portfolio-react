const express = require('express');
const pool = require('../module/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // return projects
  const queryText = `SELECT * FROM "projects";`;

  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;