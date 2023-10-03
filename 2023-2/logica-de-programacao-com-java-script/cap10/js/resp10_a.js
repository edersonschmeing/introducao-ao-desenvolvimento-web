const frm = document.querySelector("form")      // obtém elementos da página
const dvIdade = document.querySelector("#divIdade")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                            // evita envio do form

  const idade = Number(frm.inIdade.value)

  const strIdade = idade.toString()

  for (const num of strIdade) {
    const img = document.createElement("img")
    img.src = `img/${num}.jpg`
    img.alt = `Vela de ${num} anos`
    dvIdade.appendChild(img)
  }

  btExibir.disabled = true
})

frm.addEventListener("reset", () => {
  location.reload()
})