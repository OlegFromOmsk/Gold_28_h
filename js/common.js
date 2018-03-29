$(function() {

	$('#my-menu').mmenu({
		configuration: {hardwareAcceleration: false}, 
		extensions: ['theme-dark', 'fx-menu-slide', 'pagedim-black'],
		'navbar': {
			title: '<img src="img/footer_logo.png">'
		},
		"offCanvas": {
			position : "right"
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind( "open:finish", function() {
         $('.hamburger').addClass("is-active");
    });
    api.bind( "close:finish", function() {
         $('.hamburger').removeClass("is-active");
    });

	$('.mm-listview li a').bind('click',function(event){   //Прикрепляем обработчик к событию клика по ссылке в меню
		var $anchor = $(this);                         //записываем ссылку, по которой кликнули в переменную
		API.bind('close:finish', function() {          //Прикрепляем обработчик к событию завершения анимации закрытия меню
			$('html, body').stop().animate({       //функция анимации плавного перехода по якорю
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000,'easeInOutExpo');
		});
	});

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

	var porto = $('#porto_car').owlCarousel({
		loop: true,
		items: 1,
		margin: 15,
		dots: true,
		autoplay: false,
		smartSpeed: 700
	});

	/* animate filter */
	var owlAnimateFilter = function(even) {
		$(this)
		.addClass('__loading')
		.delay(70 * $(this).parent().index())
		.queue(function() {
			$(this).dequeue().removeClass('__loading')
		})
	}

	$('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
		var filter_data = $(this).data('filter');
		console.log(filter_data);
		/* return if current */
		if($(this).hasClass('btn-active')) return;

		/* active current */
		$(this).addClass('btn-active').siblings().removeClass('btn-active');

		/* Filter */
		porto.owlFilter(filter_data, function(_owl) { 
			$(_owl).find('.item').each(owlAnimateFilter); 
		});
	})

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
