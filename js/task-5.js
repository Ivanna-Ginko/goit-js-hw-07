function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const onClick = (e) => {

  const newColor = getRandomHexColor()
  document.querySelector("body").style.backgroundColor = newColor

  const span = document.querySelector(".color")
  span.textContent = newColor
}

const btn = document.querySelector(".change-color") 
btn.addEventListener("click", onClick)