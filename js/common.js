$(function() {

	function toTop(){
	// кнопка возврата к началу
		$('.to-top').click(function(){
            $('html, body').animate({scrollTop: 0}, 500);
        }).scroolly([
            {
                alias: 'hidden',
                minWidth: 321,
                to: 'doc-top + 40vp',
                css: {
                    opacity: '0',
                    bottom: '-100px'
                }
            },
            {
                alias: 'shown',
                minWidth: 321,
                from: 'doc-top + 40vp',
                to: 'doc-bottom',
                css: {
                    opacity: '1',
                    bottom: '30px'
                }
            }
        ]);
	}
	toTop();

	// отправка формы на сервер
	$(".button-popup").magnificPopup();

	$(".ajax-form").submit(function() { 
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", 
	      data: th.serialize()
	    }).done(function() {
		    	th.trigger("reset");
		    	th.css('opacity', '0');
				var pp_success = th.closest('.popup').find('.success');
				pp_success.fadeIn();
		      	setTimeout(function() {
		        pp_success.fadeOut();
		        $.magnificPopup.close();
		        th.css('opacity', '1');
	      	}, 2000);
	    });
	    return false;
	  });

	$(".footer-ajax-form").submit(function() { 
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", 
	      data: th.serialize()
	    }).done(function() {
		      	th.trigger("reset");
				th.closest('.popup').find('.success').fadeIn();
		      	setTimeout(function() {
		        th.closest('.popup').find('.success').fadeOut();
	    	}, 2000);
	    });
	    return false;
	});



	// карта Yandex maps API. по умолчанию адрес 'пр. Мира, д. 89'
/*	var str_adress='ул. Калиновского, д. 3';
	ymaps.ready(init);
	function init() {

	    var myMap = new ymaps.Map('map', {
	        center: [55.753994, 37.622093],
	        zoom: 16,
	        controls: []
	    });

	    ymaps.geocode(str_adress, {
	        results: 1
	    }).then(function (res) {
	        var firstGeoObject = res.geoObjects.get(0),
	            coords = firstGeoObject.geometry.getCoordinates(),
	            bounds = firstGeoObject.properties.get('boundedBy');
	        myMap.geoObjects.add(firstGeoObject);
	        myMap.setBounds(bounds, {
	            checkZoomRange: true
	        });
	    });
	};*/

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		if ($hamburger.hasClass('is-active')) {
			$(".top-mnu").addClass('drop_menu');
			$(".top-mnu").toggle();
		} else {
			$(".top-mnu").toggle();
			$(".top-mnu").removeClass('drop_menu');
		}
	});

	$('#porto_car').owlCarousel({
		loop: true,
		items: 1,
		margin: 15,
		dots: true,
		autoplay: false,
		smartSpeed: 700
	});


	$('#review_car').owlCarousel({
		loop: true,
		items: 1,
		margin: 15,
		dots: true,
		autoplay: false,
		smartSpeed: 700
	});

	$("#circle1").circliful({
        animationStep: 15,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 3,
        foregroundColor: '#eaa840', 
        backgroundColor: 'rgba(177, 116, 19,.2)',
        fontColor: '#fff'
   	});
   	$("#circle2").circliful({
        animationStep: 15,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 3,
        foregroundColor: '#eaa840', 
        backgroundColor: 'rgba(177, 116, 19,.2)',
        fontColor: '#fff'
   	});
   	$("#circle3").circliful({
        animationStep: 15,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 3,
        foregroundColor: '#eaa840', 
        backgroundColor: 'rgba(177, 116, 19,.2)',
        fontColor: '#fff'
   	});


});
