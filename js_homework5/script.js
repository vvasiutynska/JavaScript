var person = {
    name: "Veronika",
    age: 26,
    city: "Odesa",
    getInfo: function() {
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ": " + this[key]);
            }
        }
    }
};

person.getInfo();
person.gender = "Female";
person.getInfo();


var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        var totalPrice = 0;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                var price = parseFloat(this[service].replace(' грн', ''));
                totalPrice += price;
            }
        }
        return totalPrice + ' грн';
    },
    minPrice: function() {
        var minPrice = Infinity;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                var price = parseFloat(this[service].replace(' грн', ''));
                if (price < minPrice) {
                    minPrice = price;
                }
            }
        }
        return minPrice + ' грн';
    },
    maxPrice: function() {
        var maxPrice = -Infinity;
        for (var service in this) {
            if (typeof this[service] === 'string') {
                var price = parseFloat(this[service].replace(' грн', ''));
                if (price > maxPrice) {
                    maxPrice = price;
                }
            }
        }
        return maxPrice + ' грн';
    }
};

services['Розбити скло'] = "200 грн";

console.log('Загальна вартість послуг: ' + services.price());
console.log('Мінімальна вартість послуг: ' + services.minPrice());
console.log('Максимальна вартість послуг: ' + services.maxPrice());

