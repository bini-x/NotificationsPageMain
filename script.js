const markAsRead = document.querySelector("#markAsRead");
const redDot = document.querySelectorAll(".redDot");
const notification = document.querySelectorAll(".notification");
let notisNumber = document.querySelector(".notisNumber");

const [one, two, three, four, five, six, seven] = [...notification];
const [first, second, third] = [...redDot];
let notisNumberValue = 3;
notisNumber.innerHTML = notisNumberValue;

markAsRead.addEventListener("click", () => {
  first.classList.add("none");
  second.classList.add("none");
  third.classList.add("none");
  one.style.backgroundColor = "transparent";
  two.style.backgroundColor = "transparent";
  three.style.backgroundColor = "transparent";
  four.style.backgroundColor = "transparent";
  five.style.backgroundColor = "transparent";
  six.style.backgroundColor = "transparent";
  seven.style.backgroundColor = "transparent";
  notisNumberValue -= notisNumberValue;
  notisNumber.innerHTML = notisNumberValue;
  notisNumber.classList.add("none");
});
