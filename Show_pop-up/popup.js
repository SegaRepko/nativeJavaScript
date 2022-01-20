//1. Объявляю переменные. В переменную popupLinks получаю все обьекты с классом popup-link
const popupLinks = document.querySelectorAll('.popup-link');
//2. Объявляю переменную и получаю тег body, это нужно чтобы блокировать скрол body. 
const body = document.querySelector('body');
//3. Получаю все обьекты с классом lock-padding.
const lockPadding = document.querySelectorAll(".lock-padding");

//4. Эта переменная нужна чтобы не было двоиных нажатий. 
let unlock = true;

//5. Эта переменная также нужна для блокировки скрола
const timeout = 800;


//6. Делаю проверку, существуют ли такие обьекты popupLinks на странице 
if (popupLinks.length > 0) {
    // включаю цикл и бегаю по всем этим ссылочкам 
    for (let index = 0; index < popupLinks.length; index++) {
            // получаю каждую в переменную popupLink и вешаю на нее событие "click"
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            // при клике мы убираем из атрибута href значение # и получаю чистое имя 'popup' 
            const popupName = popupLink.getAttribute('href').replace('#', '');
            // далее получаю сам обьект popup в переменную curentPopup
            const curentPopup = document.getElementById(popupName);
            // далее уже полученный готовый обьект отправляю в функцию popupOpen, которая и будет открывать попап 
            popupOpen(curentPopup);
            // блокируем дальнейшую работу ссылки
            e.preventDefault();
        });
    }
}

// Код для закрытия попапа. Суть такая же как и код по открытию. 
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            //при клике отправляю функция popupClose обьект, который есть ближайшим родителям класса popup
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

// передаем готовый обьект по имени (идентификатору)
function popupOpen (curentPopup) {
    // проверяем, есть ли такой обьек и проверяет открыта ли переменная unlock
    if (curentPopup && unlock) {
        // далее закрываю открытый popup
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
    // к попапу добавляем класс open и он открывается 
        curentPopup.classList.add('open');
    // попапу который открылся, вешаю собитые при клике 
        curentPopup.addEventListener("click", function (e) {
    // отсекаю все, кроме темной области. Проверяю, если у обьекта нет класса popup__content, тогда мы попап закрываем
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}


function popupClose (popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}


function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
    unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener ('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});




// материал для изучения брал из https://www.youtube.com/watch?v=qoO1ZNi1LyI&t=1355s&ab_channel=%D0%A4%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8-IT%D0%B8%D1%84%D1%80%D0%B8%D0%BB%D0%B0%D0%BD%D1%81