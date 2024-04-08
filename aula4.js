
const sleep = (ms) =>{
    return new Promise(result => setTimeout(result,ms))
}

const aguardar = async() =>{
    console.log('Passou 1')
    const resultado = await aguardarPedido()
 await  sleep(3000)
    console.log('Resultado',resultado)
    console.log('Passou 2')
}

const aguardarPedido = async() => {
    await sleep(4000)
    return 30;
}

aguardar()