"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Amy Chiem
      Date:   4/21/24

      Filename: project06-02.js
*/

selectionList.addEventListener("DOMContentLoaded", function() {
      const allSelect = document.querySelectorAll("form#govLinks select")

      for (let i = 0; i <allSelect.length; i++) {
            allSelect[i].onchange = function(evt) {
                  const linkURL = evt.target.value
                  const newWin = window.open(linkURL)
            }
      }
})
