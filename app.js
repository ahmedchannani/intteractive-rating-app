let mainCard = document.getElementById("main");
let mainButton = document.getElementById("submit");
let rating = 5;
let buttons = document.querySelectorAll(".num");
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    rating = buttons[i].innerHTML;
  })
}
console.log(rating)
mainButton.addEventListener("click", ()=> {
  mainCard.innerHTML = `
  <img class="thank-img" src="./images/illustration-thank-you.svg" alt="thank you illustration">
  <p class="scnd-par">You selected ${rating} out of 5 </p>
  <h3 class="scnd-head">Thank you!</h3>
  <p class="thrd-par">We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>`
})