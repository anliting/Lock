import fs from'fs'
let nodeVersion='1.0.0'
fs.promises.writeFile('dist/node/package.json',JSON.stringify({
    name:'@anliting/lock',
    version:nodeVersion,
    main:'Lock.mjs'
}))
fs.promises.copyFile('license','dist/node/license')
;(async()=>{
    let lock=await fs.promises.readFile('main/Lock.mjs','utf8')
    fs.promises.writeFile('dist/node/Lock.mjs',lock),
    fs.promises.writeFile('dist/Lock.mjs',`/*${
        await fs.promises.readFile('license','utf8')
    }*/${lock}`)
})()
