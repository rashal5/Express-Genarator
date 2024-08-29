var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ajmal' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/product', function(req, res, next) {
  const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        description: "A comfortable wireless mouse with a long battery life.",
        price: 29.99,
        category: "Electronics",
        imageUrl: "https://example.com/images/wireless-mouse.jpg",
        inStock: true
    },
    {
        id: 2,
        name: "Bluetooth Headphones",
        description: "High-quality sound and noise cancellation features.",
        price: 89.99,
        category: "Electronics",
        imageUrl: "https://example.com/images/bluetooth-headphones.jpg",
        inStock: true
    },
    {
        id: 3,
        name: "Coffee Maker",
        description: "Brew the perfect cup of coffee every time.",
        price: 49.99,
        category: "Home Appliances",
        imageUrl: "https://example.com/images/coffee-maker.jpg",
        inStock: false
    },
    {
        id: 4,
        name: "Yoga Mat",
        description: "A non-slip yoga mat for all your exercise needs.",
        price: 19.99,
        category: "Fitness",
        imageUrl: "https://example.com/images/yoga-mat.jpg",
        inStock: true
    },
    {
        id: 5,
        name: "Smartwatch",
        description: "Track your fitness and stay connected on the go.",
        price: 149.99,
        category: "Electronics",
        imageUrl: "https://example.com/images/smartwatch.jpg",
        inStock: true
    }
]

 
  res.render('product', { data: products });
});

module.exports = router;
