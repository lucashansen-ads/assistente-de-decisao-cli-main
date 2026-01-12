// Assistente de Decisão - Vale a pena treinar hoje?
// Autor: Lucas Hansen

const prompt = require("prompt-sync")();


function perguntarNivelEnergia() {
    while (true) {
        const valor = prompt("De 1 a 5, qual seu nível de energia hoje? ");

        const numero = Number(valor);

        if (numero >= 1 && numero <= 5) {
            return numero;
        } else {
            console.log("Digite um número entre 1 e 5.");
        }
    }
}

function perguntarHumor() {
    while (true) {
        const valor = prompt("De 1 a 5, como está seu humor hoje? ");
        const numero = Number(valor);

        if (numero >= 1 && numero <= 5) {
            return numero;
        } else {
            console.log("Digite um número entre 1 e 5.");
        }
    }
}


function perguntarSono() {
    while (true) {
        const resposta = prompt("Você dormiu bem hoje? (s/n) ").toLowerCase();

        if (resposta === "s" || resposta === "n") {
            return resposta;
        } else {
            console.log("Responda apenas com 's' ou 'n'.");
        }
    }
}


function perguntarDor() {
    while (true) {
        const resposta = prompt("Você sente alguma dor ou lesão hoje? (s/n) ").toLowerCase();

        if (resposta === "s" || resposta === "n") {
            return resposta;
        } else {
            console.log("Responda apenas com 's' ou 'n'.");
        }
    }
}

const energia = perguntarNivelEnergia();
const humor = perguntarHumor();
const sono = perguntarSono();
const dor = perguntarDor();

console.log("\nResumo das respostas:");
console.log("Energia:", energia);
console.log("Humor:", humor);
console.log("Dormiu bem:", sono);
console.log("Dor:", dor);


