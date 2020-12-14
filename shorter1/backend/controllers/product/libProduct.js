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

async function numberProduct(req, res) {

  try {
    // On compte le nombre de produit
    //const numberP = await Product.find().count();
    const listProducts = await Product.aggregate([{$project:{month: {$month : "$created_at"}}}])

    return res.status(200).json({
      listProducts,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}

async function avgDistance(req, res) {

  try {
    // On compte le nombre de produit
    //const numberP = await Product.find().count();
    const avgProducts = await Product.aggregate([{$group: {_id:"$category", productAvg: {$avg:"$distance"} } }])

    return res.status(200).json({
      avgProducts,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}






async function listCategory(req, res) {

  try {
    // On compte le nombre de produit
    const listCategory = await Product.distinct("category");
    return res.status(200).json({
      listCategory,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}

async function removeProduct(req, res) {

  const { idProduct } = req.body;
  try {
    // On compte le nombre de produit
    const productRemoved = await Product.remove({"idProduct" : idProduct})
    return res.status(200).json({
      productRemoved,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}

async function numberPerCategory(req, res) {

  try {
    // On compte le nombre de produit
    const numberPerCategory = await Product.aggregate([{ $group: { _id : "$category", "total": { $sum: 1 } } }]);
    return res.status(200).json({
      numberPerCategory,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}
//On exporte nos deux fonctions

exports.numberProduct = numberProduct;
exports.addProduct = addProduct;
exports.listCategory = listCategory;
exports.numberPerCategory = numberPerCategory;
exports.removeProduct = removeProduct;
exports.avgDistance = avgDistance;