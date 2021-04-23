# **"And Now What?"**

## Description

A search web that you can find recepies, trought an external API, based on your ingredents choice.
Create your own recepies and share with your community and you can edit others recepies based on your own taste and erase yours owns.

### MVP ###
App, create, read, update, delete recepies (CRUD) from API also your own.
You have to signin, login and logout to be able to use all the web functionality

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **custom list** - As a user I want to see the list of my custom recipes and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the list of recipes filter by my preferences.
- **recipes listing** - As a user I want to save some recipes as favorites.



### Backlog

- Search nearby Restaurants (Mapnode)
- Implement Passport
- jquery desktop and mobile version
- Node-mailer
- Apply CSS (bot traps)
#
## Data structure
#
```
Data Structure and Algorithms
|
├── config
|   └── db.config.js
|   └── debugger.config.js
|   └── locals.config.js
|   └── middleware.config.js
|   └── password.config.js
|   └── preformatter.config.js
|   └── session.config.js
|   └── view.config.js
├── middlewares
|   └── index.js
├── models
|   └── User.models.js
|   └── Recipe.models.js
|   └── Ingredents.models.js
├── public
|   └── _images
|   └── _javascript
|       └── script.js
|   └── _stylesheets
|       └── style.css
├── routes
|   └── user.js
|   └── index.js
|   └── auth.routes.js
|   └── private.routes.js
├── views
|   └── index.hbs
|   └── layouts.hbs
|   └── search.hbs
|   └── admin_page.hbs
|   └── error.hbs
|   └── login.hbs
|   └── sign.hbs
|   └── notfound.hbs
|   └── profile.hbs
├── gitignore
├── env
├── app.js
├── package-lock.json
└── package.json
```

## Server Routes (Back-end):

| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite for the current user.     | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. |                                                          |
| `GET`      | `/restaurants`                     | Renders `restaurant-list` view.                              |                                                          |
| `GET`      | `/restaurants/details/:id`         | Renders `restaurant-details` view for the particular restaurant. |                



# link
* [Trello](https://trello.com/b/mUNfcyeK/web-design-development)
* [API](https://apilist.fun/api/food-api)
# Git
* [GitHub](https://github.com/jpsm83/Projecto-2)

# Slides

* [Figma](https://www.figma.com/proto/a0qhB6wFntTGK9AxE0cwW3/Projecto-2-Presentation?node-id=18%3A6&scaling=contain&page-id=0%3A1)
