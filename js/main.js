$(document).ready(function(){
	/*var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	  // Do something else, like open/close menu
	});*/

	carousel();		/*Disfruto de...*/

	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    };

    $('.efecto').on('mouseenter', function(){
		$(this).fadeTo('fast', '.4');
	});
	//Efecto para poner en gris el div que tiene el puntero encima
	$('.efecto').mouseleave(function(){
		$(this).fadeTo('fast', '1');
	});
	//Efecto para poner sin opacidad el div sobre los que no está el puntero
	$('#search').focus(function(){
		$(this).css('background-color', '#FFFFFF');
	});
	//Efecto para poner el background del input en blanco cuando está activo
	$('#search').blur(function(){
		$(this).css('background-color', '#000');
	});
	//Efecto para quitar el background blanco del input y regresarlo al color que tenía
	/*$('#aboutme').mouseleave(function(){
		$(this).after('<h2>Amanda Ray</h2>');
	});
	Cuando quita el puntero del div muestra un texto bajo ese div*/


	$('#secciones').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
        }
	});
	// Efecto entre paginas

	var i=0;
	var texto = '"Mientras tú piensas que es imposible, yo lo estoy programando"'
		function pintarLetra(){
			$('#texto').append(texto[i]);
			if (i<texto.length){
				i++;
				setTimeout(pintarLetra, 100);
			};
		};
		pintarLetra();

	//Efecto para la frase del home

	function move() {
	  var elem = document.getElementById("myBar");
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= 100) {
	      clearInterval(id);
	    } else {
	      width++;
	      elem.style.width = width + '%';
	    };
	  };
	};

	/*dropdown menu*/

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

	/*skills*/

	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

	/*PORTFOLIO*/
	$(function() {
		var $container	= $('#ib-container'),
			$articles	= $container.children('article'),
			timeout;
		
		$articles.on( 'mouseenter', function( event ) {
				
			var $article	= $(this);
			clearTimeout( timeout );
			timeout = setTimeout( function() {
				
				if( $article.hasClass('active') ) return false;
				
				$articles.not( $article.removeClass('blur').addClass('active') )
						 .removeClass('active')
						 .addClass('blur');
				
			}, 65 );
			
		});
		
		$container.on( 'mouseleave', function( event ) {
			
			clearTimeout( timeout );
			$articles.removeClass('active blur');
			
		});
	});

})


/* Slider */

var myIndex = 1;

var numeroImagen = 1;

function carousel() {
   
	var extrano = (numeroImagen + 2);
	if (extrano == 6 ) {
		extrano = 1;
	}

	var imagen1 = "img/img"  + numeroImagen +  "slider.png";
	var imagen2 = "img/img"  + (numeroImagen + 1) +  "slider.png";
	var imagen3 = "img/img"  + extrano +  "slider.png";

	$("#imgSlider1").attr("src",imagen1);
	$("#imgSlider2").attr("src",imagen2);
	$("#imgSlider3").attr("src",imagen3);

	if (extrano == 1) {
		numeroImagen = 1;
	}

	numeroImagen++;

    setTimeout(carousel, 3000); // Change image every 2 seconds
}

/* Slider texto */
//Agregar texto
// Mandar llamar arriba carouselText();		/*Disfruto de... Texto*/
/*
var myIndex = 1;

var numeroTexto = 1;

function carouselText() {
   
	var raro = (numeroTexto + 2);
	if (raro == 6 ) {
		raro = 1;
	}

	var texto1 = $("#textSlider1").append('<p>A</p>');  + numeroTexto;
	var texto2 = $("#textSlider2").append('<p>B</p>');  + numeroTexto;
	var texto3 = $("#textSlider3").append('<p>C</p>');  + numeroTexto;
	var texto4 = $("#textSlider4").append('<p>D</p>');  + numeroTexto;
	var texto5 = $("#textSlider5").append('<p>E</p>');  + numeroTexto;

	
	$("#textSlider1").attr("class",texto1);
	$("#textSlider2").attr("class",texto2);
	$('#textSlider3').css('color', '#FFFFFF');
	$('#textSlider4').css('color', '#FFFFFF');
	$('#textSlider5').css('color', '#FFFFFF');

	if (raro == 1) {
		numeroTexto = 1;
	}

	numeroTexto++;

    setTimeout(carousel, 3000); 
}
*/
/*Slider disfruto de*/

//$('.slideshow').slick();


/*function probar() {

	$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

}*/