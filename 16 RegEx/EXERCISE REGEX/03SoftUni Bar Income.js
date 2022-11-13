function demo(input){

    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/
    let total = 0
    while(input[0] != "end of shift"){
        let line = input.shift()

        let match = pattern.exec(line)
        
        if(match != null){ // само тогава да върши работа
            let [_,name,product,qty,price] = match
            qty = Number(qty)
            price = Number(price)
            total += qty * price
            console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
        }
    }
    console.log("Total income: " + total.toFixed(2));
}
demo(["%George%<Croissant>|2|10.3$",
"%Peter%<Gum>|1|1.3$",
"%Maria%<Cola>|1|2.4$",
"end of shift"])
console.log("--------------");
demo(["%InvalidName%<Croissant>|2|10.3$",
"%Peter%<Gum>1.3$",
"%Maria%<Cola>|1|2.4",
"%Valid%<Valid>valid|10|valid20$",
"end of shift"])



// .*?       всеки един символ какъвто и да е - обаче спри щом видиш началото на следващото правило


// %([A-Z][a-z]*)%

// <(\w+)>

// \|\d+\|

// (\d+(?:\.\d+)*)\$