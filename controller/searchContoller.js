const laptop = require('../constants/electronicsProduct/laptopProduct.js')
const mobile = require('../constants/electronicsProduct/mobileProduct.js')
const television = require('../constants/electronicsProduct/televisionProduct.js')
const watches = require('../constants/electronicsProduct/watchesProduct.js')
const burger1 = require('../constants/foodProduct/burgerProduct.js')
const pizza1 = require('../constants/foodProduct/pizzaProduct.js')
const axios = require('axios');

const allProducts = {
    "laptop": laptop,
    "mobile": mobile,
    "television": television,
    "watches": watches,
    "burger1": burger1,
    "pizza1": pizza1,
}

const ondc = async (latitude, longitude, categories) => {
    const url = `https://www.mystore.in/api/1/entity/ms.products?fields[name]=1&fields[price]=1&fields[sku]=1&fields[images]=1&fields[alias]=1&fields[metafields]=1&fields[discounts]=1&fields[catalog_only]=1&fields[is_catalog]=1&fields[seller]=1&fields[available]=1&fields[compare_price]=1&fields[]=1&fields[seller_details]=1&fields[location_availability_mode]=1&fields[food_type]=1&fields[seller_collections]=1&filters[0][field]=categories&filters[0][value][0]=${'mobile-accessories'}&filters[0][operator]=in&filters[1][field]=location_availability&filters[1][operator]=in&filters[1][value][0]=122001&filters[1][value][1]=std:124&filters[1][value][2]=all&facetgroup=default_category_facet&limit=1000&total=1&start=0&new_search=1&latitude=${28.4594842}&longitude=${77.0199782}&location_check=1`

    try {
        const { data } = await axios.get(url)
        return data;
    } catch (error) {
        return error
    }

}

const searchCategory = async (categories) => {
    const url = `https://www.mystore.in/api/1/entity/ms.products?fields[name]=1&fields[price]=1&fields[sku]=1&fields[images]=1&fields[alias]=1&fields[metafields]=1&fields[discounts]=1&fields[catalog_only]=1&fields[is_catalog]=1&fields[seller]=1&fields[available]=1&fields[compare_price]=1&fields[]=1&fields[seller_details]=1&fields[location_availability_mode]=1&fields[food_type]=1&fields[seller_collections]=1&filters[0][field]=categories&filters[0][value][0]=${categories}&filters[0][operator]=in&filters[1][field]=location_availability&filters[1][operator]=in&filters[1][value][0]=122001&filters[1][value][1]=std:124&filters[1][value][2]=all&facetgroup=default_category_facet&limit=24&total=1&start=0&new_search=1&latitude=28.4594842&longitude=77.0199782&location_check=1`

    try {
        const { data } = await axios.get(url)
        return data;
    } catch (error) {
        return error
    }

}

const searchByProduct = async (req, res) => {
    const data = req.params.product;
    const resp = await ondc();
    res.send(resp)

}

const searchList = async (req, res) => {
    const search = req.params.search
    try {
        const searchUrl = `https://www.mystore.in/api/1/entity/ms.sellers?search=${search}&search_fuzzy=1&search_score_log=1&limit=20&latitude=28.4594842&longitude=77.0199782&new_search=1&hyperlocal=1&filters[0][field]=available_published_product_count&filters[0][operator]=greater_than&filters[0][value]=0`
        const response = await axios.get(searchUrl);
        res.send(response.data.data)
        
    } catch (error) {
        res.send(error)
    }

}


const getProductDetailsById = async (req, res) => {
    const id = req.params.id
    let result = {}
    Object.keys(allProducts).map(key => {
        allProducts[key].data.map(m => {
            if (m._id == id) {
                console.log(m);
                result = m
                return
            }
        })
    });
    res.send(result)
}


const getLocation = async (req, res) => {
    const url = ''
    const resp = axios.get()
}


const searchByCategory = async (req, res) => {
    const params = req.params;
    try {
        const resp = await searchCategory(params.category);
        res.send(resp);
        
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    searchByProduct,
    searchByCategory,
    getProductDetailsById,
    searchList
}