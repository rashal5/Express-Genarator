var express = require('express');
var router = express.Router();



const products = [
  {
      id: 1,
      name: "Wireless Mouse",
      description: "A comfortable wireless mouse with a long battery life.",
      price: 29.99,
      quanity: 0,
      category: "Electronics",
      imageUrl: "https://example.com/images/wireless-mouse.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Bluetooth Headphones",
      description: "High-quality sound and noise cancellation features.",
      price: 89.99,
      quanity: 45,
      category: "Electronics",
      imageUrl: "https://example.com/images/bluetooth-headphones.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "Coffee Maker",
      description: "Brew the perfect cup of coffee every time.",
      price: 49.99,
      quanity: 4,
      category: "Home Appliances",
      imageUrl: "https://example.com/images/coffee-maker.jpg",
      inStock: false
  },
  {
      id: 4,
      name: "Yoga Mat",
      description: "A non-slip yoga mat for all your exercise needs.",
      price: 19.99,
      quanity: 4,
      category: "Fitness",
      imageUrl: "https://example.com/images/yoga-mat.jpg",
      inStock: true
  },
  {
      id: 5,
      name: "Smartwatch",
      description: "Track your fitness and stay connected on the go.",
      price: 149.99,
      quanity: 4,
      category: "Electronics",
      imageUrl: "https://example.com/images/smartwatch.jpg",
      inStock: true
  }
]
const foodProducts = [
  {
      id: 1,
      name: "Organic Apples",
      description: "Crisp and fresh organic apples, perfect for a healthy snack.",
      price: 3.99,
      quantity: 50,
      category: "food",
      imageUrl: "https://example.com/images/organic-apples.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Whole Wheat Bread",
      description: "Soft and nutritious whole wheat bread, freshly baked.",
      price: 2.49,
      quantity: 30,
      category: "food",
      imageUrl: "https://example.com/images/whole-wheat-bread.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "Greek Yogurt",
      description: "Rich and creamy Greek yogurt, a great source of protein.",
      price: 5.99,
      quantity: 10,
      category: "food",
      imageUrl: "https://example.com/images/greek-yogurt.jpg",
      inStock: true
  },
  {
      id: 4,
      name: "Free-Range Eggs",
      description: "Fresh free-range eggs, perfect for your breakfast.",
      price: 4.49,
      quantity: 0,
      category: "food",
      imageUrl: "https://example.com/images/free-range-eggs.jpg",
      inStock: false
  },
  {
      id: 5,
      name: "Almond Butter",
      description: "Smooth and creamy almond butter, made from roasted almonds.",
      price: 7.99,
      quantity: 20,
      category: "food",
      imageUrl: "https://example.com/images/almond-butter.jpg",
      inStock: true
  }
];
const laptopProducts = [
  {
      id: 1,
      name: "MacBook Air",
      description: "Apple's ultra-thin and lightweight laptop with M1 chip.",
      price: 999.99,
      quantity: 15,
      category: "Laptops",
      imageUrl: "https://example.com/images/macbook-air.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Dell XPS 13",
      description: "Compact and powerful laptop with an InfinityEdge display.",
      price: 1199.99,
      quantity: 10,
      category: "Laptops",
      imageUrl: "https://example.com/images/dell-xps-13.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "HP Spectre x360",
      description: "A convertible laptop with a 360-degree hinge and OLED display.",
      price: 1299.99,
      quantity: 5,
      category: "Laptops",
      imageUrl: "https://example.com/images/hp-spectre-x360.jpg",
      inStock: true
  },
  {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      description: "A durable and lightweight business laptop with exceptional performance.",
      price: 1399.99,
      quantity: 0,
      category: "Laptops",
      imageUrl: "https://example.com/images/lenovo-thinkpad-x1-carbon.jpg",
      inStock: false
  },
  {
      id: 5,
      name: "Asus ROG Zephyrus G14",
      description: "A high-performance gaming laptop with an AMD Ryzen processor.",
      price: 1499.99,
      quantity: 8,
      category: "Laptops",
      imageUrl: "https://example.com/images/asus-rog-zephyrus-g14.jpg",
      inStock: true
  }
];
const watchProducts = [
  {
      id: 1,
      name: "Apple Watch Series 7",
      description: "Apple's latest smartwatch with advanced health tracking and a larger display.",
      price: 399.99,
      quantity: 20,
      category: "Smartwatches",
      imageUrl: "https://example.com/images/apple-watch-series-7.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Samsung Galaxy Watch 4",
      description: "A powerful smartwatch with health monitoring and seamless integration with Galaxy devices.",
      price: 299.99,
      quantity: 12,
      category: "Smartwatches",
      imageUrl: "https://example.com/images/samsung-galaxy-watch-4.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "Garmin Forerunner 945",
      description: "A premium GPS running and triathlon smartwatch with advanced performance metrics.",
      price: 499.99,
      quantity: 7,
      category: "Smartwatches",
      imageUrl: "https://example.com/images/garmin-forerunner-945.jpg",
      inStock: true
  },
  {
      id: 4,
      name: "Fitbit Charge 5",
      description: "A health and fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking.",
      price: 179.99,
      quantity: 0,
      category: "Fitness Trackers",
      imageUrl: "https://example.com/images/fitbit-charge-5.jpg",
      inStock: false
  },
  {
      id: 5,
      name: "Fossil Gen 6",
      description: "A stylish smartwatch with Wear OS, built-in GPS, and fitness tracking.",
      price: 299.99,
      quantity: 10,
      category: "Smartwatches",
      imageUrl: "https://example.com/images/fossil-gen-6.jpg",
      inStock: true
  }
];
 const shoeProducts = [
  {
      id: 1,
      name: "Nike Air Max 270",
      description: "A comfortable and stylish sneaker with a large Air Max unit for cushioning.",
      price: 150.00,
      quantity: 25,
      category: "shoes",
      imageUrl: "https://example.com/images/nike-air-max-270.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Adidas Ultraboost 21",
      description: "A high-performance running shoe with responsive cushioning and a snug fit.",
      price: 180.00,
      quantity: 18,
      category: "shoes",
      imageUrl: "https://example.com/images/adidas-ultraboost-21.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "Converse Chuck Taylor All Star",
      description: "A classic and versatile sneaker that has stood the test of time.",
      price: 60.00,
      quantity: 30,
      category: "shoes",
      imageUrl: "https://example.com/images/converse-chuck-taylor.jpg",
      inStock: true
  },
  {
      id: 4,
      name: "New Balance 990v5",
      description: "A premium running shoe with a perfect blend of cushioning and stability.",
      price: 175.00,
      quantity: 0,
      category: "shoes",
      imageUrl: "https://example.com/images/new-balance-990v5.jpg",
      inStock: false
  },
  {
      id: 5,
      name: "Vans Old Skool",
      description: "A durable and comfortable skate shoe with the iconic Vans side stripe.",
      price: 70.00,
      quantity: 22,
      category: "shoes",
      imageUrl: "https://example.com/images/vans-old-skool.jpg",
      inStock: true
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ajmal' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/pro', function(req, res, next) {
  res.render('pro');
});

router.get('/product', function(req, res, next) {
var newdata =  products
for(var i=0;i<newdata.length;i++){
 if(newdata[i].quanity==0){
  newdata[i].quanity= 'not available'
 }
}
res.render('product', { data: newdata });
});


router.get('/productinfo/:id', function(req, res, next) {
const b = req.params.id
const newdata = products.filter((x)=>(x.id==parseInt(b)))
let pro = newdata[0]
  res.render('productinfo', { data: pro });
});

//data viwers

router.get('/food', function(req, res, next) {
  var newdata =  foodProducts
  for(var i=0;i<newdata.length;i++){
   if(newdata[i].quanity==0){
    newdata[i].quanity= 'not available'
   }
  }
  res.render('product', { data: newdata });
  });
  

  router.get('/food', function(req, res, next) {
    var newdata =  foodProducts
    for(var i=0;i<newdata.length;i++){
     if(newdata[i].quanity==0){
      newdata[i].quanity= 'not available'
     }
    }
    res.render('product', { data: newdata });
    });
  
  router.get('/Smartwatches', function(req, res, next) {
      var newdata =  watchProducts
      for(var i=0;i<newdata.length;i++){
       if(newdata[i].quanity==0){
        newdata[i].quanity= 'not available'
       }
      }
      res.render('product', { data: newdata });
      });

  router.get('/shoes', function(req, res, next) {
        var newdata =  shoeProducts
        for(var i=0;i<newdata.length;i++){
         if(newdata[i].quanity==0){
          newdata[i].quanity= 'not available'
         }
        }
        res.render('product', { data: newdata });
        });
      
  router.get('/Laptops', function(req, res, next) {
          var newdata =  laptopProducts
          for(var i=0;i<newdata.length;i++){
           if(newdata[i].quanity==0){
            newdata[i].quanity= 'not available'
           }
          }
          res.render('product', { data: newdata });
          });

    // calling diff idss
  router.get('/productLaptops/:id', function(req, res, next) {
            const c = req.params.id
            const newdat = laptopProducts.filter((x)=>(x.id==parseInt(c)))
            let prow = newdat[0]
              res.render('productinfo', { data: prow });
            });
  router.get('/foodproductinfo/:id', function(req, res, next) {
              const c = req.params.id
              const newdat = foodProducts.filter((x)=>(x.id==parseInt(c)))
              let prow = newdat[0]
                res.render('productinfo', { data: prow });
              });
  router.get('/Smartwatchesproductinfo/:id', function(req, res, next) {
                const c = req.params.id
                const newdat = watchProducts.filter((x)=>(x.id==parseInt(c)))
                let prow = newdat[0]
                  res.render('productinfo', { data: prow });
                });
  router.get('/shoesproductinfo/:id', function(req, res, next) {
                  const c = req.params.id
                  const newdat = shoeProducts.filter((x)=>(x.id==parseInt(c)))
                  let prow = newdat[0]
                    res.render('productinfo', { data: prow });
                  });

module.exports = router;


