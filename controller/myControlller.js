const products = [];

const addProductGet = (req, res) => {
  // res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

const addProductPost = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

const shopProduct=(req, res) => {
    // res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
    res.render('shop',{pageTitle:'Shop',prods:products,path:'/',hasProduct:products.length>0})
  }

module.exports = { addProductGet, addProductPost,shopProduct};
