# Food-Court-Assessment

## Description

Assessment for backend developer.

A backend API for a meal management application that allows users to create, read, update, and delete
meal addons. The API should also allow users to create categories for these addons.

### Routes
- POST /brands/:brandId/addons: Create a new meal addon for the specified brand. The request body should
contain the following fields:
    - name: The name of the meal addon (string, required)
    - description: A description of the meal addon (string, optional)
    - price: The price of the meal addon (number, required)
    - category: The category of the meal addon (string, optional)
- GET /brands/:brandId/addons: Retrieve a list of all meal addons for the specified brand.
- GET /brands/:brandId/addons/:addonId: Retrieve a single meal addon by its ID for the specified brand.
- PATCH /brands/:brandId/addons/:addonId: Update a single meal addon by its ID for the specified brand.
    The request body should contain the following fields:
    - name: The updated name of the meal addon (string, optional)
    - description: The updated description of the meal addon (string, optional)
    - price: The updated price of the meal addon (number, optional)
    - category: The updated category of the meal addon (string, optional)
- DELETE /brands/:brandId/addons/:addonId: Delete a single meal addon by its ID for the specified brand.
- POST /brands/:brandId/addon-categories: Create a new category for meal addons for the specified
brand. The request body should contain the following field:
    - name: The name of the category (string, required)

### Links

- <a href="https://food-court.onrender.com">Link to Live</a>

- <a href="https://elements.getpostman.com/redirect?entityId=23283058-67dee409-f621-4100-b710-ea7aaa3bc1dd&entityType=collection"> Postman Docs</a>



## Installation

```bash
$ npm install
```

## Running the app


Add .env.stage.prod
with the following values

```bash
JWT_SECRET=
DB_URI=
STAGE=dev
NODE_ENV=development
```

```bash
# development
$ npm run start

# Run migrations
$ npm run migrate

# watch mode
$ npm run start:dev

# build
$ npm run build

# production mode
$ npm run start:prod
```
