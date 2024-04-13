
const lista = [
    {
        nome:'felix',
        idade:15
    },
    {
        nome:'lucas',
        idade:13
    },
    {
        nome:'francisco',
        idade:19
    },
    {
        nome:'fernando',
        idade:17
    },
    {
        nome:'franca',
        idade:15
    },
]

const converterObjecto = (objecto) =>{
    return{
        ...objecto,
        nomeIdade:`${objecto.nome} + ${objecto.idade} `
    }
}

console.log(lista.map(converterObjecto))
console.log(lista.map(resolve =>resolve.idade))