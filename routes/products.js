const { Router } = require('express')
const controllers = require('../controllers/products')
const router = Router()
router.get('/', controllers.getProducts)
router.get('/:id', controllers.getProduct)
router.post('/', controllers.createProduct)
router.put('/:id', controllers.updateProduct)
router.delete('/:id', controllers.deleteProduct)

module.exports = router