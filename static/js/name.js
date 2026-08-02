const message =
"Before we begin our magical journey, I'd love to know your name...";

typeWriter("typing", message, 45);

// Automatically capitalize first letter
const input = document.getElementById("username");

input.addEventListener("input", function () {

    this.value =
        this.value.replace(/\b\w/g, c => c.toUpperCase());

});