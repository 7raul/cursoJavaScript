// 1 - Number
console.log(2)
console.log(5.14)
console.log(-128)
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof -128)

// 2 - Operadores aritméticos
console.log(2 + 4)
console.log(2 - 4)
console.log(2 * 3)
console.log(6 / 3)
console.log(5 + (10 * 2))

// 3 - Especial Numbers 
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "abc");
console.log(typeof NaN)

// 4 - Strings
console.log("Isso aqui é un texto");
console.log(`Outro texto`);
console.log("13")
console.log(typeof "Isso aqui é un texto");
console.log(typeof `Outro texto`);
console.log(typeof "13");

// 5 -  Caracteres especiais
console.log("Testando a \n quebra de linha");
console.log("Testando a \t tab")

// 6 - COncatenação 
console.log("Oi," + " tudo" + " bem?")
console.log(`Testando` + ` Com` + ` Crase!`)

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`)
console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`)

// 8 - Boolean 
console.log(true)
console.log(5 > 20)
console.log(30 > 10)
console.log(typeof false)

// 9 -  Comparação
console.log(5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9)

// 10 Identicos 
console.log(9 == "9")
console.log(9 === "9")
console.log(9 != "9")
console.log(9 !== "9")

// 11 - Operadores lógicos
console.log(true && false)
console.log(true && true)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Matheus" === 1)
console.log(5 > 2 || "Matheus" === 1)
console.log(5 < 2 || 5 > 100)
console.log(!true)
console.log(!5 > 2)

// 12 - Empty values
console.log(typeof null, typeof undefined)
console.log(null == undefined)
console.log(null === undefined)
console.log(null == false)
console.log(undefined == false)

// 13 - Mudança de tipos
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 9)