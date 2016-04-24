var qs = {
    get: function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}

var lang = {
    register: function(){
        $('#btn-spanish').on('click', function () { lang.doSpanish(); });
        $('#btn-english').on('click', function () { lang.doEnglish(); });
        $('#back-to-blog').on('click', function () { window.history.back(); });
    },
    doEnglish: function () {
        $('#english-content').removeClass('hidden').addClass('show');
        $('#spanish-content').removeClass('show').addClass('hidden');
        $('#btn-spanish').removeClass('active');
        $('#btn-english').addClass('active');
        $('#back-to-blog').html('Return to the blog');
    },
    doSpanish: function () {
        $('#spanish-content').removeClass('hidden').addClass('show');
        $('#english-content').removeClass('show').addClass('hidden');
        $('#btn-english').removeClass('active');
        $('#btn-spanish').addClass('active');
        $('#back-to-blog').html('Regresar al blog');
    },
    isSpanish: function () {
        var res = navigator.language || navigator.userLanguage;
        return (res.indexOf('es') > -1);
    },
    init: function () {
        lang.register();
        if (lang.isSpanish())
            lang.doSpanish();
        else
            lang.doEnglish();
        if (qs.get('s') === 'blog')
            $('#blog-message').removeClass('hidden');
    }
}

$(function () {
    lang.init();
});

