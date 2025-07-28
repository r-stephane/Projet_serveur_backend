# Projet_serveur_backend
# Développer l'API REST d'une application de gestion de produit.
## Features
- Obtenir tous les produits
- Obtenir un produit spécifique par son identifiant
- Ajouter un nouveau produit
- Mettre à jour le statut d'un produit
- Supprimer un produit
  ## Tech Stack
- Node.js
- Express.js
## Getting Started
Salut tous le monde,sur cet projet je met en evidence la realisation d'un API d'une application de gestion des produits alors pour cela rester connecter pour d'autes merveilles.
### Prerequisites

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)
### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/hmoustaphaousmane/sample-backend.git
    cd produit-app
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

Vous pouvez tester l'AP. Vous trouverez ci-dessous des exemples de requêtes que vous pouvez recréer dans Postman.
---

### Get all produit

- **Method**: `GET`:permet de récuperer la liste de tous les produits.
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

- **Method**: `POST`:permet d'ajouter un nouvel produit.
- **URL**: `http://localhost:3000/produit`

```json
{
  "productName": "oignon",
  "price": 1500,
  "stockStatus": "en stock"
}
```
### Update a new produits

- **Method**: `PATCH`:permet de mettre à jour un produit excepté son status en stock.
- **URL**: `http://localhost:3000/produits/68837f96884c1a6519dda78d`

```json
{
  "stockStatus": "pas stock"
}
```

## Delete a new produits

- **Method**: `DELETE`:permet de supprimer un produit.
- **URL**: `http://localhost:3000/produits/68837f96884c1a6519dda78d`
**Sample Response:**

```json
{
  "message": "product delete successfull",
}

