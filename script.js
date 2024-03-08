const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform form validation
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Send the form data to the server (replace this with your server-side code)
    const formData = new FormData(form);
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Your message has been sent successfully!');
            form.reset();
        } else {
            alert('An error occurred while sending your message. Please try again later.');
        }
    })
    .catch(error => {
        alert('An error occurred while sending your message. Please try again later.');
        console.error('Error:', error);
    });
});

// Hamburger menu:
const toggleNav = document.querySelector('.toggle-nav');
const navLinks = document.querySelectorAll('nav ul li a');
const navMenu = document.querySelector('nav ul');

toggleNav.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});
