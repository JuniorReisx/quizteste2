const perguntas = [
  {
    pergunta: "Como que todo código de HTML começa?",
    alternativas: ["a) <head></head>", "b) <html></html>", "c) <!DOCTYPE html>", "d) <start></start>"],
    iRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag que define o título de uma página em HTML?",
    alternativas: ["a) <page></page>", "b) <name></name>", "c) <title></title>", "d) <p></p>"],
    iRespostaCorreta: 2
  },
  {
    pergunta: "Qual tag define um parágrafo em HTML?",
    alternativas: ["a) <p></p>", "b) <text></text>", "c) <h1></h1>", "d) <page></page>"],
    iRespostaCorreta: 0
  }
]

const divQuiz = document.getElementById("quiz-container")
const divPergunta = document.getElementById("question")
const divAlternativas = document.getElementById("alternatives")

let iPerguntaAtual = 0
let pontuacao = 0

function mostraPergunta() {
  const perguntaAtual = perguntas[iPerguntaAtual]
  divPergunta.innerHTML = ""
  divPergunta.textContent = perguntaAtual.pergunta
  divAlternativas.innerHTML = ""

//ou perguntaAtual.alternativas.length
  for (let i = 0; i < 4; i++) {
    const alternativa = perguntaAtual.alternativas[i]
    const botao = document.createElement("button")
    botao.textContent = alternativa
    botao.addEventListener("click", () => verificar(i))
    divAlternativas.appendChild(botao);
  }
  
}

function verificar(botaoApertado) {
  const perguntaAtual = perguntas[iPerguntaAtual]

  if (botaoApertado == perguntaAtual.iRespostaCorreta) {
    pontuacao = pontuacao + 1
    alert("Tá sabendo muito, você acertou.")
  } else {
    alert("Vixi você errou, reinicie o quiz e tente de novo")
   const botaoReiniciar = document.createElement("button")
  botaoReiniciar.textContent = "Reiniciar Quiz"
  botaoReiniciar.addEventListener("click", reiniciarQuiz)
  divAlternativas.appendChild(botaoReiniciar)
  botaoReiniciar.style.backgroundColor= "red"
    return;  
  }

  iPerguntaAtual++;
//ou perguntas.length
  if (iPerguntaAtual < 3) {
    mostraPergunta()
  } else {
    exibirResultado()
  }
}


function reiniciarQuiz() {
  iPerguntaAtual = 0
  pontuacao = 0
  divPergunta.innerHTML = ""
  divAlternativas.innerHTML = ""
  mostraPergunta()
}

function exibirResultado() {
  divQuiz.innerHTML = `<h2>Quiz concluído!</h2><p>Sua pontuação: ${pontuacao} de ${perguntas.length}</p>`;
}

mostraPergunta()





















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