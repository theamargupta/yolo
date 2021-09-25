const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "T-shirt Dinosaur 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "red", "orange"],
        slug: "t-shirts-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        description: ""
    },
    {
        title: "T-shirt Dinosaur 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "red", "blue"],
        slug: "t-shirts-dinosaur-02",
        size: ["s", "m"],
        description: ""
    },
    {
        title: "T-shirt Dinosaur 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "red", "orange", "yellow"],
        slug: "t-shirts-dinosaur-03",
        size: ["m"],
        description: ""
    },
    {
        title: "T-shirt Polo 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "orange", "blue"],
        slug: "t-shirts-polo-04",
        size: ["xl"],
        description: ""
    },
    {
        title: "T-shirt Polo 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "pink"],
        slug: "t-shirts-polo-05",
        size: ["xxl"],
        description: ""
    },
    {
        title: "T-shirt Polo 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "t-shirts",
        colors: ["black"],
        slug: "t-shirts-polo-06",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "Shirt caro 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "shirt",
        colors: ["white", "red", "orange", "blue"],
        slug: "shirt-caro-07",
        size: ["l", "xl"],
        description: ""
    },
    {
        title: "Shirt dài tay 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "shirt",
        colors: ["white", "red", "black"],
        slug: "shirt-dai-tay-08",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "Shirt tay dài 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "shirt",
        colors: ["white", "blue"],
        slug: "shirt-tay-dai-09",
        size: ["m"],
        description: ""
    },
    {
        title: "Jeans phong cách 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "jeans",
        colors: ["blue", "black"],
        slug: "jeans-phong-cach-10",
        size: ["l"],
        description: ""
    },
    {
        title: "Jeans 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "jeans",
        colors: ["blue", "black"],
        slug: "jeans-11",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "Jeans 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "jeans",
        colors: ["blue"],
        slug: "jeans-12",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "T-shirt Dinosaur 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "red"],
        slug: "t-shirts-dinosaur-13",
        size: ["s", "m", "xl"],
        description: ""
    },
    {
        title: "T-shirt Dinosaur 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "blue"],
        slug: "t-shirts-dinosaur-14",
        size: ["s", "m"],
        description: ""
    },
    {
        title: "T-shirt Dinosaur 15",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirts",
        colors: ["red", "blue"],
        slug: "t-shirts-dinosaur-15",
        size: ["xl"],
        description: ""
    },
    {
        title: "Shirt dài tay 16",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "shirt",
        colors: ["blue", "black"],
        slug: "shirt-dai-tay-16",
        size: ["m", "xl"],
        description: ""
    },
    {
        title: "Shirt tay dài 17",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "shirt",
        colors: ["white", "blue"],
        slug: "shirt-tay-dai-17",
        size: ["s", "l", "xl"],
        description: ""
    },
    {
        title: "Jeans phong cách 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "jeans",
        colors: ["blue", "black"],
        slug: "jeans-phong-cach-18",
        size: ["s", "m", "l", "xl"],
        description: ""
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData