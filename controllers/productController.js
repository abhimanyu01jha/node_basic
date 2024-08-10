// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  // search = (req, res) => {
  //   const query = req.body;
  //   const allProducts = productModel.getAllProducts();
  //   // const filteredProducts = allProducts.filter(product =>
  //   //   product.name.toLowerCase().includes(query)
  //   // );

  //   res.render("searchResults", { products: filteredProducts });
  // };

  search = (req, res) => {
    const { name } = req.body;
    const result = productModel.searchResult(name);
    res.render("searchResults", { products: result });
  };
}
