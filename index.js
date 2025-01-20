function receivesAFunction(greenFn){
    greenFn()
}


function returnsANamedFunction(){
    return function circusMoves(){
        console.log("Swinging from Rope")
    }
}

function returnsAnAnonymousFunction(){
    return function (){}
}
