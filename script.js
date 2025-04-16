// script.js

// LocalStorage: Save and Retrieve Background Color Preference
document.getElementById("savePreferenceBtn").addEventListener("click", () => {
    const currentBackgroundColor = document.body.style.backgroundColor || "white";
    localStorage.setItem("backgroundColor", currentBackgroundColor);
    alert("Background color saved!");
  });
  
  // Retrieve saved background color on page load
  window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
    }
  });
  
  // Animation triggered by button click
  document.getElementById("animateBtn").addEventListener("click", () => {
    const button = document.getElementById("animateBtn");
    button.style.transform = "scale(1.5)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 500); // Reset animation after 0.5 seconds
  });
  