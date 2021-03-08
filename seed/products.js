const db = require('../db/connection')

const Product = require('../models/product')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = 
    [
      {
        "name": "Milk",
        "imgURL": "https://static.toiimg.com/photo/msid-70139351/70139351.jpg?792974",
        "description": "we have a lot of milk",
        "category": [ "dairy", "fresh_produce" ],
        "quantity": 5,
      },
      {
        "name": "Chicken Breast",
        "imgURL": "https://www.foodiecrush.com/wp-content/uploads/2018/08/Instant-Pot-Chicken-Breasts-foodiecrush.com-006A-683x1024.jpg",
        "description": "Chicken breast",
        "category": [ "poultry", "fresh_produce", "meat" ],
        "quantity": 2,
      },
      {
        "name": "Organic Chicken Breast",
        "imgURL": "https://d2d8wwwkmhfcva.cloudfront.net/400x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5b8ff55-e8f4-4636-8df0-583af188af75.jpg",
        "description": "Fresh, farm grown organic chicken breast",
        "category": [ "organic", "fresh_produce", "meat", "poultry" ],
        "quantity": 3,
      },
    ]
  await Product.insertMany(products)
  console.log("Created Products!")

}

const run = async () => {
  await main()
  db.close()
}

run()