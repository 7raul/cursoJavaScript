// 1 - Criando funções
function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variavel")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Minha Função com parametro")
funcaoComParametro("Outra função")

const funcaoComVariavelEParametro = function(txt2) {
    console.log(`Imprimindo: ${txt2}`)
}

funcaoComVariavelEParametro("Função com variavel 1")
funcaoComVariavelEParametro("Função com variavel 2")

// 2 - Return 
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1,n2) {
    return n1 + n2
}

console.log(soma(a,b))

const resultado = soma(c,d)
console.log(resultado)

// 3 - Escopo da função
let y = 10

function variavelDaFuncao() {
    let y = 20
    console.log(`Imprimindo variavel da função: ${y}`)
}

variavelDaFuncao()

console.log(`Imprimindo variavel fora da função: ${y}`)

// 4 - Escopo Aninhado
let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30
        
        if(true) {
            let m = 40;

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()

console.log(m)

// 5 - Arrow function
const testArrow = () => {
    console.log("Testando Arrow function")
}

testArrow()

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }

    console.log("Impar")
}

parOuImpar(5)

parOuImpar(10)

// 6 - Mais sobre Arrow function
const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(10))

const helloWord = () => console.log("Hello Word")

helloWord()

// 7 - Parametros opcionais
const multiplication = function(m, n) {
    if(n === undefined){
        return m * 2
    }else{
        return m * n
    }
}

console.log(multiplication(5))
console.log(multiplication(4, 2))

const greeting = (name) => {
    if(!name){
        console.log("Olá!")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()

greeting("Matheus")

// 8 - Valor default
const customGreeting = (name, greet = "Olá") => {
    return (`${greet}, ${name}`)
}

console.log(customGreeting("Matheus"))

console.log(customGreeting("Matheus", "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText("Testando")

repeatText("Testando outra vez", 5)

// 9 - Closure 
function someFunction () {
    let txt = "Alguma coisa"

    function display () {
        console.log(txt)
    }

    display()
}

someFunction()

// 10 - Mais sobre Closure

const multiplicationFunction = (n) => {
    return (m) => {
        return m * n
    }
}

const c1 = multiplicationFunction(5)
const c2 = multiplicationFunction(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

// 11 - Recursão 
const untilTen = (n, m) => {
    if(n < 10){
        console.log("A função parou de executar!")
    }else{
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 5)

// 12 - Infinite recurtion
function run() {
    console.log("Executando...")
    run()
}
//run()

function factorial (x) {
    if(x === 0) {
        return 1
    }else{
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial de ${num} é ${result}`)