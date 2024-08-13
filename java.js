// let myName = prompt('Whats your name?') 
// let age = +prompt('How old are you?')
// let city = prompt('Where do you live?')
// alert('Привет, ' + myName + '. Тебе ' +  age  + ' лет. ' + 'Ты живешь в ' + city + 'е.')

// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')
// if (num1 > num2) {
//     alert('Первое число больше второго числа')
// } else if (num2 > num1) {
//     alert('Второе число больше первого числа')
// } else if (num1 == num2) {
//     alert('Они равны')
// }


// let number = Math.floor(Math.random() * 53)
// let guess = +prompt('Угадай число от 1 до 10')
// if (guess == number) {
//     alert('Поздравляю ты угадал!')
// } else if (guess == 52) {
//     alert('52 - Санкт-Петербург')
// }  else {
//     alert('Не угадал! Попробуй ещё')
// }

// let number = +prompt("Введите число")
// if (number % 2 == 0) {
//     alert('это число четное')
// } else {
//     alert('это число нечетное')
// }
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число')
// let multiply = (a, b) => {
//     alert(a * b);
// }
// multiply(a, b)

// let user = {
//     name: prompt('Как тебя зовут?'),
//     age: prompt('Сколько тебе лет?'),
// }
// console.log(user);
// user.height = prompt('Какой у тебя рост?')


// let list = []

// for(let i = 1; i < 3; i++) {
//     let product = prompt("Введите продукт")
//     list.push(product)
// }
// console.log(list);

// for(let i = 1; i < 11; i++) {
//     console.log(i);
    
// }

let num1 = +prompt('Введите первое число')
let num2 = +prompt('Введите второе число')
let num3 = +prompt('Введите третье число')

let max = num1
if (num2 > max) {
    max = num2
} 
if (num3 > max) {
    max = num3
    
} 

alert('Максимальное число ' + max)
