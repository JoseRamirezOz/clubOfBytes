document.addEventListener('click',(e)=>{
	if(e.target.matches(".navbar-toggler")){
        console.log("HOLA")
        document.querySelector(".navbar-toggler").style.setProperty("outline","none !important")
        document.querySelector(".navbar-toggler").style.setProperty("border","none !important")
    }}
)

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