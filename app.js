const section = document.querySelectorAll(".section");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const sectBtns = document.querySelectorAll(".controlls");
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

  //sections activating
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if (id) {
      //remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //Hide other sections
      section.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

PageTransition();
