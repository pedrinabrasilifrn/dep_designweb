function saudacao_a(){
    alert(`Olá Fulano, seja bem-vindo!`);
}

function saudacao_b(nome){
    alert(`Olá ${nome}, seja bem-vindo!`);
}

function saudacao_c(nome="Desconhecido"){
    alert(`Olá ${nome}, seja bem vindo!`)
}

function saudacao_d(nome="Desconhecido"){
    return `Olá ${nome}, seja bem-vindo!`;
}
