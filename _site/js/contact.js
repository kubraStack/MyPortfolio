/* =============EMAIL JS================= */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('kubra3014','template_1','#contact-form','IP1bfCfy3dmxdGUQ9')
        .then(() => {
            //Show sent message
           contactMessage.textContent = 'Message sent successfully !';
            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            },5000);
            //Clear input fields
            contactForm.reset() 
        }, () => {
            //Show error message
            contactMessage.textContent = "Oops! Something went wrong.";
        })

}
contactForm.addEventListener('submit',sendEmail)