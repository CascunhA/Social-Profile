function toggleMode(){
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  

 if(html.classList.contains("light")){
  html.classList.remove("light")
  img.setAttribute("src", "./00eed4ea0fbf480872681e35087650d8.jpg")
  img.setAttribute("alt","pastor-alemão-preto")
  }
  else{
    html.classList.add("light")
    img.setAttribute(
      "src", "./download (1).jpg")
    img.setAttribute("alt", "Golden-escuro")
  }
 }
  

  

  