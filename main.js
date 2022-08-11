const mobileNavLink = document.querySelector("#mobileNavBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuBg = document.querySelector("#mobileMenuBg");
const mobileNavBtnActive = document.querySelector("#mobileNavBtnActive");
const hourlyRateDiv = document.querySelector(".hourlyRate");
const submitBtn = document.querySelector(".submitBtn");
const contactForm = document.querySelector("#contactForm");

//to open navigation menu in mobile device
mobileNavLink.addEventListener("click", () => {
  mobileMenu.classList.add("mobileMenuVisible");
  mobileMenuBg.classList.add("mobileMenuVisible");
  mobileNavLink.classList.add("menuBtnHide");
});

//to close navigation menu in mobile device
mobileNavBtnActive.addEventListener("click", () => {
  mobileMenu.classList.remove("mobileMenuVisible");
  mobileMenuBg.classList.remove("mobileMenuVisible");
  mobileNavLink.classList.remove("menuBtnHide");
});

//on click of submit api call will be done from this function
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const reqData = {};
  for (let i = 0; i < contactForm.length - 1; i++) {
    if(contactForm.elements[i].name.includes("user")) {
      reqData[contactForm.elements[i].name] = contactForm.elements[i].value;
    }
  }
  reqData["userInquiryType"] = document.querySelector('input[name="inquiry_type"]:checked').value;
  if(reqData.userInquiryType === "Hiring") {
    reqData["userHourlyRate"] = document.querySelector('input[name="hourlyrate"]').value;
  }
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqData)  
  }).then(res => {
    if(res.status === 200) {
      alert("Thanks for reaching out to me");
    }
  });
});

//hourly rate input toggle
const handleRadioValueChange = (value) => {
  if(value === "Hiring") {
    hourlyRateDiv.style.display = "block";
  } else {
    hourlyRateDiv.style.display = "none";
  }
}

//resume download
const downloadCV = () => {
  let link = document.createElement("a");
  link.download = "Aryan_Patel_Resume.pdf";
  link.href = window.location.origin + "/assets/Resume.pdf";
  link.click();
}