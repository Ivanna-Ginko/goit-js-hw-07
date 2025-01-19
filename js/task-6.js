function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("#create-btn");


const btnDestroy = document.querySelector("#destroy-btn");

const boxes = document.querySelector("#boxes");


const createFun = () => {
  
  const value = document.querySelector("input").value
  
  if (value === "") return;
 let width = 30
 let height = 30 
 let ssdiv = ''
  for (let i = 0; i < value; i++) {
    const newColor = getRandomHexColor()
    let sdiv = `<div style="width:${width}px; height:${height}px; background: ${newColor};">1111</div>`
    ssdiv += sdiv
  width = width + 10;
  height = height + 10;

    
  }
  boxes.insertAdjacentHTML("beforeend", ssdiv);
}

const destroyFun = () => {
  boxes.innerHTML = '';
}

btnCreate.addEventListener("click", createFun)

btnDestroy.addEventListener("click", destroyFun)