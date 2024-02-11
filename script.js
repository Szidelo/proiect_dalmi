function printMessage() {
    document.getElementById('output').innerHTML = 'Thank you for your message, don&apos;t forget to check your email!'
    
}

const linkedinImg = document.getElementById('linkedin');
function openLinkedin () {
    window.open('https://linkedin.com', '_blank')
}
linkedinImg.addEventListener('click', openLinkedin);

const facebookImg = document.getElementById('facebook');
function openFacebook () {
    window.open('https://facebook.com', '_blank')
}
facebookImg.addEventListener('click', openFacebook);

const instagramImg = document.getElementById('instagram');
function openInstagram () {
    window.open('https://instagram.com', '_blank')
}
instagramImg.addEventListener('click', openInstagram);