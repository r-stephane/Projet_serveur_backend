require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Connect to MongoDB database stock
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("la base est connectée avec succés");
  })
  .catch((error) => {
    console.error(error);
  });

const schema = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  stockStatus: {
    type: String,
    enum: ['en stock', 'petite stock', 'pas stock'],
    default: ('en stock'),
    required: true
  }

})
// create  model stock
const produitModel = mongoose.model("produits", schema);

// Get all stock
app.get("/produits", async (req, res) => {
  const produits = await produitModel.find();

  res.send({
    produits,
  });
});

// Get a single stock by its ID
app.get("/produits/:id", async (req, res) => {
  const id = req.params.id;

  const produits = await produitModel.findById(id);

  if (!produits) {
    res.status(404).send({
      message: "produit not found.",
    });
    return;
  }
  res.send({ produits });
});

// Add a new stock
app.post("/produits", async (req, res) => {
  const produit = req.body;

  try {
    await produitModel.create(produit);
  } catch (error) {
    res.send({
      message: error.message,
    });
    return;
  }

  res.send({
    message: "produit modifier avec succes",
    produit
  })
});

// patch
app.patch('/produits/:id', async (req, res) => {
  const id = req.params.id;
  const produit = await produitModel.findById(id);

  if (!produit) {
    res.status(404).send({
      message: "Produit non trouvé.",
    });
    return;
  }

  try {
    const updatedProduit = await produitModel.findByIdAndUpdate(id, req.body, { new: true });
    res.send({
      message: "Produit modifié avec succès",
      updatedProduit
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete stock
app.delete('/produits/:id', async (req, res) => {
  const deletedProduit = await produitModel.findByIdAndDelete(req.params.id);
  if (!deletedProduit) {
    res.status(401).send({
      message: "forbidden action"
    });
    return;
  }
  res.send({
    message: "produit delete successfull",
    deletedProduit,
  })
})
// Expose the server on the defined port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});