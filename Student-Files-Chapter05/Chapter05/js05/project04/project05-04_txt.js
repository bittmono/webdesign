"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Amy Chiem
      Date:   4/14/2024

      Filename: project05-04.js
      note: footnotes wont appear in window
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

//console.log(phrases)   //temp

// iterate over the phrases list
for (let i = 0; i < phrases.length; i++) {

    // apply onclick event on the phrase
    phrases[i].onclick = function() { 

        // create the phrase element of h1 tag
        //console.log(this.textContent)   //temp
        let phrase = document.createElement('h1');
        phrase.textContent = this.textContent;

        // create the footnote element
        let footnote = document.createElement('p');
        footnote.textContent = footnote[i];

        // apply the footnote styles
        footnote.style = 'font-style: italic; font-size: 1.2em;';

        // create the closeButton element
        let closeButton = document.createElement('input');
        closeButton.type = 'button';
        closeButton.value = "Close Footnote";

        // apply styles to the closeButton element
        closeButton.style = 'display: block; margin: 10px auto;';
        
        // create the window popup
        let popup = window.open('','footnote',"width=300,height=200,top=100,left=100");
        popup.document.body.style = 'background-color: ivory; font-size: 16px; padding: 10px;';

        // append all the elements in the popup body
        popup.document.body.appendChild(phrase);
        popup.document.body.appendChild(footnote);
        popup.document.body.appendChild(closeButton);

        // add the click event on close button
        closeButton.onclick = function(){
            popup.close();
        }
    }
}