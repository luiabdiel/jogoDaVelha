let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#container-buttons button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// CONTADOR DE JOGADAS
let player1 = 0;
let player2 = 0;

// ADICIONANDO EVENTO NA CAIXA
for (let i = 0; i < boxes.length; i++) {
  // EVENTO CLICK
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    let cloneEl = el.cloneNode(true);

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      this.appendChild(cloneEl);

      // COMPUTAR JOGADA
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ia-player") {
          // EXECUTA JOGADA DA IA
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      // CHECAR QUEM VENCEU
      checkWinCondition();
    }
  });
}

// EVENTO DOIS PLAYERS OU IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    });
  });
}

// CHECAR QUEM VAI JOGAR
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // HORIZONTAL
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // x
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // VERTICAL
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // x
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // EM X
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // VELHA
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9) {
    declareWinner("Deu velha");
  }
}

// LIMPAR O JOGO, DECLARAR O VENCEDOR E ATUALIZAR O PLACAR
function declareWinner(winner) {
  let scoreBoardX = document.querySelector("#scoreboard-1");
  let scoreBoardY = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
    msg = "O jogador 1 venceu!";
  } else if (winner == "o") {
    scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
    msg = "O jogador 2 venceu!";
  } else {
    msg = "Deu velha!";
  }

  // EXIBIR MENSAGEM
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // ESCONDER MENSAGEM
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);

  // ZERAR AS JOGADAS
  player1 = 0;
  player2 = 0;

  // REMOVER X O
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

// LÓGICA IA
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    // SÓ PREENCHER QUANDO VAZIO
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // CHECAR QUANTAS ESTÃO PREENCHIDAS
    } else {
      filled++;
    }
  }
  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}
