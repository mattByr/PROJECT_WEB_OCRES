const Product = require("../../schema/schemaProduct.js");

async function addProduct(req, res) {
  const { idProduct, name, category, distance } = req.body;
  if (!idProduct || !name || !category || !distance) {
    //Le cas où les infos ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
    // Création d'un objet product
    const product = {
      idProduct,
      name,
      category, 
      distance
    };
  try {
    const findProduct = await Product.findOne({
      idProduct
    });
    if (findProduct) {
      return res.status(400).json({
        text: "Le produit existe déjà"
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde du product en base
    const productData = new Product(product);
    const productObject = await productData.save();
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
//On exporte nos deux fonctions

exports.addProduct = addProduct;