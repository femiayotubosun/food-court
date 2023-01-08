You are building a backend API for a meal management application that allows users to create, read, update, and delete
meal addons. The API should also allow users to create categories for these addons.

The API should have the following endpoints:

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