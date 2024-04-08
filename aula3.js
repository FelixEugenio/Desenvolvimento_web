console.time()
const test1 = () =>{
    setTimeout(()=>{
        console.log('test1')
    },1000) 
}
console.timeEnd()

console.time()
const test2 = () =>{
    setTimeout(()=>{
        console.log('test2')
    },2000) 
}
console.timeEnd()

console.time()
const test3 = (callback) =>{
    setTimeout(()=>{
        console.log('test3')
        callback()
    },3000) 
}
console.timeEnd()

console.time()
const test4 = () =>{
    setTimeout(()=>{
        console.log('test4')
    },0) 
}
console.timeEnd()


const funcaoDeCallBack = ()=>{
  console.log('salvou o usuario')
}


test1()
console.log(1+1)
test2()
test3(funcaoDeCallBack)
console.log(1+1)
test4()