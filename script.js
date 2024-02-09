const perguntas = [
  {
    pergunta: "Como que todo código de HTML começa?",
    alternativas: ["a) <head></head>", "b) <html></html>", "c) <!DOCTYPE html>", "d) <start></start>"],
    indiceRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag que define o título de uma página em HTML?",
    alternativas: ["a) <page></page>", "b) <name></name>", "c) <title></title>", "d) <p></p>"],
    indiceRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag define um parágrafo em HTML?",
    alternativas: ["a) <p></p>", "b) <text></text>", "c) <h1></h1>", "d) <p></p>"],
    indiceRespostaCorreta: 0
  }
];

const containerQuiz = document.getElementById("quiz-container");
const elementoPergunta = document.getElementById("question");
const elementoAlternativas = document.getElementById("alternatives");

let indicePerguntaAtual = 0;
let pontuacaoUsuario = 0;

function exibirPergunta() {
  const perguntaAtual = perguntas[indicePerguntaAtual];
  elementoPergunta.textContent = perguntaAtual.pergunta;

  elementoAlternativas.innerHTML = "";
  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => verificarResposta(indice));
    elementoAlternativas.appendChild(botao);
  });
}

function verificarResposta(indiceSelecionado) {
  const perguntaAtual = perguntas[indicePerguntaAtual];

  if (indiceSelecionado === perguntaAtual.indiceRespostaCorreta) {
    pontuacaoUsuario++;
    alert("Você acertou!");
  } else {
    alert("Você errou!");
    exibirBotaoReiniciar();
    return;  
  }

  indicePerguntaAtual++;

  if (indicePerguntaAtual < perguntas.length) {
    exibirPergunta();
  } else {
    exibirResultado();
  }
}

function exibirBotaoReiniciar() {
  const botaoReiniciar = document.createElement("button");
  botaoReiniciar.textContent = "Reiniciar Quiz";
  botaoReiniciar.addEventListener("click", reiniciarQuiz);
  elementoAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
  indicePerguntaAtual = 0;
  pontuacaoUsuario = 0;
  elementoAlternativas.innerHTML = "";
  exibirPergunta();
}

function exibirResultado() {
  containerQuiz.innerHTML = `<h2>Quiz concluído!</h2><p>Sua pontuação: ${pontuacaoUsuario} de ${perguntas.length}</p>`;
}

exibirPergunta();





















/*document.getElementById('volta').style.display = 'none';
document.getElementById('next').style.display = 'none'
function pergunta1() {
    var pergunta = "Qual tag HTML é usada para criar uma lista não ordenada?";
    var alternativas = ["a) <ol>", "b) <ul>", "c) <li>", "d) <dl></dl>"];

}

document.getElementById("desaparecer").addEventListener("click", function pergunta1() {
    var pergunta = "Qual tag HTML é usada para criar uma lista não ordenada?";
    var alternativas = ["a) <ol>", "b) <ul>", "c) <li>", "d) <dl></dl>"];

    // Obtém o contêiner onde a pergunta e alternativas serão exibidas
    var perguntaContainer = document.getElementById('card2');
  document.getElementById('desaparecer').style.display = 'none'

    // Limpa qualquer conteúdo existente no contêiner
    perguntaContainer.innerHTML = '';

    // Adiciona a pergunta
    var perguntaElement = document.createElement('p');
    perguntaElement.textContent = pergunta;
    perguntaContainer.appendChild(perguntaElement);

    // Adiciona as alternativas
    var ulElement = document.createElement('ul');
    alternativas.forEach(function (alternativa) {
        var liElement = document.createElement('button');
        liElement.textContent = alternativa;
        ulElement.appendChild(liElement);
    });
    perguntaContainer.appendChild(ulElement);
}
)
// Chame a função para exibir a pergunta


/*
Qual tag HTML é usada para criar uma lista não ordenada?
a) <ol>
b) <ul>
c) <li>
d) <dl>

Qual atributo HTML é utilizado para definir o texto alternativo de uma imagem?
a) alt
b) title
c) src
d) href


*/