"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Amy Chiem
      Date:   4/14/2024

      Filename: project05-03.js
      note: clicking on table of contents doesnt jump to location
*/

const sourceDoc = document.getElementById("source_doc");
const toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
    if (n.nodeName === heading) {
        const anchor = document.createElement("a");
        anchor.setAttribute("name", "doclink" + headingCount);
        n.insertBefore(anchor, n.firstChild);

        const listItem = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = n.textContent;
        listItem.appendChild(link);
        listItem.setAttribute("href", "#doclink" + headingCount);

        toc.appendChild(listItem);

        headingCount++;
    }
}