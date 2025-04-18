import { planetas } from "./bd.js"

let div = document.querySelector('body')
let estilo = getComputedStyle(div)
let imagemFundo = estilo.backgroundImage

let index = 0

const h2 = document.querySelector(".planeta")

const img2 = document.querySelector(".logo-img")

const carrossel = document.querySelector(".carrossel")

const p = document.querySelector(".descPlaneta")

const curiosidade1 = document.querySelector(".curiosidade1")

const curiosidadeDesc1 = document.querySelector(".curiosidade-desc1")

const curiosidade2 = document.querySelector(".curiosidade2")

const curiosidadeDesc2 = document.querySelector(".curiosidade-desc2")

const curiosidade3 = document.querySelector(".curiosidade3")

const curiosidadeDesc3 = document.querySelector(".curiosidade-desc3")

const btn = document.querySelector(".prox")

const img = document.querySelector("imagemFundo")

function atualizarConteudo() {

  const planeta = planetas[index]
  h2.textContent = planeta.planeta
  img2.src = planeta.img2
  p.textContent = planeta.descricao
  curiosidade1.textContent = planeta.curiosidade1
  curiosidade2.textContent = planeta.curiosidade2
  curiosidade3.textContent = planeta.curiosidade3
  curiosidadeDesc1.textContent = planeta.curiosidadeDesc1
  curiosidadeDesc2.textContent = planeta.curiosidadeDesc2
  curiosidadeDesc3.textContent = planeta.curiosidadeDesc3
  div.style.backgroundImage = `url('${planeta.img}')`
  
}

atualizarConteudo()

btn.onclick = () => {

  carrossel.classList.add("fade-out")
  img2.classList.add("fade-out")
 
  setTimeout(() => {
  index = (index + 1) % planetas.length 
  atualizarConteudo()

  carrossel.classList.remove("fade-out")
  img2.classList.remove("fade-out")

  }, 400)

}
