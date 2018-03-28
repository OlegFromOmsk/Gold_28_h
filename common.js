$(function() {

	$(".footer-ajax-form").submit(function() { 
	    var th = $(this);
	    $.ajax({
	      type: "POST",
	      url: "mail.php", 
	      data: th.serialize()
	    }).done(function() {
	      alert("Спасибо за заявку!");
	      setTimeout(function() {
	        th.trigger("reset");
	        $.magnificPopup.close();
	      }, 1000);
	    });
	    return false;
	});

	// карта Yandex maps API. по умолчанию адрес 'пр. Мира, д. 89'
	var str_adress='ул. Калиновского, д. 3';
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
	};

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

	var c1 = 0.8;
	var c2 = 0.75;
	var c3 = 0.6;

	var circle1 = $('#circle1').circleProgress({
		value: c1,
	    reverse: true,
	    startAngle: -Math.PI/2,
	    thickness: 3,
	    fill: {
	      color: '#eaa840'
	    }
	});
	var circle2 = $('#circle2').circleProgress({
		value: c2,
	    reverse: true,
	    startAngle: -Math.PI/2,
	    thickness: 3,
	    fill: {
	      color: '#eaa840'
	    }
	});
	var circle3 = $('#circle3').circleProgress({
		value: c3,
	    reverse: true,
	    startAngle: -Math.PI/2,
	    thickness: 3,
	    fill: {
	      color: '#eaa840'
	    }
	});

	circle1.on('circle-animation-progress', function(e, v) {
	  var obj = $(this).data('circle-progress'),
	      ctx = obj.ctx,
	      s = obj.size,
	      sv = (c1*100 * v).toFixed(),
	      fill = obj.arcFill;

	  ctx.save();
	  ctx.font = s / 4 + "px sans-serif";
	  ctx.textAlign = 'center';
	  ctx.textBaseline = 'middle';
	  ctx.fillStyle = fill;
	  ctx.fillText(sv, s / 2, s / 2);
	  ctx.restore();
	});
	circle2.on('circle-animation-progress', function(e, v) {
	  var obj = $(this).data('circle-progress'),
	      ctx = obj.ctx,
	      s = obj.size,
	      sv = (c2*100 * v).toFixed(),
	      fill = obj.arcFill;

	  ctx.save();
	  ctx.font = s / 4 + "px sans-serif";
	  ctx.textAlign = 'center';
	  ctx.textBaseline = 'middle';
	  ctx.fillStyle = fill;
	  ctx.fillText(sv, s / 2, s / 2);
	  ctx.restore();
	});
	circle3.on('circle-animation-progress', function(e, v) {
	  var obj = $(this).data('circle-progress'),
	      ctx = obj.ctx,
	      s = obj.size,
	      sv = (c3*100 * v).toFixed(),
	      fill = obj.arcFill;

	  ctx.save();
	  ctx.font = s / 4 + "px sans-serif";
	  ctx.color = '#fff';
	  ctx.textAlign = 'center';
	  ctx.textBaseline = 'middle';
	  ctx.fillStyle = fill;
	  ctx.fillText(sv, s / 2, s / 2);
	  ctx.restore();
	});

});
