
// original, "buggy" code:

// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ]

// const cashInRegister = 100
// const nextOrderId = 1
// const orderQueue = []

// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj)
// }

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
//     cashInRegister += selectedPizza.price
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

// function completeOrder(orderId) {
//     const order = orderQueue.find(order => order.id === orderId)
//     order.status = "completed"
//     return order
// }

// addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
// addNewPizza({ name: "BBQ Chicken", cost: 12 })
// addNewPizza({ name: "Spicy Sausage", cost: 11 })

// placeOrder("Chicken Bacon Ranch")
// completeOrder("1")


const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    
    cashInRegister += selectedPizza.price;
    
    const newOrder = { pizza: selectedPizza, status: "ordered", orderId: nextOrderId};
    nextOrderId++;
    orderQueue.push(newOrder);
    
    return newOrder
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.orderId === orderId);
    order.status = "completed";
    return order;

    // const orderIndex = orderQueue.findIndex(order => order.orderId === orderId);
    // orderQueue[orderIndex].status = "completed";
    // return orderQueue[orderIndex]; 
    // You dont need this because objects are passed by reference    
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1);

placeOrder("BBQ Chicken");
// completeOrder(2);

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

