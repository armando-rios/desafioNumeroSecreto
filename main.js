// El desafío que nos gustaría proponer es: ¿qué cambios serían necesarios para que no sea entre 1 y 10? Imaginen que quieran jugar entre 1 y 100, o que el usuario quiera jugar entre 1 y 1000. ¿Qué cambios serían necesarios para que esta funcionalidad pueda ser implementada, pueda ser aplicada? 

const input = document.querySelector("input")
const send = document.querySelector("#form")
const newGame = document.querySelector("#newGame")
const renderIntentos = document.querySelector("#intentos")

let points = 0

newGame.addEventListener("click", (event) => {
  console.log("reset game");
  window.location.reload() //refrescar pagina
})

let intentos = prompt("Numero de intentos")  // solo par?

function numRandom(n) {
  console.log(`cantidad de numeros: ${n}`);
  return numeroRandom = Math.floor(Math.random() * n + 1)
}


renderIntentos.textContent = intentos

const cantidad = numRandom(prompt("catidad random"))

send.addEventListener("submit", (event) => {
  event.preventDefault()
  const numero = input.value
  if (numero != cantidad) {
    intentos--
    if (intentos <= 0) {
      const loss = document.querySelector("#loss")
      loss.classList.add("active")
      console.log("perdiste");
    }
    renderIntentos.textContent = intentos
    // console.log(`Error! te quedan: ${intentos}`);
  } else {
    // controlar puntos por intentos
    const win = document.querySelector("#win")
    win.classList.add("active")

    // points += 10 //??

    console.log(`Ganaste!`);
    // console.log(`Ganaste! ${points} puntos`);
  }
  console.log(`userNumber:${numero} numAleatorio:${cantidad}`);
})
