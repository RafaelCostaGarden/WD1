/* 
Name: Rafael Costa
File: script.js
Date: November 2nd, 2023
*/

// Hamburger menu function //
function hamburger() {
    var manu = document.getElementById("manu-links");
    if (manu.style.display ==="block") {
        manu.style.display = "none;"
    } else {
        manu.style.display = "block";
    }
}