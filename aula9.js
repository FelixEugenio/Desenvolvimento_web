
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

/*
for(let i = 0;i< lista.length;i++){
    console.log(lista[i])
}
*/
let soma =0;

//lista.forEach((objecto)=>console.log(objecto))
lista.forEach((objecto)=>{
soma+=objecto.idade
}
)

console.log(soma)
