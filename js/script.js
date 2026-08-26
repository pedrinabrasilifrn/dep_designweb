//Declaro a constante viva como true
const viva = confirm("Clique em ok se voce está viva.");
//Crio um bloco de execucao que so é executado se viva igual a true
if (viva){
    //Declaro a variavel nasc e atribuo a ela o valor digitado como int
    var nasc = parseInt(prompt("Digite seu ano de nascimento:"));
    //Declaro a variavel nome e atribuo a ela o valor digitado (padrao str)
    let nome = prompt("Digite seu nome: ");
    //Declaro a variavel altura e atribuo a ela o valor digitado como float
    let altura = parseFloat(prompt("Digite sua altura em metros:"))
    //Declaro a variavel idade
    let idade;
    //atribuo o valor de idade igual ao resulado da expressao 
    idade = 2026 - nasc;
    //exibo msg com o nome digitado e a idade calculada
    alert(`${nome} você tem ${idade} anos.`);
}else {
    //exibo msg dizendo que pessoa está morta
    alert(`Você está morta.`);    
}
