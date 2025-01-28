/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Amy Chiem
      Date:   2/24/2024

      Filename: project02-02.js
 */
 
function verifyForm() {
      // value of input control
      var name = document.getElementById("name").value; 
      var email = document.getElementById("email").value; 
      var phone = document.getElementById("phone").value;

      // conditional operator
      let meetsReq = name && email && phone;

      // window pop-up if true
      window.alert(meetsReq ? "Thank you!" : "Please fill in all fields");
}

//event listener for submit button
document.getElementById("submit").addEventListener("click", verifyForm);