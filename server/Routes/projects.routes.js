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

router.post('/', (req, res) => {
  const projectToAdd = [req.body.name, 
      req.body.description, 
      req.body.thumbnail, 
      req.body.website, 
      req.body.github,
      req.body.date_completed,
      req.body.tag_id];

  console.log('req body text: ', projectToAdd);
  // Post new project
  const queryText = `
    INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
    VALUES($1, $2, $3, $4, $5, $6, $7);`;

  pool.query(queryText, projectToAdd)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    })
  
})

router.delete('/:id', (req, res) => {
  const reqId = req.params.id;
  console.log('reqID for delete ', reqId);
  const queryText = `DELETE FROM projects WHERE id=$1;`;
  pool.query(queryText, [reqId])
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error making DB delete ${queryText}`, error);
      res.sendStatus(500);
    })
})

module.exports = router;