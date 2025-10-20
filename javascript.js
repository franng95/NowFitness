function toggleNavigationMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const messageBox = document.getElementById('messageBox');
    const messageContent = document.getElementById('messageContent');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        messageBox.style.display = 'block';
        messageContent.textContent = 'Please fill in all fields.';
        messageContent.style.color = 'red';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        messageBox.style.display = 'block';
        messageContent.textContent = 'Please enter a valid email address.';
        messageContent.style.color = 'red';
    } else {
        messageBox.style.display = 'block';
        messageContent.textContent = 'Thank you for contacting us!';
        messageContent.style.color = 'green';
    }
});
