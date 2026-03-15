document.addEventListener("DOMContentLoaded", function() {
    
    const factButton = document.getElementById("funFactBtn");
    const factDisplay = document.getElementById("funFactDisplay");

    // Add a click event listener to the button
    factButton.addEventListener("click", function() {
        
        // The text content to display
        factDisplay.textContent = "Fun Fact: I passed my Environmental Planning Board Exam in September 2025, and I occasionally work with spatial tools like QGIS and ArcGIS to bridge the gap between technology and human settlements planning!";
        
        factDisplay.classList.add("show");
        
        // Change button text after clicking
        factButton.textContent = "Fact Revealed!";
        factButton.style.backgroundColor = "#10b981";
    });

});