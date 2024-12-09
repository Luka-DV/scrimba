
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


// type TestOne = {
//     name: string
//     age: number
//     sayHello(number: number): number
// }

interface TestOne {
    name: string;
    age: number;
    sayHello(name: string): object;
}

const test: TestOne = {
    name: "jake",
    age: 22,
    sayHello(name) {
        return {name};
    }
}


// classes , Web Ninja

class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){
        this.client = client
    }
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  invoices.push(invTwo);
  
  invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
  })



function getCount(str: string): number {
    const vowels: string[] = ["a", "e", "i", "o", "u"];
    
    let vowelCount: number = 0;
    
    for(let char of str) {
    if(vowels.includes(char)) {
        vowelCount++;
        }
    }
    
    return vowelCount;
}


// typehero Type Aliases (2)

type Name = string;
type Year = number;
type IsOperational = boolean;
type Kilograms = number;
type Count = number;

type Payload = {
  name: Name;
  mass: Kilograms;

};

interface Spacecraft {
    name: Name;
    yearBuilt: Year;
    crewCapacity: Count;
    launchDate: Date;
    isOperational: IsOperational;
    propulsionSystem: string[];
    payload: Payload[];
  }


const voyager1 = {
    name: "Voyager 1",
    yearBuilt: 1977,
    crewCapacity: 0,
    launchDate: new Date("1977 09 05"),
    isOperational: true,
    propulsionSystem: ["RTG (Radioisotope Thermoelectric Generator)"],
    payload: [
        { name: "Golden Record", mass: 0.3 },
        { name: "Instruments", mass: 721 },
    ],
} satisfies Spacecraft;



// typehero Literal Types (3)


// export const findOdd = (xs: number[]): number => {
//     const numberOccurrences: object = xs.reduce((acc, crr) => {
//       acc[crr] = (acc[crr] ?? 0) + 1;
//       return acc
//     }, {})
    
//     for(let number in numberOccurrences) {
//       if(numberOccurrences[number] % 2 === 1) {
//         return +number;
//       }
//     }
//   };

// function findOdd(xs: number[]): number {
//     const numberOccurrences: Record<number, number> = xs.reduce((acc, crr) => {
//         acc[crr] = (acc[crr] ?? 0) + 1;
//         return acc;
//       }, {} as Record<number, number>);
      
    
//     for(let number in numberOccurrences) {
//       if(numberOccurrences[number] % 2 === 1) {
//         return +number;
//       }
//     }

//     throw new Error("No odd occurrence found.");
//   };
  

/* type reduceObj = Record<number, number>;

function findOdd(xs: number[]): number {
    const numberOccurrences: reduceObj = xs.reduce((acc, crr) => {
        acc[crr] = (acc[crr] ?? 0) + 1;
        return acc;
      }, {} as reduceObj)
      
    
    for(let number in numberOccurrences) {
      if(numberOccurrences[number] % 2 === 1) {
        return +number;
      }
    }

    throw new Error("No odd occurrence found.");
  }; */


  function findOdd(xs: number[]): number {
    const numberOccurrences = xs.reduce<Record<number, number>>((acc, crr) => {
        acc[crr] = (acc[crr] ?? 0) + 1;
        return acc;
      }, {});
      
    
    for(let number in numberOccurrences) {
      if(numberOccurrences[number] % 2 === 1) {
        return +number;
      }
    }

    throw new Error("No odd occurrence found.");
  };

  

  const findOdd2 = (xs: number[]): number => {

    const occurrenceOfNumbers = new Map<number, number>();

    for(let number of xs) {
            occurrenceOfNumbers.set(number, (occurrenceOfNumbers.get(number) ?? 0) + 1);
    }

    for(let [number, occurrence] of occurrenceOfNumbers) {
        if(occurrence % 2 === 1) {
            return number;
        }
    }

    throw new Error("No odd occurence found.")
  }
