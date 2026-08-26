alert("Oi do externo");

var num = parseFloat(prompt("Digite um valor"));
if (num == 0){
    alert(`${num} é zero`);
}else if (num %2 != 0){
    alert(`${num} é ímpar`);
}else{
    alert(`${num} é par`);    
}

alert("Fim");