# Todo App Backend

This Express project serves as the backend for a Todo application, providing APIs for managing todo items.

## Project Structure

The project follows the standard structure of an Express application. Below are the key components:

- `controllers/` - Implements the logic for handling todo-related requests.
- `models/` - Defines the data models for posts, likes, and comments.
- `routes/` - Contains route handlers for different API endpoints.
- `index.js` - Entry point of the application.

## Available APIs

### 1. Create Todo
- **POST** `/createTodo`
  - Description: Creates a new todo item.
  - Request Body:
    ```json
    {
        "title": "Sample Todo",
        "description": "This is a sample todo item."
    }
    ```

### 2. Get All Todos
- **GET** `/getTodos`
  - Description: Fetches all todo items.

### 3. Get Todo by ID
- **GET** `/getTodo/:id`
  - Description: Fetches a specific todo item by its ID.

### 4. Update Todo by ID
- **PUT** `/updateTodo/:id`
  - Description: Updates a specific todo item by its ID.
  - Request Body:
    ```json
    {
        "title": "Updated Todo",
        "description": "This is an updated todo item."
    }
    ```

### 5. Delete Todo by ID
- **DELETE** `/deleteTodo/:id`
  - Description: Deletes a specific todo item by its ID.

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `npm run dev`

Make sure to set up the required environment variables before running the application.

Feel free to explore and enhance the functionalities as needed!
