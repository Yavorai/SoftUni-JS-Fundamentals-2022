function solve(input) {
    let arrGift = input
    let giftList = arrGift.shift().split(" ")
    let command = arrGift.shift().split(" ")
     
    while(command[0] !== "No" && command[1] !== "Money"){
        for(let i = 0; i < giftList.length; i++){
            
            if(command[0] == "OutOfStock" && command[1] == giftList[i]){
                giftList[i] = "None"
            }
        }

        if(command[0] == "Required"){
            if(0 <= command[2] && command[2] < giftList.length){
                giftList[command[2]] = command[1]
            }
        }
        if(command[0] == "JustInCase"){
            giftList.pop()
            giftList.push(command[1])
        }
        command = arrGift.shift().split(" ")
    }
    let newArrGift = []
    console.log(giftList.join(" "));
    for(let j of giftList) {

        if(j !== "None"){
            newArrGift.push(j)
        }
    }

    console.log(newArrGift.join(" "));
    
}
solve(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
 'Required Paper 8',
 'OutOfStock Clothes',
'Required Chocolate 2',
  'JustInCase Hat',
  'OutOfStock Cable',
  'No Money'
  ]);
console.log("-----------------------------------------")
solve(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
])
