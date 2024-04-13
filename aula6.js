
const CalculoDaSomaDosValores = (valor) =>{
    if(valor === 0){
    return 0;
    }

    return valor + CalculoDaSomaDosValores(valor -1)
}

console.log(CalculoDaSomaDosValores(3))