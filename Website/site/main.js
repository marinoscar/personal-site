var lang = {
    register: function(){
        $('#btn-spanish').on('click', function () { lang.doSpanish(); });
        $('#btn-english').on('click', function () { lang.doEnglish(); });
    },
    doEnglish: function () {
        $('#english-content').removeClass('hidden').addClass('show');
        $('#spanish-content').removeClass('show').addClass('hidden');
        $('#btn-spanish').removeClass('active');
        $('#btn-english').addClass('active');
    },
    doSpanish: function () {
        $('#spanish-content').removeClass('hidden').addClass('show');
        $('#english-content').removeClass('show').addClass('hidden');
        $('#btn-english').removeClass('active');
        $('#btn-spanish').addClass('active');
    },
    isSpanish: function () {
        var res = navigator.language || navigator.userLanguage;
        return (res.indexOf('es') > -1);
    },
    init: function () {
        lang.register();
        if (lang.isSpanish()) {
            lang.doSpanish();
        }
    }
}

$(function () {
    lang.init();
});

