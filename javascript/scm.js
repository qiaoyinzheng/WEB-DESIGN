function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

function initializeNav() {
    let navToggle = document.getElementById("nav-toggle");
    navToggle.addEventListener("click", toggleMenu);
}

initializeNav();

function updateFooterColor() {
    let currentDate = new Date();
    let dayOfWeek = currentDate.getDay();
    let color;
    let footerLink = document.querySelector("footer a");

    if (dayOfWeek == 0) {
        color = "#FF7F7F";
    } else if (dayOfWeek == 1) {
        color = "orange";
    } else if (dayOfWeek == 2) {
        color = "lightyellow";
    } else if (dayOfWeek == 3) {
        color = "green";
    } else if (dayOfWeek == 4) {
        color = "lightblue";
    } else if (dayOfWeek == 5) {
        color = "#6D5ACF";
    } else if (dayOfWeek == 6) {
        color = "#B284BE";
    } else {
        color = "#9e9e9e"; 
    }
    
    footerLink.style.color = color;
}

updateFooterColor();



function addHoverEffectToParagraphs() {

    let paragraphs = document.querySelectorAll('p');
    

    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener("mouseover", function() {
            paragraph.style.fontWeight = "bold";
        });
        paragraph.addEventListener("mouseout", function() {
            paragraph.style.fontWeight = "normal";
        });
    });
}
addHoverEffectToParagraphs(); 






function toggleAdditionalContent() {
    let additionalContent = document.getElementById("additional-content");
    let changeContentButton = document.getElementById("change-content-button");

    if (additionalContent.style.display == "block") {
        // Hide the additional content
        additionalContent.style.display = "none";
        // Update button text
        changeContentButton.textContent = "Learn More ...";
    } 
    else {
        // Show the additional content
        additionalContent.style.display = "block";
        // Update button text
        changeContentButton.textContent = "Show Less";
    }
}
function initializeContentButton() {
    let changeContentButton = document.getElementById("change-content-button");
    changeContentButton.addEventListener("click", toggleAdditionalContent);
}
initializeContentButton();