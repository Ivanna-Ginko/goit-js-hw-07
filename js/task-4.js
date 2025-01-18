/*const inpLogin = document.querySelector(".js-inp-email");
console.log(inpLogin);
const inpPassword = document.querySelector(".js-inp-password");
console.log(inpPassword);*/


const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    
    if (login === "" || password === "") {
     alert('All form fields must be filled in');
}
}




