$(document).ready(function(){

    $('.sigils').click(function(){
        let house = $(this).attr('data-house');
        $('#house_choice_display').html('house ' + house);

        $('img:not([data-house=' + house + '])').removeClass('active');
        $('img[data-house=' + house + ']').addClass('active');
    });
});

