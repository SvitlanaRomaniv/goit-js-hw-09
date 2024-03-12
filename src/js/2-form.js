const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const formInput = form.querySelector("input");
const formTextarea = form.querySelector("textarea");

function saveFormData() {
    const text = formTextarea.value.trim(); 
    const name = formInput.value.trim();
    const data = JSON.stringify({ text, name });
    localStorage.setItem(storageKey, data);
}

function fillFormFields() {
    const jsonData = localStorage.getItem(storageKey);
    if (jsonData) {
        const { text, name } = JSON.parse(jsonData);
        formTextarea.value = text || "";
        formInput.value = name || "";
    }
}

document.addEventListener("DOMContentLoaded", fillFormFields);
form.addEventListener("input", saveFormData);

function formSubmitHandler(event) {
    event.preventDefault();
    if (formInput.value.trim() && formTextarea.value.trim()) {
        const data = {
            email: formInput.value.trim(),
            message: formTextarea.value.trim()
        };
        console.log(data); 
        localStorage.removeItem(storageKey); 
        form.reset(); 
    } else {
        console.log("Please fill in all fields."); 
    }
}


form.addEventListener("submit", formSubmitHandler);
