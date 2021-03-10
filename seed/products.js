const db = require("../db/connection");

const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Milk",
      imgURL:
        "https://static.toiimg.com/photo/msid-70139351/70139351.jpg?792974",
      description: "1 gallon jug of whole milk.",
      price: "$1",
      category: ["dairy", "fresh_produce"],
      quantity: 5,
    }, {
      name: "Chicken Breast",
      imgURL:
        "https://www.foodiecrush.com/wp-content/uploads/2018/08/Instant-Pot-Chicken-Breasts-foodiecrush.com-006A-683x1024.jpg",
      description: "Chicken breast.",
      price: "$1",
      category: ["poultry", "fresh_produce", "meat"],
      quantity: 2,
    }, {
      name: "Organic Chicken Breast",
      imgURL:
        "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5b8ff55-e8f4-4636-8df0-583af188af75.jpg",
      description: "Fresh, farm grown organic chicken breast.",
      price: "$1",
      category: ["organic", "fresh_produce", "meat", "poultry"],
      quantity: 3,
    }, {
      name: "Tilapia Fillets",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/81tgp8HeAcL._SL1500_.jpg",
      description:
        "2 servings of fresh, farm raised Tilapia fillets, 12oz. Only 160 calories per serving.",
      price: "$1",
      category: ["meat", "sea_food"],
      quantity: 3,
    }, {
      name: "Atlantic Salmon",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/71zu6ZGuu8L._SL1500_.jpg",
      description:
        "MOWI Essential Farmed Atlantic Salmon is fresh and never frozen. Try it baked, broiled, pan-fried, or grilled. Two 6oz, skin-on portions per package. Perfect meal for two. Packed with protein and vitamin D. Only 350 calories per serving.",
      price: "$1",
      category: ["organic", "meat", "sea_food"],
      quantity: 3,
    }, {
      name: "Cooked Jumbo Shrimp",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/714cQa4bfUL._SL1500_.jpg",
      description:
        "12oz bag of cooked, peeled, and deveined colossal shrimp with tails.",
      price: "$1",
      category: ["crayfish", "meat", "sea_food"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
      quantity: 3,
    }, {
      name: "Crab Legs",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/619vwMKzrnL._SL1000_.jpg",
      description: "8oz bag of saltwater crab legs.",
      price: "$1",
      category: ["shellfish", "meat", "sea_food", "gluten_free"],
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
