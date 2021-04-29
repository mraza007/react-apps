function rand(arr){
    let random = Math.floor(Math.random() * arr.length);
    return arr[random]
}

export { rand }