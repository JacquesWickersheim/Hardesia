$(window).on('load', function(){
    $('#TitreLogo1').delay(1000).fadeIn('1000').delay(1000).slideUp(1000, function(){
        $('#img').removeClass('d-none').delay(1000)
        $('#img').delay(1000).fadeIn('1000').delay(1000).slideUp(1000, function(){
            $('#image2').delay(1000).fadeIn('1000').delay(1000).slideUp(1000, function(){
                redirect()
            })
        })
    })
});

function redirect(){
    document.location.href = "accueil"
}