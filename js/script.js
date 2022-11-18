//slider
const slider = document.querySelector(".slider__row")
const clientWidth = document.body.clientWidth;
if(slider){
    if (clientWidth > 1900){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 8,
                arrows: true,
            });
        });
    }
    else if (clientWidth > 1700){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 6,
                arrows: true,
            });
        });
    }
    else if (clientWidth > 1440){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 4,
                arrows: true,
            });
        });
    }
    else if (clientWidth > 1280){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 3,
                arrows: true,
            });
        });
    }
    else if ( clientWidth > 992){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 3,
                arrows: true,
            });
        });
    }
    else if (clientWidth > 625){
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 2,
                arrows: true,
            });
        });
    }
    else{
        $(document).ready(function(){
            $('.slider__row').slick({
                infinite: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                arrows: true,
            });
        });
    }
}
//Бургер
$(document).ready(function(){
    $('.header__burger').click(function name(event) {
        $('.header__burger,.header__menu').toggleClass('burger-active');
    });
});

$(document).ready(function(){
    $('.header__burger').click(function name(event) {
        $('.header__burger,.header__read').toggleClass('burger-active');
    });
});

//Вкалдки на странице чтения 
$(document).ready(function(){
    $('.header-list').click(function name(event) {
        if ($('.header-settings-hover').hasClass('hover__active')) {
            $('.header-settings-hover').removeClass('hover__active');
            $('.header-settings').toggleClass('hover__active');
        }
        setTimeout(() => {
            $('.header-list-hover').toggleClass('hover__active');
            $('.header-list').toggleClass('hover__active');
        }, 300);
        if ($('.header-settings-hover').hasClass('hover__active') || $('.header-list-hover').hasClass('hover__active')){
            $('.read__page').removeClass('hover__active')
        }
        else{
            $('.read__page').addClass('hover__active')
        }
    });

    $('.header-settings').click(function name(event) {
        if($('.header-list-hover').hasClass('hover__active')){
            $('.header-list-hover').removeClass('hover__active');
            $('.header-list').toggleClass('hover__active');
        }
        setTimeout(() => {
            $('.header-settings-hover').toggleClass('hover__active');
            $('.header-settings').toggleClass('hover__active');
        }, 300);
        if ($('.header-settings-hover').hasClass('hover__active') || $('.header-list-hover').hasClass('hover__active')){
            $('.read__page').removeClass('hover__active')
        }
        else{
            $('.read__page').addClass('hover__active')
        }
    });

});

//НАСТРОЙКИ СТРАНИЦЫ ЧТЕНИЯ
//настройки цвета и текста
try {
    const btnWhite = document.getElementById('btn__white');
    const btnLinen = document.getElementById('btn__linen');
    const btnMaize = document.getElementById('btn__maize');
    const btnGrey = document.getElementById('btn__grey');
    const btnBlack = document.getElementById('btn__black');
    const readPage = document.querySelector('.read__page')
    const readPageText = document.querySelectorAll('.read__page-text')

    btnWhite.addEventListener('click', () =>{
        readPage.style.cssText = `
        background: $white;`;
        for (const text of readPageText) {
            text.style.cssText = `
            color: #1B1717;`;
        }
    })
    btnLinen.addEventListener('click', () =>{
        readPage.style.cssText = `
        background: #F5F1E5;`;
        for (const text of readPageText) {
            text.style.cssText = `
            color: #1B1717;`;
        }
    })
    btnMaize.addEventListener('click', () =>{
        readPage.style.cssText = `
        background: #E5CF9D; `;
        for (const text of readPageText) {
            text.style.cssText = `
            color: #1B1717;`;
        }
    })
    btnGrey.addEventListener('click', () =>{
        readPage.style.cssText = `
        background: #434751;`;
        for (const text of readPageText) {
            text.style.cssText = `
            color: #DBDBDB;`;
        }
    }) 
    btnBlack.addEventListener('click', () =>{
        readPage.style.cssText = `
        background: #141414;`;
        for (const text of readPageText) {
            text.style.cssText = `
            color: #DBDBDB;`;
        }
    })

    // настройки размера шрифта
    $('#seek').change(function(){
        var number = $(this).val();
        for (const text of readPageText) {
            $(text).css({
                'font-size': number + 'px'
            })
        }
    });

    // настройки интервала
    $('#line-height').change(function(){
        var number = $(this).val();
        for (const text of readPageText) {
            $(text).css({
                'line-height': number + 'px'
            })
        }
    });

    // отступ абзацев
    $('#text-indent').change(function(){
        var number = $(this).val();
        for (const text of readPageText) {
            $(text).css({
                'text-indent': number + 'px'
            })
        }
    });

    // отступ между абзацев
    $('#margin-bottom').change(function(){
        var number = $(this).val();
        for (const text of readPageText) {
            $(text).css({
                'margin-bottom': number + 'px'
            })
        }
    });
    
} catch (error) {
    
}

// Настройка инпутов

function fontSize() {
    var val = $('.font-size').val();
    document.querySelector('.insert-font').innerHTML = val + 'px';
    val = (val-12)*5.55;
    $('.font-size').css({'background': 'linear-gradient(90deg, #F9452D 0%, #E81970 '+val+'%, #8f8d8d '+val+'%, #8f8d8d 100%)'});
}

function lineHeight() {
    var val = $('.line-height').val();
    document.querySelector('.insert-height').innerHTML = val + 'px';
    val = (val-12)*5.55;
    $('.line-height').css({'background': 'linear-gradient(90deg, #F9452D 0%, #E81970 '+val+'%, #8f8d8d '+val+'%, #8f8d8d 100%)'});
}


function textIndent() {
    var val = $('.text-indent').val();
    document.querySelector('.insert-indent').innerHTML = val + 'px';
    val = (val*100)/30;
    $('.text-indent').css({'background': 'linear-gradient(90deg, #F9452D 0%, #E81970 '+val+'%, #8f8d8d '+val+'%, #8f8d8d 100%)'});
}

function marginBottom() {
    var val = $('.margin-bottom').val();
    document.querySelector('.insert-margin').innerHTML = val + 'px';
    val = (val*100)/30;
    $('.margin-bottom').css({'background': 'linear-gradient(90deg, #F9452D 0%, #E81970 '+val+'%, #8f8d8d '+val+'%, #8f8d8d 100%)'});
}

// Анимация табов у пользовтеля

try {
    const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
    const tabsItem = document.querySelectorAll('.tabs__item');
    function tabClick(item){
        item.addEventListener("click", function(){
            let currBtn = item;
            let tabId = currBtn.getAttribute('data-tab');
            let currTab = document.querySelector(tabId);

            if(!currBtn.classList.contains('active')){
                tabsBtn.forEach(function(item){
                    item.classList.remove('active')
                });
                tabsItem.forEach(function(item){
                    item.classList.remove('active')
                })
                currBtn.classList.add('active');
                currTab.classList.add('active');
            };
        });
    };

    tabsBtn.forEach(tabClick);
} catch (error) {};

try {
    const itemAsideLink = document.querySelectorAll('.item__aside__link');
    const itemInner = document.querySelectorAll('.item__inner');
    function tabClick(itemLink){
        itemLink.addEventListener("click", function(){
            let currentLink = itemLink;
            let currentTabId = currentLink.getAttribute('data-tab');
            let currentTab = document.querySelector(currentTabId);

            if(!currentLink.classList.contains('aside__active')){
                itemAsideLink.forEach(function(itemLink){
                    itemLink.classList.remove('aside__active')
                });
                itemInner.forEach(function(itemLink){
                    itemLink.classList.remove('aside__active')
                })
                currentLink.classList.add('aside__active');
                currentTab.classList.add('aside__active');
            };
        });
    };

    itemAsideLink.forEach(tabClick);
} catch (error) {};

// Перестройка грид элемента selections__row
try {
    const selectionsRow = document.querySelector('.selections__row');
    const selectionsTwoSpanFour = document.getElementById("selections__four");
    const selectionsTwoSpanSix = document.getElementById("selections__six");
    if (clientWidth < 1448 && clientWidth > 1070){
        // перестраиваем блок на 2 яччейик
        selectionsTwoSpanFour.classList.remove('selections__one-span');
        selectionsTwoSpanFour.classList.add('selections__item', 'selections__two-span');
        // получаем, клонируем и размещаем картики
        selectionsTwoSpanImageSecond = selectionsTwoSpanFour.firstElementChild;
        selectionsTwoSpanImageFirst = selectionsTwoSpanImageSecond.cloneNode(true);
        selectionsTwoSpanImageThird = selectionsTwoSpanImageSecond.cloneNode(true);
        selectionsTwoSpanImageFirst.classList.add('selections__img', 'selections__first-img');
        selectionsTwoSpanImageSecond.classList.add('selections__img', 'selections__second-img');
        selectionsTwoSpanImageThird.classList.add('selections__img', 'selections__third-img');
        selectionsTwoSpanFour.insertBefore(selectionsTwoSpanImageFirst, selectionsTwoSpanImageSecond);
        selectionsTwoSpanFour.appendChild(selectionsTwoSpanImageThird);
    } else if (clientWidth < 1070 ){
        // меняем расположение блоков
        selectionsRow.removeChild(selectionsTwoSpanSix);
        selectionsRow.insertBefore(selectionsTwoSpanSix, selectionsTwoSpanFour);
    } 
    if (clientWidth < 768) {
        selectionsRowChild = selectionsRow.children;
        for (let node of selectionsRowChild){
            node.classList.remove('selections__two-span');
            node.classList.add('selections__one-span');
        }
    }
} catch (error) {
    
}
