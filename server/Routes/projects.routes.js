const express = require('express');
const pool = require('../module/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // Return projects
  // const queryText = `SELECT * FROM "projects";`;
  const queryText = `SELECT "projects".id, "projects".name, "projects".description, "projects".github, "projects".thumbnail, "projects".website, "projects".date_completed, "tags".name as tag
  FROM projects JOIN tags ON projects.tag_id = tags.id;`;

  pool.query(queryText)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;