const mobileNavLink = document.querySelector("#mobileNavBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuBg = document.querySelector("#mobileMenuBg");
const mobileNavBtnActive = document.querySelector("#mobileNavBtnActive");
const hourlyRateDiv = document.querySelector(".hourlyRate");

mobileNavLink.addEventListener("click", () => {
  mobileMenu.classList.add("mobileMenuVisible");
  mobileMenuBg.classList.add("mobileMenuVisible");
  mobileNavLink.classList.add("menuBtnHide");
});

mobileNavBtnActive.addEventListener("click", () => {
  mobileMenu.classList.remove("mobileMenuVisible");
  mobileMenuBg.classList.remove("mobileMenuVisible");
  mobileNavLink.classList.remove("menuBtnHide");
});

const handleRadioValueChange = (value) => {
  if(value === "Hiring") {
    hourlyRateDiv.style.display = "block";
  } else {
    hourlyRateDiv.style.display = "none";
  }
}

const downloadCV = () => {
  let link = document.createElement("a");
  link.download = "Aryan_Patel_Resume.pdf";
  link.href = window.location.origin + "/assets/Resume.pdf";
  link.click();
}