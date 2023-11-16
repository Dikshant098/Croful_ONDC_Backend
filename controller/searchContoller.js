const laptop = require('../constants/electronicsProduct/laptopProduct.js')
const mobile = require('../constants/electronicsProduct/mobileProduct.js')
const television = require('../constants/electronicsProduct/televisionProduct.js')
const watches = require('../constants/electronicsProduct/watchesProduct.js')
const burger1 = require('../constants/foodProduct/burgerProduct.js')
const pizza1 = require('../constants/foodProduct/pizzaProduct.js')

const allProducts = {
    "laptop": laptop,
    "mobile": mobile,
    "television": television,
    "watches": watches,
    "burger1": burger1,
    "pizza1": pizza1,
}

const ondc = () => {

}

const searchByProduct = async (req, res) => {
    const data = req.params.product;

    const getProducts = () => {

        var result = ondc(data)

        Object.keys(allProducts).map(key => {
            if (key.toLowerCase().includes(data.toLowerCase())) {
                result = key
            }
        });

        return allProducts[result]
    }

    res.send(getProducts())

}





const searchByCategory = async (req, res) => {
    const data = req.body;
    console.log(data);
}

module.exports = {
    searchByProduct,
    searchByCategory
}