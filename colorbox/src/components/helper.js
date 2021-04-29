function choice(arr){
    let array = Math.floor(Math.random()* arr.length)
    return arr[array]
}


export {choice};