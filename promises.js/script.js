// criação de promessa

const myPromise = new Promise((resolve, reject) => {
    
    const nome = "Alisson"

    if (nome === 'Alisson') {
        resolve('Usuário encontrado')
    } else {
        reject('Usuário não encontrado!')
    }
})


myPromise.then((data) => {
    console.log(data)
})

//Encademento de then's

const myPromise2 = new Promise((resolve, reject) => {
    
    const nome = 'Alisson'

    if(nome === 'Alisson') {
        resolve('Usuário encontrado')
    } else {
        reject('Usuário não encontrado!')
    }
})

myPromise2
    .then((data) => {
        return data.toLowerCase()
    })
    .then((stringModificada) => {
        console.log(stringModificada)
    })

    //Retorno do catch

    const myPromise3 = new Promise((resolve, reject) => {
    
        const nome = 'Fulano'
    
        if(nome === 'Alisson') {
            resolve('Usuário encontrado')
        } else {
            reject('Usuário não encontrado!')
        }
    })

    myPromise3
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log('Ocorreu um erro: ' + err)
    })

    // Resolver várias promessas

    const p1 = new Promise((resolve, reject) => {
        sertimeout(() =>{
            resolve('P1 ok! Timeout')
        }, 2000)
    })

    const p2 = new Promise((resolve, reject) => {
        resolve('P2 ok!')
    })

    const p3 = new Promise((resolve, reject) => {
        resolve('P3 ok!')
    })

    const resolveAll = Promise.all([p1,p2,p3]).then((data) =>{
        console.log(data)
    })

    console.log('Depois do all()')