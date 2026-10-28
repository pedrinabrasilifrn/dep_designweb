//Processamento-Memória
let hoje = new Date();
//Entrada
const cadastro = document.getElementById("cadastro");
const nome= cadastro.nome;
const nasc = cadastro.nasc;
//Saída
const msg= document.getElementById("msg");
//Evento
function saudacao(){
    let m = "";
    if (nome.value == undefined || nome.value.trim() == ""){
        m = `Olá, hoje é ${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()}!`
    }else{
        m = `Olá ${nome.value}, hoje é ${hoje.getDate()}/${hoje.getMonth()+1}/ ${hoje.getFullYear()}!`
        let dt_nasc = new Date(nasc.value);
        let dt_niv = new Date(hoje.getFullYear(), dt_nasc.getMonth(), dt_nasc.getDate())
        let dif = 0;
        if (hoje > dt_niv){
            dif = hoje - dt_nasc;
            m = m + `<br/>Passou ${Math.ceil(dif/(1000*60*60*24))} dias`
        }else{
            dif = dt_niv - hoje;
            m = m + `<br/>Falta ${Math.ceil(dif/(1000*60*60*24))} dias`
        }
    }
    msg.innerHTML = m;
}
cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    saudacao();
})