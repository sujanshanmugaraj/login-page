const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});


loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});


iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});

// Get references to the link and content elements
const aboutLink = document.getElementById("about-link");
const aboutContent = document.getElementById("about-content");

// Add a click event listener to the "About" link
aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Update the content with "Sujan here"
    aboutContent.innerHTML = "<p>Sujan here</p>";
});
