// script.js
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "dE-B1ad6w32htDiJB",
    });
})();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform form validation
    if (nameInput.value.trim() === '') {
        alert('Merci de renseigner votre nom.');
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Merci de renseigner votre adresse email.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Votre message est vide. Merci de le compléter.');
        return;
    }

    // Send the form data to the server (replace this with your server-side code)
    // const formData = new FormData(form);
    emailjs.send("service_bduhepx","template_zpfyhre",{
            from_name: nameInput.value,
            message: messageInput.value,
            reply_to: emailInput.value,
    })
    .then(response => {
        if (response.ok) {
            console.log('Success:', response);
            alert('Votre message a bien été envoyé. Merci !');
            form.reset();
        } else {
            alert('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
        }
    })
    .catch(error => {
        alert('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
        console.error('Error:', error);
    });
});

// Hamburger menu:
const toggleNav = document.querySelector('.toggle-nav');
const navLinks = document.querySelectorAll('nav ul li a');
const navMenu = document.querySelector('nav ul');
const header = document.querySelector('header');

toggleNav.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    header.classList.toggle('header-hidden');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        header.classList.remove('header-hidden');
    });
});

// Ajoutez cet événement pour fermer le menu lorsque l'on reclique sur le bouton burger
toggleNav.addEventListener('click', (event) => {
    if (navMenu.classList.contains('show')) {
        event.stopPropagation();
    }
});

// to collapse the menu if click outside
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!toggleNav.contains(target) && !navMenu.contains(target)) {
        navMenu.classList.remove('show');
        header.classList.remove('header-hidden');
    }
});
