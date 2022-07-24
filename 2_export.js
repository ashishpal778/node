// we can't used directly import and export in node js because its use lower version of js
module.exports ={
    a:10,
    b:20,
    z: function(){
       return this.a+this.b
    }
}