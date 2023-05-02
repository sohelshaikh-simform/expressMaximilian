const fs = require("fs/promises");
const path = require("path");

const addProductGet = (req, res) => {
  // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const addProductPost = async (req, res) => {
  const products = await fs.readFile(p, "utf-8");
  const products2 = products?JSON.parse(products):[];

  products2.push({ title: req.body.title });
  await fs.writeFile(p, JSON.stringify(products2));
  res.redirect("/");
};

const shopProduct = async (req, res) => {
  // res.sendFile(path.join(__dirname, '../','views', 'shop.html'));

  const products =  await fs.readFile(p, "utf-8");
  const products2 = products?JSON.parse(products):[];

  res.render("shop", {
    pageTitle: "Shop",
    prods: products2,
    path: "/",
    hasProduct: products.length > 0,
  });
};

module.exports = { addProductGet, addProductPost, shopProduct };
