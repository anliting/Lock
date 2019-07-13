import Lock from './Lock'
let lock=new Lock
;(async()=>{
    await lock.in()
    console.log('(a',new Date)
    await new Promise(rs=>setTimeout(rs,100))
    console.log(')a',new Date)
    lock.out()
})()
lock.do(async()=>{
    console.log('(b',new Date)
    await new Promise(rs=>setTimeout(rs,100))
    console.log(')b',new Date)
})
lock.do(async()=>{
    console.log('(c',new Date)
    await new Promise(rs=>setTimeout(rs,100))
    console.log(')c',new Date)
})
