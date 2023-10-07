const frm = document.querySelector("form")      // obtém elementos da página
const dvJogos = document.querySelector("#divJogos")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                            // evita envio do form
  const clube = frm.inClube.value

  const novoH5 = document.createElement("h5")
  novoH5.className = "text-end me-2"            // pode-se indicar o estilo do elemento
  novoH5.style.fontStyle = "italic"             // ... ou aplicar um estilo a partir da propriedade .style

  const texto = document.createTextNode(clube)

  novoH5.appendChild(texto)
  dvJogos.appendChild(novoH5)

  frm.inClube.value = ""
  frm.inClube.focus()
})

frm.btMontar.addEventListener("click", () => { 

  const h5 = dvJogos.querySelectorAll("h5")

  if (h5.length == 0 || h5.length % 2 == 1) {
    alert("O número de clubes inseridos deve ser par")
    return
  }

  const novoH3 = document.createElement("h3")
  const texto = document.createTextNode("Tabela de Jogos")
  novoH3.appendChild(texto)
  dvJogos.appendChild(novoH3)

  const novaTable = document.createElement("table")
  novaTable.className = "table table-striped"
  dvJogos.appendChild(novaTable)

  let linha
  for (var i = 0; i < h5.length; i++) {
    if (i % 2 == 0) {
      linha = novaTable.insertRow(-1)
      const col1 = linha.insertCell(0)
      col1.textContent = h5[i].innerText
    } else {
      const col2 = linha.insertCell(1)
      col2.textContent = h5[i].innerText
    }
  }

  btMontar.disabled = true
})

frm.addEventListener("reset", () => { 
  location.reload()
})