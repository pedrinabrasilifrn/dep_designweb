const form = document.getElementById("formCalculadora");
form.addEventListener("submit", calcular);

function calcular(e) {
    e.preventDefault();
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const op = document.getElementById("op").value;
    switch (op) {
        case "+":
            alert(`Resultado: ${n1 + n2}`);
            break;

        case "-":
            alert(`Resultado: ${n1 - n2}`);
            break;

        case "*":
            alert(`Resultado: ${n1 * n2}`);
            break;

        case "/":
            alert(`Resultado: ${n1 / n2}`);
            break;

        default:
            alert("Escolha uma operação");
            break;
    }
 }


 