let hello 
hello = 'Hello world!';
const hello3 = 'Hello world 3!'
var hello2 = 'Hello world 2!'
// console.log(hello)
// console.log(hello2)
// console.log(hello3)

// let stringVar = 'Some string'
// console.log(typeof stringVar)

// let numberVar = 2134.3435
// console.log(typeof numberVar)

// let booleanVar = true /* false */
// console.log(typeof booleanVar)

// let undefinedVar // = undefined
// console.log(typeof undefinedVar)

// let nullVar = null
// console.log(typeof nullVar)

let objectVar = {
    key1: 'Value 1',
    key2: 'Value 2'
}
console.log(typeof objectVar);
console.log(objectVar.key1)

function helloFunction(congrat) {
    return congrat + ' from function'
}

// console.log(helloFunction('Hello'))
// console.log(typeof helloFunction)
// console.log(typeof helloFunction('Hello'))

function helloUser(congrat, name) {
    return congrat + ', ' + name
}
console.log(helloUser('Hello', 'John'))
console.log(helloUser('Hello', 'Jane'))
console.log(helloUser('Привет'))

let header123 = document.getElementById('header')
header123.textContent = hello3
header123.textContent = 'Main header'

// while (true) {
//     alert('Hello world!')
// }

function testFunc(arg1, arg2, arg3) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}

testFunc(1, 2,)

let testFunc2 = function(arg1, arg2, arg3) {
    console.log(arg1)
    console.log(arg2)
    console.log(arg3)
}

testFunc2(1, 2, 3)
testFunc2(20, 30.7, 500)
// console.log(testFunc2(1, 2, 3))

function fullName(arg1, arg2) {
   return arg1 + ' ' + arg2
}

console.log(fullName('Вася', 'Иванов'))

let num = 0
let clickBtn = document.getElementById('click')
clickBtn.onclick = function() {
    // num = num + 1
    // num++
    num += 10
    console.log('click num: ' + num);
}

// let surInput = document.getElementById('surname')
// let nameInput = document.getElementById('name')
// clickBtn.onclick = function() {
//     let username = nameInput.value
//     let userSurName = surInput.value
//     console.log('Hello, ' + username + ' ' + userSurName)
// }

// let surInput = document.getElementById('surname')
// let nameInput = document.getElementById('name')
// let header2 = document.getElementById('header2')
// clickBtn.onclick = function() {
//     let username = nameInput.value 
//     header2.textContent = username.toUpperCase()
// }

// let num2 = document.getElementById('num2')
// let num3 = 0
// clickBtn.onclick = function() {
//     num3++
//     num2.textContent = num3
// }

// let header2 = document.createElement('h2')
// let surInput = document.getElementById('surname')
// let nameInput = document.getElementById('name')
// clickBtn.parentElement.append(header2)

// clickBtn.onclick = function() {
//     let username = nameInput.value 
//     header2.textContent = username.toUpperCase()

// }

let header2 = document.createElement('h2')
let surInput = document.getElementById('surname')
let nameInput = document.getElementById('name')
clickBtn.parentElement.append(header2)

clickBtn.onclick = function() {
    let username = nameInput.value 
    header2.textContent = username.toUpperCase()

}

let div = document.createElement('div')
let input = document.createElement('input')
let button = document.createElement('button')
let section = document.getElementById('section1')

    section.append(div)
    div.append(button)
    div.append(input)
button.textContent = 'Click me'
input.type = 'text'
input.style.marginRight = '20px'
input.style.borderStyle = 'solid'
input.style.borderWidth = '5px'
div.className = 'form'
