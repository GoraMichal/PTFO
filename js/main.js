var pContainerHeight = $('.intro-box').height();
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if (wScroll <= pContainerHeight) {
        $('.logo-image').css({
            'transform' : 'translate(0px, '+ wScroll /5 +'%)'
        });
    }
});

$(window).on("load",function() {
    $(window).scroll(function() {
        $(".fadeIn").each(function() {
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else {
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }); $(window).scroll();
});

$(function() {
    var check_1 = (Math.floor(Math.random() * 9)).toString(),
        check_2 = (Math.floor(Math.random() * 9)).toString(),
        check = check_1 + check_2;
    $('#contactform span.form_check_1').text(check_1);
    $('#contactform span.form_check_2').text(check_2);
    $('#contactform input[name="contact_check_data"]').val(check);
    var sending = false;
    $('#contactform').on('submit', function(e) {
        var $form = $(this), $submit = $('input[type="submit"]', $form);
        e.preventDefault();
        if (sending) {
            return false;
        }
        $('.form-error', $form).remove();
        $('input, textarea', $form).prop('readonly', true);
        $submit.val('Wysyłam…');
        sending = true;
        $.post($form.attr('action'), $form.serialize(), function(data) {
            if (data === 'ok') {
                $form.slideUp('fast', function() {
                    $form.after('<div class="form-success">Wiadomość została wysłana! Skontaktujemy się z Tobą jak tylko to będzie możliwe.</div>');
                });
                return true;
            }
            $form.prepend('<div class="form-error">Wystąpił błąd podczas wysyłania formularza. Upewnij się, że wypełniłeś wszystkie pola i poprawnie rozwiązałeś działanie.</div>');
            $('input, textarea', $form).prop('readonly', false);
            $submit.val('Wyślij wiadomość');
            sending = false;
            return false;
        }, 'text');
    });
});