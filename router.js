const express = require("express");
const router = express.Router();
const produtos = [];

router.get("/produtos", function (req, res) {
  res.json(produtos);
});
router.get("/produtos/:produtoId", function (req, res) {
    const encontrado = produtos.find((item) => item.id == req.params.produtoId);
    if (!encontrado) {
      res.status(404).json({ msg: "Produto não encontrado" });
      return;
    }
  
    res.json({});
  });

module.exports = router;
