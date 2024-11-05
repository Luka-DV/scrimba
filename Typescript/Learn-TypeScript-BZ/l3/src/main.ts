
type Pizza = {
    id: number
    name: string
    price: number
}

type PizzaWithoutId = Omit<Pizza, "id">

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



// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     pizzaObj.id = nextPizzaId++;
//     menu.push(pizzaObj)
// }

// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     menu.push({...pizzaObj, id: nextOrderId++}); //creates a new obj
// }¸

//or:

function addNewPizza(pizzaObj: PizzaWithoutId): void {
    const newPizza: Pizza = {...pizzaObj, id: nextOrderId++};
    menu.push(newPizza);
}

//or: (but the former is preferred because it dosnt mutate the input object)

// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     const newPizza = Object.assign(pizzaObj, {id: nextOrderId}) // mutates the pizzaObj
//     menu.push(newPizza);
// }

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




type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type updatedUser = Partial<User>;

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: updatedUser) {
    const userToUpdate = users.find(userObj => userObj.id === id);
    if(!userToUpdate) {
        console.error("User not found");
        return
    }
    Object.assign(userToUpdate, updates);
    // Use Object.assign to update the found user in place. 
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)


// Add generics example:

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)

