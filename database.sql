-- Database should be portfolio
CREATE DATABASE "portfolio";

CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

-- Sample Project Item
INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES('Feedback', 'Feedback form is an application that allows user to provide feedback with ratings and comments. Admin users are able to view and delete feedback from an admin page.', 'images/feedback.png', 'https://fierce-retreat-97114.herokuapp.com/#/', 'https://github.com/jdsghuman/weekend-challenge-5-feedback', '2018-12-10', '1');
INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES('Todo List', 'A todo list application that lets users create, delete, and complete tasks.', 'images/todo.png', 'https://thawing-ridge-92038.herokuapp.com/', 'https://github.com/jdsghuman/vega-todo-app-weekend3', '2018-11-26', '2');

