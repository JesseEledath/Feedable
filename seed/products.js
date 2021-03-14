const db = require("../db/connection");

const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Horizon Organic Milk",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/81GC22%2BG0jL.jpg",
      description: "Milk with DHA Omega-3, Half Gallon",
      price: 6.99,
      category: ["dairy"],
      quantity: 5,
    },
    {
      name: "Ready Chicken Breast Strips, 22 oz (Frozen)",
      imgURL: "https://m.media-amazon.com/images/I/41w9X1L+CQL.jpg",
      description: "One 22 oz. package of Fully Cooked Chicken Breast Strips",
      price: 7.99,
      category: ["poultry", "meat"],
      quantity: 2,
    },
    {
      name: "Applewood Smoked Bacon",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/81QcJsFkTFL.jpg",
      description: "Thick sliced bacon",
      price: 4.99,
      category: ["meat"],
      quantity: 2,
    },
    {
      name: "Organic Chicken Breast",
      imgURL:
        "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5b8ff55-e8f4-4636-8df0-583af188af75.jpg",
      description: "Fresh, farm grown organic chicken breast.",
      price: 6.99,
      category: ["poultry", "meat"],
      quantity: 3,
    },
    {
      name: "Tilapia Fillets",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/81tgp8HeAcL._SL1500_.jpg",
      description:
        "2 servings of fresh, farm raised Tilapia fillets, 12oz. Only 160 calories per serving.",
      price: 6.99,
      category: ["sea_food"],
      quantity: 3,
    },
    {
      name: "Atlantic Salmon",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/71zu6ZGuu8L._SL1500_.jpg",
      description:
        "MOWI Essential Farmed Atlantic Salmon is fresh and never frozen. Try it baked, broiled, pan-fried, or grilled. Two 6oz, skin-on portions per package. Perfect meal for two. Packed with protein and vitamin D. Only 350 calories per serving.",
      price: 7.5,
      category: ["sea_food"],
      quantity: 3,
    },
    {
      name: "Cooked Jumbo Shrimp",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/714cQa4bfUL._SL1500_.jpg",
      description:
        "12oz bag of cooked, peeled, and deveined colossal shrimp with tails.",
      price: 7.2,
      category: ["sea_food"],
      quantity: 3,
    },
    {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: 5.8,
      category: ["sea_food"],
      quantity: 3,
    },
  ];
  await Product.insertMany(products);
  console.log("Created Products!");
};

const run = async () => {
  await main();
  db.close();
};

run();
