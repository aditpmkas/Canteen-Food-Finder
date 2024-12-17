const menu = [
    { name: "Siomay", price: 10000, type: "food", store: "Siomay President", stock: 20 },
    { name: "Kebab", price: 12000, type: "food", store: "Kebab PU", stock: 0 }, // Unavailable
    { name: "Nasi Padang", price: 15000, type: "food", store: "Warung Padang", stock: 10 },
    { name: "Mie Goreng", price: 13000, type: "food", store: "Kantin Normal", stock: 25 },
    { name: "French Fries", price: 8000, type: "food", store: "Snack President", stock: 30 },
    { name: "Burger", price: 15000, type: "food", store: "Moms Kitchen", stock: 18 },
    { name: "Pizza", price: 20000, type: "food", store: "Moms Kitchen", stock: 0 }, // Unavailable
    { name: "Donut", price: 5000, type: "food", store: "Snack President", stock: 50 },
    { name: "Cappuccino", price: 15000, type: "drink", store: "Moms Kitchen", stock: 40 },
    { name: "Iced Tea", price: 6000, type: "drink", store: "Ngemil Yu", stock: 0 }, // Unavailable
    { name: "Lemonade", price: 7000, type: "drink", store: "Ngemil Yu", stock: 50 },
    { name: "Soda", price: 5000, type: "drink", store: "Kantin Normal", stock: 70 },
    { name: "Milkshake", price: 15000, type: "drink", store: "Moms Kitchen", stock: 30 },
    { name: "Hot Chocolate", price: 12000, type: "drink", store: "Kantin Normal", stock: 20 },
    { name: "Smoothie", price: 15000, type: "drink", store: "Ngemil Yu", stock: 25 }
];

function findFood() {
    const budget = parseFloat(document.getElementById('budget').value);
    const foodList = document.getElementById('food-list');
    const drinkList = document.getElementById('drink-list');
    foodList.innerHTML = '';
    drinkList.innerHTML = '';

    if (isNaN(budget) || budget <= 0) {
        alert("Please enter a valid budget.");
        return;
    }

    // Filter available food and drinks based on the budget and stock greater than 0
    const availableFood = menu.filter(item => item.price <= budget && item.type === "food" && item.stock > 0);
    const availableDrinks = menu.filter(item => item.price <= budget && item.type === "drink" && item.stock > 0);

    if (availableFood.length > 0) {
        availableFood.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.store}</td><td>${item.price.toLocaleString()}</td>`;
            foodList.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">No food items available within your budget.</td>`;
        foodList.appendChild(row);
    }

    if (availableDrinks.length > 0) {
        availableDrinks.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.name}</td><td>${item.store}</td><td>${item.price.toLocaleString()}</td>`;
            drinkList.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">No drinks available within your budget.</td>`;
        drinkList.appendChild(row);
    }
}
