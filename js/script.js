//Declaro a variável (crio) e atribuo nome
var nome = "Pedrina";
//Declaro a variável (crio) e atribuo nasc
let nasc = 1991;
//Declaro a variável (crio) e atribuo viva
const viva = confirm("Clique em ok, se estiver viva");

//Declaro a variavel altura;
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`Idade dentro da funcao: ${idade}`);
    let menor;
    if(idade < 18){
         menor = true;
    }else{
         menor = false;
    }
    return [idade, menor];
}
let retorno = calcIdade() 
if (retorno[1]){
    alert(`Idade: ${retorno[0]}. Você é menor de idade`);
}else{
    alert(`Idade: ${retorno[0]}. Você é maior de idade`);
}

/*
Dá erro pois idade nao existe fora do escopo local dela (bloco clacIdade)
console.log(`Idade fora da função: ${idade}`)
*/

if(viva){
    //Atribui valor em viva
    altura = prompt("Digite a sua altura");
}