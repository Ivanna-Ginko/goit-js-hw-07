const inp = document.querySelector("#name-input")
const spn = document.querySelector("#name-output")

const handler = (e)=>{
    let name = e.target.value.trim()
    if(!name) name = "Anonymous"
    console.log(name)
    spn.textContent = name;
}

inp.addEventListener("input", handler)
