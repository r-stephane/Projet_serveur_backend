# Projet_serveur_backend
# Développer l'API REST d'une application de gestion de produit.
## Features
- Get all produits
- Get a specific produits by ID
- Add a new produits
- Update the status of a produits
- Delete a produits
  ## Tech Stack
- Node.js
- Express.js
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)
### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hmoustaphaousmane/sample-backend.git
    cd todo-app
    ````

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node app.js/ npm run dev
    ```

4. Server will run on:

    ```bash
    http://localhost:3000
    ```

---

## API Reference (Use with Postman)

You can test the API using Postman. Below are example requests you can recreate in Postman.

---

### Get all produit

- **Method**: `GET`
- **URL**: `http://localhost:3000/`

**Sample Response:**

```json
[
  {
   "_id": "68837b022283130169df58ef",
      "productName": "boutique",
      "price": 12.4,
      "stockStatus": "en stock",
      "__v": 0
  }
]
```

---

### Create a new produits

- **Method**: `POST`
- **URL**: `http://localhost:3000/todo`
- **Body**: `raw` → `JSON`

```json
{
  "productName": "oignon",
  "price": 1500,
  "stockStatus": "en stock"
}
```

**Sample Response:**

```json
{
  "message": "Produits added successfully",
}
