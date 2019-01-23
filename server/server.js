const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const projectsRouter = require('./Routes/projects.routes');
const tagsRouter = require('./Routes/tags.routes');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/projects', projectsRouter);
app.use('/tags', tagsRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});