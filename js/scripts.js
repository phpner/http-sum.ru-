$(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$("button[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
    


	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	/* sliders */

	$(".reviews_list").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false
	});

	/* categories */

	$(".categories_list li").click(function () {
		$(".categories_list li").removeClass("active");
		$(this).addClass("active");
		var category = $(this).attr("data-category");
		$(".products_list").addClass("hide");
		$("."+category).removeClass("hide");
	});


	$(".btn_js").on("click",function(){
		var op=$(this).attr("data-open");
		$("#tov"+op).fadeOut();
		$("#cart"+op).fadeIn();
	});

	$(".close_cart").on("click",function(){
		var op=$(this).attr("data-close");
		$("#tov"+op).fadeIn();
		$("#cart"+op).fadeOut();
	});



   $( window ).resize(function() {

        var w = $(window).width();
        if(w > 720 && $(".menu-holder").is(":hidden") ){
            $(".menu-holder").removeAttr('style');
        }
        menuscroll();

    });
    menuscroll();
    function menuscroll() {

        $(document).on('scroll', function (event) {
            if ($('.top-menu-fix')[0].offsetTop < $(document).scrollTop()){
                if( $(window).innerWidth() > 720 ) {
                    $(".top-menu-fix").css({position: "fixed", top: 0});
                }else{
                    $(".top-menu-fix").css({position: "static", top: 0});  $("#nav-icon").css({position: "fixed", top:"24px"});
                }

            }

            if ( $(document).scrollTop() == $(".top-menu-fix")[0].offsetTop){
                $(".top-menu-fix").css({position: "static", top: 0}) ;

            }
            if( ($(document).scrollTop() -30) <= $("#nav-icon")[0].offsetTop){
                $("#nav-icon").css({position: "absolute", top: "24px"});
            }
        });
    }


    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".menu-holder").toggle();
        $(".component-menu ul ").addClass('mob');

        $(".mob a").click(function(){
            $("#nav-icon").removeClass('open');
            $(".menu-holder").css({display: "none"});
        });
    });
    /*popup fonr*/
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    /*thanks*/

    var h = window.location.hash.replace(/\#/g, '')

    if (h == 'thanks'){
        $(".overlay_in").fadeIn(200);
        window.location.hash = '';
        setTimeout(function () {
            $(".overlay_in").fadeOut(200);
        },3000)
    }

});