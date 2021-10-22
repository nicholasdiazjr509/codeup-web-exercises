var pattern = /[^0-9\.]/g;
var price = document.querySelectorAll('.product-slab__price');

price.forEach(function(el){
    if (el.querySelector('.product-price__discount') !== null) {
        var wasPrice = parseFloat(el.querySelector('.product-price__was').textContent.replace(pattern, "")) / 100;
        var newPrice = parseFloat(el.querySelector('.product-price__discount').textContent.replace(pattern, "")) / 100;

        var discount = 100 - (newPrice / wasPrice) * 100;
        el.querySelector('.discountPercentage').innerHTML = discount.toFixed(0) + "&#37";
    }
});

