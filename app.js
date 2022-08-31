const section = document.querySelectorAll(".section");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");
console.log(sectBtn);

function PageTransition() {
  //active class change on btn click
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      console.log(currentBtn);
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
}

PageTransition();
