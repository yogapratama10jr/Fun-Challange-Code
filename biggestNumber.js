function maxRedigit(num) {
    let arr = num.toString().split("");
    let sorting = arr.sort(function(a,b){ 
        return b-a
    })
    if (sorting.some(item => item == 0 || item == '-' || checkIfDuplicateExists(sorting))) {
        return null
        } else {
            let results = sorting.join("")
        return results
    }
}

function checkIfDuplicateExists(arr) {
    return new Set(arr).size !== arr.length
}

number = -1
document.write(`maxRedigit (${number}) => `)
document.write(maxRedigit(number))




