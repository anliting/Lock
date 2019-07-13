function Lock(){
    this._ready=Promise.resolve()
}
Lock.prototype.in=async function(){
    return[
        this._ready,
        this._ready=this._ready.then(()=>new Promise(rs=>this.out=rs))
    ][0]
}
Lock.prototype.do=async function(f){
    await this.in()
    try{
        return await f()
    }finally{
        this.out()
    }
}
export default Lock
