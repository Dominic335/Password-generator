function randomPass(size) {
    let pass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLenght = characters.length;
    for (let i = 0; i < size; i++) {
        pass += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return pass;
}

let buttonEl = document.getElementsByClassName("passButton");
let buttonEl1 = document.getElementById("butt1");
let buttonEl2 = document.getElementById("butt2");
let buttonEl3 = document.getElementById("butt3");
let buttonEl4 = document.getElementById("butt4");
let sizeEl = document.getElementById("input-el");

function generate() {
    sizeEl = sizeEl.value
    buttonEl1.textContent = randomPass(sizeEl);
    buttonEl2.textContent = randomPass(sizeEl);
    buttonEl3.textContent = randomPass(sizeEl);
    buttonEl4.textContent = randomPass(sizeEl);

}

const span = document.querySelector(".passButton");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
    alert("Copied: " + event.clipboardData.getData("text"))
  }
});