// 1.
let desconto;

if (true) {
    desconto = 10;
}

console.log(desconto); 

// Não, o console.log não vai conseguir mostrar o valor do desconto. Porque a variável desconto foi declarada com let dentro de um bloco {}.

// 2.
let unidade = "São Paulo"; 
function alterarUnidade() {
    let unidade = "SBC"; 
}
alterarUnidade();
console.log(unidade);

//Não mudou. Porque existem duas variáveis diferentes chamadas unidade

// 3.
function verificarClima(temp) {
    let mensagem;

    if (temp > 30) {
        mensagem = "Alerta: Temperatura Alta!";
    } else {
        mensagem = "Temperatura Normal.";
    }

    console.log(mensagem);
}

verificarClima(32);

// 4.
for (let i = 0; i < 5; i++) {
    
}
console.log(i);

//Sim, vaza. Porque o for usa var

// 5.

console.log(setor);
var setor = "Manutenção";

//undefined

console.log(maquina);
let maquina = "Torno CNC";

//Nada é exibido. O código quebra antes.