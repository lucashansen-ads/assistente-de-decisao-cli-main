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


function decidirTreino(energia, humor, sono, dor) {
    console.log("\n📊 Analisando suas respostas...\n");

    if (dor === "s" && energia <= 2) {
        return "❌ Melhor não treinar hoje. Seu corpo pede descanso.";

    } else if (energia <= 2 && humor <= 2) {
        return "🧘 Que tal um descanso ativo? Alongamento ou caminhada leve.";

    } else if (energia >= 4 && sono === "s" && dor === "n") {
        return "✅ Pode treinar normalmente! Bom dia para evoluir.";

    } else {
        return "⚠️ Um treino leve é a melhor escolha hoje.";
    }
}


const energia = perguntarNivelEnergia();
const humor = perguntarHumor();
const sono = perguntarSono();
const dor = perguntarDor();

const resultado = decidirTreino(energia, humor, sono, dor);

console.log("Resultado:", resultado);


