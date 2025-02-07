// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in Animation
const observer = new IntersectionObserver(
entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
},
{ threshold: 0.1 }
);

document.querySelectorAll('section, .project').forEach(element => {
  element.classList.add('hidden');
  observer.observe(element);
});

// Typing & Scrolling Effect for Header
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#animated-text", {
      strings: [
          "I am <span class='highlight'>SUMIT</span>",
          "I am <span class='highlight'>Developer</span>",
          "I am <span class='highlight'>Creative</span>",
      ],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1000,
      startDelay: 0,
      loop: true,  // Infinite loop of typing
      showCursor: false,
      smartBackspace: true,  // Ensure smooth backspacing
  });
});


// Contact Form Submission
var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

if (!name || !email || !message) {
  alert('Please fill out all fields.');
  return;
}

if (!validateEmail(email)) {
  alert('Please enter a valid email address.');
  return;
}

sendEmail(name, email, message);
});

function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

function sendEmail(name, email, message) {
emailjs.send("Stayhard#01", "StayhardTemplate#01", {
  user_name: name,
  user_email: email,
  message: message
})
.then(function(response) {
  console.log('SUCCESS!', response);
  alert('Thank you for reaching out! Your message has been sent.');
  contactForm.reset();
})
.catch(function(error) {
  console.error('FAILED...', error);
  alert(`Something went wrong: ${error.text}. Please try again later.`);
});
}

// Back to Top Button
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  backToTopBtn.style.display = "block";
} else {
  backToTopBtn.style.display = "none";
}
};

backToTopBtn.onclick = function() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
};
