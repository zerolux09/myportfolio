// let sendForm = document.querySelector("#send-form");
// let form = document.querySelector("form");
// sendForm.onclick = function(event) {
//   event.preventDefault();
//   console.log("work");
//   console.log(serialize(form));
// };

// function autochecked() {
//   let mycheck = document.querySelectorAll(".my-check");
//   for (let i = 0; i < mycheck.length; i = i + 1) {
//     if (mycheck[i].checked == false) {
//       mycheck[i].checked = true;
//     } else {
//       console.log("khkh");
//     }
//     console.log(mycheck[i].checked);
//   }
// }
// autochecked();
// console.log(document.querySelector(".my-check").checked);
// mycheck.checked;

let shbtn = document.querySelector(".shbtn");
let featurep = document.querySelector(".featurep");
shbtn.onclick = function(event) {
  event.preventDefault();
  featurep.style.display = "block";
  
  console.log("work");
};
