# ShopSphere E-commerce Platform

ShopSphere is an e-commerce website offering a wide range of products. This platform provides features such as a product page, add to cart functionality, user profiles, and an admin panel for managing products and orders.

## Configure the Project

### Backend

1. Navigate to the backend folder in the terminal:

    ```bash
    cd backend
    ```

2. Install required libraries:

    ```bash
    yarn
    ```

3. Create a new file named `.env` in the backend folder and add your MongoDB URI and JWT secrets:

    ```dotenv
    MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/?retryWrites=true&w=majority
    JWT_SECRET=some_secret_string
    JWT_REFRESH_SECRET=refresh_string
    ```

4. Run the backend project:

    ```bash
    yarn dev
    ```

### Frontend

1. Navigate to the frontend folder in the terminal:

    ```bash
    cd frontend
    ```

2. Install required libraries:

    ```bash
    yarn
    ```

3. Create a `.env` file based on `sample.env` and update the backend URL:

    ```dotenv
    REACT_APP_BACKEND_URL=http://localhost:5000  # Update with your backend URL
    ```

4. Run the frontend project:

    ```bash
    yarn start
    ```

Visit [localhost:3000](http://localhost:3000/) to access the project.

## Libraries

### Backend

- `accesscontrol`
- `bcrypt`
- `boom`
- `cors`
- `dotenv`
- `express`
- `ioredis`
- `joi`
- `jsonwebtoken`
- `mongoose`

### Frontend

- `axios`
- `moment`
- `react-dom`
- `react-image-gallery`
- `react-query`
- `react-router-dom`

### Database

- MongoDB

## Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

Explore the project and enhance your skills in web development! For more detailed information, refer to the documentation links provided.
