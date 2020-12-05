const HW = require('./hw.json');

//All topping types
const toppingTypes = ()=>{
    let topping_types =[];
    for(let i=0;i<3;i++){
        for(let j=0;j<HW[i]["topping"].length;j++){
            topping_types.push(HW[i]["topping"][j]["type"]);
        }   
    }
    return topping_types;
}
//print all toppng types
console.log("All topping types :  "+ toppingTypes());


//All batter types
function batterTypes(){
    let batter_types =[];
    for(let i=0;i<3;i++){
        for(let j=0;j<HW[i]["batters"]["batter"].length;j++){
            batter_types.push(HW[i]["batters"]["batter"][j]["type"]);
        }
    }
    return batter_types;   
}
//print all toppng types
console.log("All batter types :  ");
const  BATTER_TYPES = batterTypes();
for(let i=0;i<BATTER_TYPES.length;i++){
    console.log(BATTER_TYPES[i]);
}


//Ppu average 
function average(){
    let sum = 0 ;
    for(let i=0;i<HW.length;i++){
        sum +=HW[i]["ppu"];
    }
    return sum/HW.length;
} 
console.log("Ppu average :" +average());

// ppu sum
function sum(){
    let sum = 0 ;
    for(let i=0;i<HW.length;i++){
        sum +=HW[i]["ppu"];
    }
    return sum;
} 
console.log("ppu sum = "+ sum());


//List of all mentioned IDs regardless to the type
function ids(){
    let ids_list =[];
    //let topping_ids =[];
    //let batter_ids =[];
    for(let i=0;i<HW.length;i++){
        ids_list.push(HW[i]["id"]);
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<HW[i]["topping"].length;j++){
            ids_list.push(HW[i]["topping"][j]["id"]);
        }   
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<HW[i]["batters"]["batter"].length;j++){
            ids_list.push(HW[i]["batters"]["batter"][j]["id"]);
        }
    }
    return ids_list;
}
console.log("all ids : " + ids());