$( document ).ready(function() {
    // инициализация html-элементов
    $('.header__select').niceSelect();
    
    $( ".slider-1 .slider__body" ).slider({
        range: false,
        min: 10,
        max: 1000,
        value: 70,
        range: "min",
        step: 1,
        slide: function( event, ui ) {
            var val = ui.value !== 1000 ? ui.value : '1 000';
            $( ".slider-1 .slider__title_summ" ).html( val + ' 000 ₽');
        }
    });

    $( ".slider-2 .slider__body" ).slider({
        range: false,
        min: 5,
        max: 120,
        value: 14,
        range: "min",
        step: 1,
        slide: function( event, ui ) {
            var fullMonth = parseInt(ui.value / 30, 10);
            var cleanDays = ui.value - fullMonth * 30;
            var mounts = '', days = '';
            switch (fullMonth) {
                case 0:
                    break;
                case 1:
                    mounts = fullMonth + ' месяц ';
                    break;
                default:
                    mounts = fullMonth + ' месяца ';
                    break;
            }
            switch (parseInt(`${cleanDays}`.split('')[`${cleanDays}`.split('').length - 1], 10)) {
                case 0:
                    days = '';
                    break;
                case 1:
                    days = cleanDays + ' день';
                    break;
                case 2:
                    days = cleanDays + ' дня';
                    break;
                case 3:
                    days = cleanDays + ' дня';
                    break;
                case 4:
                    days = cleanDays + ' дня';
                    break;
                default:
                    days = cleanDays + ' дней';
                    break;
            }
            switch (cleanDays) {
                case 11:
                    days = cleanDays + ' дней';
                    break;
                case 12:
                    days = cleanDays + ' дней';
                    break;
                case 13:
                    days = cleanDays + ' дней';
                    break;
                case 14:
                    days = cleanDays + ' дней';
                    break;
                case 10:
                    days = cleanDays + ' дней';
                    break;
                case 20:
                    days = cleanDays + ' дней';
                    break;
                case 30:
                    days = cleanDays + ' дней';
                    break;
            }
            $( ".slider-2 .slider__title_summ" ).html(mounts + days);
        }
    });
});