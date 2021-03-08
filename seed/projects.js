const db = require('../db/connection')
const Product = require('../models/roduct')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = 
    [
      {
        "name": "Milk",
        "imgURL": "https://static.toiimg.com/photo/msid-70139351/70139351.jpg?792974",
        "description": "we have a lot of milk",
        "catagory": [{
          "meat": "",
          "dairy": "",
          "fresh_produce": "",
          "sea_food": "",
        }],
        "quantity": 5,
      },
      {
        "name": "Milk",
        "imgURL": "https://static.toiimg.com/photo/msid-70139351/70139351.jpg?792974",
        "description": "milk milk milk",
        "catagory": [{
          "meat": "",
          "dairy": "",
          "fresh_produce": "",
          "sea_food": "",
        }],
        "quantity": 2,
      },
      {
        "name": "Milk",
        "imgURL": "https://static.toiimg.com/photo/msid-70139351/70139351.jpg?792974",
        "description": "still milk?",
        "catagory": [{
          "meat": "",
          "dairy": "",
          "fresh_produce": "",
          "sea_food": "",
        }],
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