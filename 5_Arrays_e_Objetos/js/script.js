// 1 - Arrays e Objetos
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const itens = ["Matheus", true, 6, 1.5, []]

console.log(itens)
console.log(typeof itens)

// 2 - Mais sobre Arrays
const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0])
console.log(arr[1])
console.log(arr[3])
console.log(arr[8])

// 3 - Propriedades
const numbers = [1, 2, 3]

console.log(numbers.length)
console.log(numbers["length"])

const myName = "Matheus"

console.log(myName.length)

// 5 - Metodos 
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)
console.log(allNumbers.indexOf(2))

const text = "Algum texto"

console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(typeof text.toUpperCase())
console.log(text.indexOf("g"))

// 6 - Metodos
const person = {
    name: "Matheus",
    age: 32,
    job: "Programador"
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 7 - Criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
}

console.log(car)

car.door = 4

console.log(car)

delete car.km

console.log(car)

// 8 - Mais sobre objetos 
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2)

console.log(obj)

// 9 - Conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))  

// 10 - Mutação
const a = {
    name: "Matheus"
}

const b = a;

console.log(a)
console.log(b)

console.log(a === b);
console.log(a == b);

a.age = 31;

console.log(a)
console.log(b)

delete a.age 

console.log(a)
console.log(b)

// 11 - Loop em arrays
const users = ["Matheus", "Raul", "Miguel", "Artur", "Inocencio", "Romeu", "Armando", "Orlando"]

for(i = 0; i < users.length; i++) {
    console.log(`Imprimindo os usuario ${users[i]}`)
}

console.log(`Quero o usuario ${users[1]}`)