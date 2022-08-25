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