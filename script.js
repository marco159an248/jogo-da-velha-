var jogo = ""
var rodada = 1
var botao = document.querySelector('button#recomeçar')
var casa = [document.querySelector('div#casa0'), document.querySelector('div#casa1'), document.querySelector('div#casa2'), document.querySelector('div#casa3'), document.querySelector('div#casa4'), document.querySelector('div#casa5'), document.querySelector('div#casa6'), document.querySelector('div#casa7'), document.querySelector('div#casa8')]

function jogar(C) {
  if (casa[C].textContent == "") {
    if (rodada % 2 != 0) {
      casa[C].innerHTML = `X`
      rodada++
    } else {
      casa[C].innerHTML = `O`
      rodada++
    }
  }
  if (casa[0].textContent == 'X' && casa[1].textContent == 'X' && casa[2].textContent == 'X' || casa[0].textContent == 'O' && casa[1].textContent == 'O' && casa[2].textContent == 'O') {
    for (var i = 0; i < 3; i++) {
      casa[i].style.color = 'black'
    }
    for (var i = 3; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[3].textContent == 'X' && casa[4].textContent == 'X' && casa[5].textContent == 'X' || casa[3].textContent == 'O' && casa[4].textContent == 'O' && casa[5].textContent == 'O') {
    for (var i = 3; i < 6; i++) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[6].textContent == 'X' && casa[7].textContent == 'X' && casa[8].textContent == 'X' || casa[6].textContent == 'O' && casa[7].textContent == 'O' && casa[8].textContent == 'O') {
    for (var i = 6; i < 9; i++) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[0].textContent == 'X' && casa[3].textContent == 'X' && casa[6].textContent == 'X' || casa[0].textContent == 'O' && casa[3].textContent == 'O' && casa[6].textContent == 'O') {
    for (var i = 0; i < 9; i += 3) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[1].textContent == 'X' && casa[4].textContent == 'X' && casa[7].textContent == 'X' || casa[1].textContent == 'O' && casa[4].textContent == 'O' && casa[7].textContent == 'O') {
    for (var i = 1; i < 9; i += 3) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[2].textContent == 'X' && casa[5].textContent == 'X' && casa[8].textContent == 'X' || casa[2].textContent == 'O' && casa[5].textContent == 'O' && casa[8].textContent == 'O') {
    for (var i = 2; i < 9; i += 3) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[0].textContent == 'X' && casa[4].textContent == 'X' && casa[8].textContent == 'X' || casa[0].textContent == 'O' && casa[4].textContent == 'O' && casa[8].textContent == 'O') {
    for (var i = 0; i < 9; i += 4) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
  if (casa[2].textContent == 'X' && casa[4].textContent == 'X' && casa[6].textContent == 'X' || casa[2].textContent == 'O' && casa[4].textContent == 'O' && casa[6].textContent == 'O') {
    for (var i = 2; i < 8; i += 2) {
      casa[i].style.color = 'black'
    }
    for (var i = 0; i < 9; i++) {
      casa[i] = 'FIM'
    }
  }
}

function recomeçar() {
  casa = [document.querySelector('div#casa0'), document.querySelector('div#casa1'), document.querySelector('div#casa2'), document.querySelector('div#casa3'), document.querySelector('div#casa4'), document.querySelector('div#casa5'), document.querySelector('div#casa6'), document.querySelector('div#casa7'), document.querySelector('div#casa8')]    
  for (var i = 0; i < 9; i++) {
    casa[i].innerHTML = ""
    casa[i].style.color = "white"
  }
  rodada = 1
}

botao.addEventListener('click', recomeçar)