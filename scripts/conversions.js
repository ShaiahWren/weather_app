

function kToF(kelvin){
    const tempFaren = (((kelvin - 273.15) * 1.8) + 32);
    return tempFaren.toFixed(1);
}


function kToC(kelvin){
    const tempCel = (kelvin - 273.15);
    return tempCel.toFixed(1);
}

console.log(kToC(300));


