jQuery(function($){
    $('.line').width(($(window).width() - 20));
    $('body').keypress(function( event ) {
        var text = $('#command').text();
        if ( event.which == 13 ) {
            event.preventDefault();
            var command = text.split(' ')[0];
            $('#output').append('<div class="line">guest@masnug.github.io:~$ Perintah \''+command+'\' tidak ditemukan!</div>');
            $('#command').empty();
        } else {
          $('#command').append(String.fromCharCode(event.which));
        }
    }).keyup(function(event){
        var text = $('#command').text();
        if ( event.which == 8 ) {
            $('#command').html(text.slice(0,-1));
        }
    });
});