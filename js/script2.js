let saudacao_a = () =>{
    alert(`Olá Fulano, seja bem-vindo!`);
}

let saudacao_b = (nome) =>{
    alert(`Olá ${nome}, seja bem-vindo!`);
}

let saudacao_c = (nome="Desconhecido") =>{
    alert(`Olá ${nome}, seja bem vindo!`);
}

let saudacao_d = (nome="Desconhecido") =>{
    return `Olá ${nome}, seja bem-vindo!`;
}

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener(function(e){
    e.preventDefault();
    saudacao_a();
});