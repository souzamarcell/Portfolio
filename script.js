function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  
}

// const html = document.documentElement
// html.classList.toggle("light1")

// const img = document.querySelector("#profile img")
// console.log(img)

// const imgP = document.querySelector("#container div")
// console.log(imgP)
// img.setAttribute("src", "./assets/avatar-light.png")
// console.log(img)