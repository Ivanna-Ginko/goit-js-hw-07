const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach(el=>{
    let h2 = el.querySelector("h2")
    console.log("Category:",h2.textContent)

    let ul = el.querySelectorAll("ul")
    console.log (`Elements: ${ul.length}`)
});