function calcular(){
    console.log('calculo')
}


const calcular2 = function(){
    console.log('calculo2')
    return 2020;
}

const calcular3 = ()=> console.log('resultado : ',calcular2())

calcular()
calcular3()