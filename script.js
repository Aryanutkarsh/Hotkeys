function run() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      const jokeElement = document.getElementById("Test");

      jokeElement.innerHTML = jokeText;
    });
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
var urli = location.hostname;
var change = document.getElementById("Test");

console.log(urli);
