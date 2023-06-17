let form = document.querySelector("#loginForm");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let contact = {};
  let username = document.querySelector("#userName");
  let email = document.querySelector("#userEmail");
  let subject = document.querySelector("#userSubject");
  let text = document.querySelector("#userText");
  let button = document.querySelector("#formBtn");
  let msg = document.querySelector(".msg");
  msg.textContent = "";
  if (username.value == "" || email.value == "" || subject.value === "" ||text.value == "") {
    msg.textContent = "Please Fill Out The Input!";
  }
  contact.name = username.value ;
  contact.email = email.value ;
  contact.subject = subject.value ;
  contact.text = text.value ;
  console.log(contact);
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
