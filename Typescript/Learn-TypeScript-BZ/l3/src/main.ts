
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let nextPizzaId = 1
let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]


function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}


function getPizzaDetail(identifier: string | number): Pizza | undefined {
    
    const pizzaDetail = menu.find( pizzaObj => typeof identifier === "string" ?
        pizzaObj.name.toLowerCase() === identifier.toLowerCase() : 
        pizzaObj.id === identifier);
    
    return pizzaDetail;
    /**
     * Challenge: 
     write the code to check if the parameter is a string
     * or a number, and use the menu.find() method accordingly
     */


    //its good to be explicit whenever you can, if someone is using the js file:

    //  function getPizzaDetail(identifier: string | number) {
    //     if (typeof identifier === "string") {
    //         return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    //     } else if (typeof identifier === "number") {
    //         return menu.find(pizza => pizza.id === identifier)
    //     } else {
    //         throw new TypeError("Parameter `identifier` must be either a string or a number")
    //     }
    // }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

/* placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
completeOrder(2)
 */
console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)