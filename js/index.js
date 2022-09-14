document.addEventListener('click',(e)=>{
	if(e.target.matches(".navbar-toggler")){
        alert("hola")
    document.querySelector(".navbar-toggler").style.setProperty("background","red")
    }
}


/*--------------------------------------------------------------------------------------------------
    ANIMACION INDEX
--------------------------------------------------------------------------------------------------*/
/*var $root = $('html, body');

$('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
    return false;
});*/