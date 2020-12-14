const Time = require("../../schema/schemaTime.js");

async function addTime(req, res) {
  const { idTime, timeMaj } = req.body;
  if (!timeMaj) {
    //Le cas où les infos ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
    // Création d'un objet product
    const time = {
        idTime,
        timeMaj
    };
  
  try {
    // Sauvegarde du product en base
    const timeData = new Time(time);
    const timeObject = await timeData.save();
    return res.status(200).json({
      text: "Succès",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

async function getTime(req, res) {

  const { idTime } = req.body;
  try {
    // On compte le nombre de produit
    //const numberP = await Product.find().count();
    //var tampon = "1"
    const time = await Time.find({"idTime" :"1"})

    return res.status(200).json({
      time,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}

async function updateTime(req, res) {

  const { idTime, timeMaj } = req.body;
  try {
    // On compte le nombre de produit
    //const numberP = await Product.find().count();
    //var tampon = "1"
    const time = await Time.update({"idTime" : idTime},{$set: { "timeMaj" : timeMaj}})

    return res.status(200).json({
      time,
    });
  } catch (error) {
    return res.status(500).json({ error});
  }
}

exports.addTime = addTime;
exports.getTime = getTime;
exports.updateTime = updateTime;
