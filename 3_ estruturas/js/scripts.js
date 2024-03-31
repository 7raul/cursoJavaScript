// 1 - Variaveis
let name = "Matheus"
console.log(name)
console.log("Matheus")

name = "Matheus Battisti"
console.log(name)

const idade = 32;
console.log(idade)

console.log(typeof name)
console.log(typeof idade)

// 2 - Mais sobre variaveis~
let a = 1, 
b = 2, 
c = 3

console.log(a, b, c)

const nomecompleto = "Matheus Battist"
const nomeCompleto = "João da Silva"

console.log(nomecompleto)
console.log(nomeCompleto)

let _teste = "Ok"
let $teste = "Ok"

console.log(_teste, $teste)

// 3 - Prompt
//const age = prompt("Digite sua idade: ")
//console.log(`Você tem ${age} anos de idade`)

// 4 - Alert 
//alert("Testando")

//const z = 10
//console.log(`O numero é ${z}`) 

// 5 - Object Math~
console.log(Math.max(5, 1, 2, 3))
console.log(Math.floor(5.14))
console.log(Math.ceil(5.14))

// 6 - Console
console.log("Teste!")
console.error("Error!")
console.warn("Aviso!")

// 7 - if
const m = 10;

if(m > 5){
    console.log("M é maior que 5")
}

const user = "João"

if(user === "João"){
    console.log("Olá João!")
}

if(user === "Maria"){
    console.log("Olá Maria!")
}

console.log(user === "João", user === "Maria")

// 8 - Else 
const logged = false 

if(logged) {
    console.log("Números autenticados!")
}else{
    console.log("Não está autenticado")
}

const q = 10
const w = 15

if(q > 5 && w < 10){
    console.log("Números mais altos!")
}else{
    console.log("Os nuúmeros não são mais altos!")
}

// 8 - Else if
if(1 > 2) {
    console.log("Teste")
}else if(2 > 3){
    console.log("Teste 2")
}else if(5 > 1){
    console.log("Agora sim!")
}

const userName = "Matheus"
const userAge = 31

if(userName === "José"){
    console.log("Bem vindo José")
}else if(userName === "Matheus" && userAge === 31){
    console.log("Olá Matheus, você tem 31 anos!")
}else{
    console.log("Nenhuma condição aceite!")
}

// 9 - While
let p = 0;

while (p < 5) {
    console.log(`Repetindo o ${p}`)
    p++
}

// Loop infinito
let x = 10

while(x > 10){
    //console.log(`Imprimindo ${x}`)
}

// 10 - Do While
let o = 10;

do{
    console.log(`O valor de o: ${o}`)
    o--
}while(o > 0)

// 11 - For
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...")
}

let r = 10;

for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo: ${r}`)
}

// 12 - Indentação
for(let u = 0; u < 10; u++){
    if(u * 1 > 10){
        console.log(`Maior que 10: ${u}`)
    }else{
        if(u / 2 === 0){
            console.log("Deu 0")
        }
    }
}

// 13 - Break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);

    if(g === 12){
        console.log("o g é 12!")
        break
    }
}

// 14 - Continue
for(let s = 1; s < 10; s = s + 1){
    // Operador resto = %
    if(s % 2 === 0){
        console.log("Número par!");
        continue
    }

    console.log(s)
}

// 15 - Switch
const job = "Arquiteto"

switch(job) {
    case "Programador":
        console.log("Você é um Programador")
        break
    case "Advogado":
        console.log("Você é um Advogado")
        break
    case "Engenheiro":
        console.log("Você é um Engenheiro")
        break
    default: 
        console.log("Profissão não encontrada!")
}

// Switch (Errado)
const l = 100;

switch(l){
    case 200:
        console.log("L é 200")
    case 100:
        console.log("L é 100")
    case 10:
        console.log("L é 10")
    default: 
        console.log("L não foi encontrado!")
}