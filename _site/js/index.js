/* ==============SERVICES MODAL ==================== */
const modal = document.querySelectorAll('.services_modal'),
    modalButton = document.querySelectorAll('.services_button'),
    modalClose = document.querySelectorAll('.services_modal-close')
let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal');
}
modalButton.forEach((modalButton, i)=> {
    modalButton.addEventListener('click', () => {
        activeModal(i);
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalClose) => {
            modalClose.classList.remove('active-modal');
        })
    })
})
/* ================SWIPER TESTIMONIAL==================== */
/* ==============SHOW SCROLL UP ===================== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with scrollup class
    this.screenY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);