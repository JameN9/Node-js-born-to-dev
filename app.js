const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use("/products" ,productRouter)

productRouter.route("/").get((req,res) =>{
  res.render('products',products,);

});

app.get("/", (req, res) => {
  res.render('index',{username:'jame',custommer:['kitt','jame','joke']});
});


app.listen(PORT, () => {
  debug("It's port" + chalk.green(" : " + PORT));
});
