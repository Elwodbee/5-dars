const text = prompt("Ismingizni kiriting");
const harf = prompt("Bironta harf kiriting")
let KattaHarf = text.toLowerCase();
if(KattaHarf.includes(harf)){
    alert(`${KattaHarf} ismida ${harf} harfi mavjud`)
}else{
    alert(`${KattaHarf} ismida ${harf} harfi mavjud emas`)
}