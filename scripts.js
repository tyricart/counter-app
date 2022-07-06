const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0


function increase(){
    // count = count + 1 // is the original way
    count += 1 // this shorthand for the line before
    counterEl.innerHTML = count
}

function decrease(){
    // count = count - 1
    count -= 1
    counterEl.innerHTML = count
}


//all functions work but when I press '-' it resets as well. 
function reset(){
    // count = 0
    counterEl.innerHTML = 0 
}



function printTotal(){
    let countStr = count + ' - '
    totalCount.innerHTML += countStr
}