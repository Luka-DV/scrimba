"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potion = void 0;
var nextPizzaId = 1;
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     pizzaObj.id = nextPizzaId++;
//     menu.push(pizzaObj)
// }
// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     menu.push({...pizzaObj, id: nextOrderId++}); //creates a new obj
// }¸
//or:
function addNewPizza(pizzaObj) {
    var newPizza = __assign(__assign({}, pizzaObj), { id: nextOrderId++ });
    menu.push(newPizza);
}
//or: (but the former is preferred because it dosnt mutate the input object)
// function addNewPizza(pizzaObj: PizzaWithoutId): void {
//     const newPizza = Object.assign(pizzaObj, {id: nextOrderId}) // mutates the pizzaObj
//     menu.push(newPizza);
// }
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the orderQueue"));
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    var pizzaDetail = menu.find(function (pizzaObj) { return typeof identifier === "string" ?
        pizzaObj.name.toLowerCase() === identifier.toLowerCase() :
        pizzaObj.id === identifier; });
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
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
/* placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Anchovy")
placeOrder("Veggie")
completeOrder(2)
 */
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
var users = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];
function updateUser(id, updates) {
    var userToUpdate = users.find(function (userObj) { return userObj.id === id; });
    if (!userToUpdate) {
        console.error("User not found");
        return;
    }
    Object.assign(userToUpdate, updates);
    // Use Object.assign to update the found user in place. 
}
// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users);
// Add generics example:
function addToArray(array, item) {
    array.push(item);
    return array;
}
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" });
console.log(menu);
console.log(orderQueue);
var test = {
    name: "jake",
    age: 22,
    sayHello: function (name) {
        return { name: name };
    }
};
// classes , Web Ninja
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.client = client;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
function getCount(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var vowelCount = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
var voyager1 = {
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
};
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
function findOdd(xs) {
    var numberOccurrences = xs.reduce(function (acc, crr) {
        var _a;
        acc[crr] = ((_a = acc[crr]) !== null && _a !== void 0 ? _a : 0) + 1;
        return acc;
    }, {});
    for (var number in numberOccurrences) {
        if (numberOccurrences[number] % 2 === 1) {
            return +number;
        }
    }
    throw new Error("No odd occurrence found.");
}
;
var findOdd2 = function (xs) {
    var _a;
    var occurrenceOfNumbers = new Map();
    for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
        var number = xs_1[_i];
        occurrenceOfNumbers.set(number, ((_a = occurrenceOfNumbers.get(number)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    for (var _b = 0, occurrenceOfNumbers_1 = occurrenceOfNumbers; _b < occurrenceOfNumbers_1.length; _b++) {
        var _c = occurrenceOfNumbers_1[_b], number = _c[0], occurrence = _c[1];
        if (occurrence % 2 === 1) {
            return number;
        }
    }
    throw new Error("No odd occurence found.");
};
// 6 kyu Pyramid Array
function pyramid(n) {
    if (n > 0) {
        var pyramidArray = [];
        for (var i = 1; i <= n; i++) {
            var subArray = new Array(i).fill(1);
            pyramidArray.push(subArray);
        }
        return pyramidArray;
    }
    return [];
}
// or:
// function pyramid(n: number) {
//   return Array.from({length: n}, (_, i) => Array(i + 1).fill(1) )
// }
console.log(pyramid(5));
// 6 kyu Does my number look big in this?
function narcissistic(value) {
    var arrayOfDigits = "".concat(value).split("");
    var sumOfDigitsRaised = arrayOfDigits.reduce(function (acc, crr) {
        acc += Math.pow((+crr), arrayOfDigits.length);
        return acc;
    }, 0);
    return sumOfDigitsRaised === value;
}
// 8 kyu How many stairs will Suzuki climb in 20 years?
function stairsIn20(stairs) {
    var stairsInOneYear = stairs.reduce(function (acc, crr) {
        var crrSum = crr.reduce(function (accSub, crrSub) { return accSub + crrSub; }, 0);
        acc += crrSum;
        return acc;
    }, 0);
    return stairsInOneYear * 20;
}
// 6 kyu Playing with digits
var digPow = function (n, p) {
    var sumOfRaisedDigits = "".concat(n).split("")
        .reduce(function (acc, crr, ind) {
        acc += Math.pow(Number(crr), (p + ind));
        return acc;
    }, 0);
    return sumOfRaisedDigits % n === 0 ? sumOfRaisedDigits / n : -1;
};
// 6 kyu Potion Class 101
/*
Based on your programming background you managed to figure that after mixing two potions colors will mix as if mix two RGB colors. For example, if you'll mix potion that have color [255, 255, 0] and volume 10 with one that have color [0, 254, 0] and volume 5, you'll get new potion with color [170, 255, 0] and volume 15. So you decided to create a class Potion that will have two properties: color (a list (a tuple in Python) with 3 integers) and volume (a number), and one method mix that will accept another Potion and return a mixed Potion.
Example

felix_felicis       =  Potion([255, 255, 255],  7)
shrinking_solution  =  Potion([ 51, 102,  51], 12)
new_potion          =  felix_felicis.mix(shrinking_solution)

new_potion.color   ==  [127, 159, 127]
new_potion.volume  ==  19

Note: Use ceiling when calculating the resulting potion's color. */
// export class Potion {
//   constructor( public color: number[], public volume: number) {
//     this.color = color;
//     this.volume = volume;
//   }
//   mix(otherPotion: Potion) {
//     const newMixedColor = this.color.map((value, ind) => Math.ceil((value + otherPotion.color[ind]) / 2));
//     const newVolume = this.volume + otherPotion.volume; 
//     return new Potion(newMixedColor, newVolume);
//   }
// }
var Potion = /** @class */ (function () {
    function Potion(color, volume) {
        this.color = color;
        this.volume = volume;
        this.color = color;
        this.volume = volume;
    }
    Potion.prototype.mix = function (otherPotion) {
        var _this = this;
        var otherColorValue = otherPotion.color, otherVolume = otherPotion.volume;
        var newVolume = this.volume + otherVolume;
        var newMixedColor = this.color.map(function (colorValue, ind) { return Math.ceil((colorValue * _this.volume + otherColorValue[ind] * otherVolume) / newVolume); });
        return new Potion(newMixedColor, newVolume);
    };
    return Potion;
}());
exports.Potion = Potion;
