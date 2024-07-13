document.addEventListener("DOMContentLoaded", function(){
    let submitbutton = document.getElementById("submit");
    submitbutton.addEventListener("click", function (){
        submitForm()
    });

});

function submitForm() {
    let form = document.getElementById("form");
    if (form.checkValidity()) {
        form.submit();
    }
    else {
        alert("Please fill out all the required fields correctly")
    }
}