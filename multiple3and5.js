function solution(number) {
    let sum = 0;
    for (let i=1; i<=number; i++) {
        if(i%3 === 0 && i % 5 == 0) {
            document.writeln('FizzBuzz');
        }else if (i%3 === 0 && i % 5 != 0){
            document.writeln('Fizz');
        }else if (i%5 === 0 && i % 3 != 0){
            document.writeln('Buzz');
        }else {
            document.writeln(i);
        }
    }
    return sum;
}
angka = 15
solution(angka)