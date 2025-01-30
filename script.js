let selectedColor = "";

document.querySelectorAll(".colorDiv").forEach(div => {  
  div.addEventListener("click", function () {
   
    document.querySelectorAll(".colorDiv").forEach(d => d.classList.remove("selected"));

    
    this.classList.add("selected");

    selectedColor = this.getAttribute("data-color");
  });
});

document.querySelector(".colorPicker").addEventListener("click", function () {
  if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
  }
});
