"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Amy Chiem
      Date:   4/10/2024

      Filename: project05-02.js
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
            
      if(this.parentNode.id === "photo_bucket") {
            // if from photo bucket
            var newItem = document.createElement("li"); //new element node called newItem
            photoList.appendChild(newItem); //append newItem -> photoList
            newItem.appendChild(this); //append image to newItem by method
      } else {
            // if from photo list
            var oldItem = this.parentNode; //takes parent element of clicked image
            photoBucket.appendChild(this); //move image to photo bucket
            oldItem.parentNode.removeChild(oldItem); //remove the old item from list
      }
      }
}