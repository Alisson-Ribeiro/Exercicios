console.log('hello')

//console

console.error('Este é um erro!')
console.warn('Este é um aviso!')

//variáveis
var x = 10

//maneiras mais modernas
let y = 15
const z = 20

console.log(x)
console.log(y)
console.log(z)


//tipos de dados

const name = 'Alisson'
console.log(name)
console.log( typeof name)

const camisasqty = 4
console.log(camisasqty)
console.log(typeof camisasqty)

const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

const aprovado = false // true ou false
console.log(aprovado)
console.log(typeof aprovado)

let sobrenome = null
console.log(sobrenome)
console.log(typeof sobrenome)

sobrenome = 'Ribeiro'
console.log(sobrenome)
console.log(typeof sobrenome)

const languages = ["javascript", "php" , "python"]
console.log(languages)
console.log(typeof languages)

const user = {email: 'alisson@teste.com', password: 'teste123', age: 30} //object literals
console.log(user)
console.log(typeof user)

//métodos de string

const fullname = "alisson ribeiro"

console.log(fullname.length)

const stringtoarray = fullname.split(' ')
console.log(stringtoarray)

console.log(fullname.toLowerCase())
console.log(fullname.toUpperCase())

console.log(fullname.indexOf('l'))

console.log(fullname.slice(0,7))

//métodos de array

const list = ['a', 'b', 'c' ,'d', 'e']

console.log(list.length)

console.log(list[2])

list[5] = 'f'

console.log(list)

console.log(list[list.length -1])

list.push('g')

console.log(list)

list.pop()

console.log(list)

list.pop()

console.log(list)

list.shift()

console.log(list)

list.unshift('a')

console.log(list)


// objetos

const product = {
    name: 'camisa',
    price: 15.99,
    instock: true,
    sizes: ['p','m','g'],
    'main color' : 'azul',
}

console.log(product.name)
console.log(product['name'])
console.log(product['main color'])

// destructuring

const {price, instock} = product

console.log(price)
console.log(instock)

const[n1,n2] = list

console.log(n1)
console.log(n2)

// JSON - javascript object notation

const dog = {
    name: 'shark',
    age: 10
}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj)

const jsonerrado = '{"name": "teste","surname":"testando"}'

const obj2 = JSON.parse(jsonerrado)

console.log(obj2)

// estruturas condicionais

const a = 10

if(a>8) {
    console.log('A é maior que 8')
}

const b = 'alisson'

if(b === 'ribeiro') {
    console.log('o nome é ribeiro')
} else if(b === 'vieira') {
    console.log('o nome é vieira')
} else {
    console.log('nome nao encontrado')
}

const numero = 100

// if ternario

let testando = numero<20 ? 'sim' : 'nao'

console.log(testando)

// estruturas de repetição

const lista = [1,2,3,4,5]

let counter = 0

while(counter < lista.length) {
    console.log('listando: ' + lista[counter])
    counter++
}

const lista2 = ['a','b','c','d','e']

for (let counter = 0; counter < lista2.length; counter++) {
    console.log(`listando: ${lista2[counter]}`) // template literals
}
