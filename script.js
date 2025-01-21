function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/72549c50-c16e-431e-b005-d1c0d2def796.jpg")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/72549c50-c16e-431e-b005-d1c0d2def796.jpg")
  }
}