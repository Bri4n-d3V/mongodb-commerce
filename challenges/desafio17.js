db.resumoProdutos.insert({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.findOne({ franquia: "McDonalds" }, { _id: false });