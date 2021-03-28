$(function () {
    const wrapper = document.querySelector('.wrapper');
    time = new Date();

    $('.slider__wrapper').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="icons/arrow_next.webp" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="icons/arrow_prev.webp" alt="prev arrow"></button>',
        dots: true,
        dotsClass: 'slick-dots'
    });

    wrapper.classList.add('footer__year');
    wrapper.textContent = "Copyright ";
    wrapper.append(time.getFullYear());

});




