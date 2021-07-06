const headerCityButton = document.querySelector('.header__city-button'); 

// получение "Ваш город" в header

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
    const city =prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city);
});


// Блокирока сролла

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
}

const enableScroll = () => {
    document.body.style.cssText = ``;
    window.scroll({
        top: document.body.dbScrollY
    })
}


// открытие модального окна

const subheaderCart = document.querySelector('.subheader__cart'),
    cartOverlay =document.querySelector('.cart-overlay');

    const cartModalOpen = () => {
        cartOverlay.classList.add('cart-overlay-open');
        disableScroll();
    }

    const cartModalClose =() => {
        cartOverlay.classList.remove('cart-overlay-open');
        enableScroll();
    }

    subheaderCart.addEventListener('click',cartModalOpen);    

    cartOverlay.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('cart__btn-close') || target.matches('.cart-overlay')) {
            cartModalClose();
        }

    })










