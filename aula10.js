
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


const filtrarPessoa=(pessoa) => pessoa.idade > 10;

const listaFiltrada = lista.filter(filtrarPessoa)

console.log(listaFiltrada)