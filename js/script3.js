let nome = prompt("Digite seu nome:"); 
let nasc = Number(prompt("Digite seu ano de nascimento:"));
let viva = confirm("Clique em ok se estiver viva. Caso contrário cancelar."); 
let altura = prompt("Digite sua altura:"); 
altura = Number(altura);
let sexo = prompt("Digite seu sexo:");
let peso = prompt("Digite seu peso:");
peso = Number(peso);
let imc = peso/altura; 

let msg = `Nome: ${nome}\nAno de Nascimento: ${nasc}\nViva: ${viva}`;
msg = msg + `\nAltura: ${altura}\nSexo: ${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);

