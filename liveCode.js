function Human(input) {
    
    lower = input.toLocaleLowerCase();
    split = lower.split('')
    pesanPerKata = split.map(x => split.reverse())
    console.log(pesanPerKata)
    reverse = split.reverse()
    join = reverse.join("");

    return join
}


var input = "I am A Great Human"
document.write(Human(input))