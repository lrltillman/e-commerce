# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description

This is a back-end only app using MySQL to manage products within an online ecommerce store. Data is organized into Products, Categories, and Tags, which have various associations with one another. This app creates models and routes that allow for effieicnt calls from the MySQL database. 

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Tech Stack

This app uses javascript, dependencies express, dotenv, mysql2, and sequelize. Insomnia was used for testing API calls and displaying data in the demo video. 

## Collaboration

I received help on this assignment from tutors Andrew Hardemon and Brandon Rose, as well as guidance from the instructional team in the EdX bootcamp program. 

[Demo video here!](https://drive.google.com/file/d/1UaHnLoYAZGxFqWMxICX0qwXN-r0NkAIU/view)