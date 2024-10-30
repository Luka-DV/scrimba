// let myName: string = "Bob";
// let myNumber: number = 36;
// let bool: boolean = true;

// type Pizza = {
//     name: string
//     price: number
// }

// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ]

// let cashInRegister = 100
// let nextOrderId = 1
// const orderQueue = []

// /**
//  * Challenge: teach TS that the pizzaObj is supposed to be a Pizza type.
//  * Then like before, look through the code to see if there are any new
//  * TS warnings to deal with (😉), and fix those issues
//  */

// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj)
// }

// function placeOrder(pizzaName: string) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`)
//         return
//     }
//     cashInRegister += selectedPizza.price
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

// function completeOrder(orderId: number) {
//     const order = orderQueue.find(order => order.id === orderId)
//     order.status = "completed"
//     return order
// }

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", price: 12 })
// addNewPizza({ name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)


// type Address = {
//     street: string
//     city: string
//     country: string
// }

// type Person = {
//     name: string
//     age: number
//     isStudent: boolean
//     address: Address
// }

// let person1: Person = {
//     name: "Joe",
//     age: 42,
//     isStudent: true,
//     address: {
//         street: "123 Main",
//         city: "Anytown",
//         country: "USA"
//     }
// }

// let person2: Person = {
//     name: "Jill",
//     age: 66,
//     isStudent: false,
//     address: {
//         street: "123 Main",
//         city: "Anytown",
//         country: "USA"
//     }
// }


type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people: Person[] = [person1, person2];

// this can also be typed as let people: Array<Person> = [person1, person2] 
// using generics



// menu app

// type Pizza = {
//     name: string
//     price: number
// }

// type Order = {
//     id: number
//     pizza: Pizza
//     status: string
// }

// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ]

// let cashInRegister = 100
// let nextOrderId = 1
// const orderQueue: Order[] = []

// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj)
// }

// function placeOrder(pizzaName: string) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`)
//         return
//     }
//     cashInRegister += selectedPizza.price
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

// function completeOrder(orderId: number) {
//     const order = orderQueue.find(order => order.id === orderId)
//     if(!order) {
//         console.error(`The order with the id of ${orderId} does not exist`);
//         return
//     // or, better: throw new Error(`The order with the id of ${orderId} does not exist`)
//     }
//     order.status = "completed"
//     return order
// }

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", price: 12 })
// addNewPizza({ name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)

type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: string
    additionalToppings?: string[];
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = []
let newToppings: string[] = [];

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function addNewToppings(...toppings: string[]) {
    newToppings = toppings;
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    
    if(newToppings.length) {
        newOrder.additionalToppings = newToppings;
    }

    //or with a conditional spread syntax:

    /* const newOrder: Order = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered",
        ...(newToppings.length && { additionalToppings: newToppings })
      }; */

    orderQueue.push(newOrder)
    // Reset toppings after placing the order
    newToppings = [];
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

addNewToppings("Paprika", "Onions", "Garlic")
placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)
console.log("Topping:", newToppings);