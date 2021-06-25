const loaded = (function() {
	$('.lodingTitle').removeClass('action');
});

// if (window.matchMedia( "(max-width: 768px)" ).matches) {
if (window.matchMedia( "(max-width: 600px)" ).matches) {
	loaded();
} else {
	$(function() {
		$('#wrapper, footer').animate({
			'opacity':  0,
			'visibility' : 'hidden'
		},0);
	});
	$(window).on('load',function () {
		setTimeout(function() {
			loaded();
			$('#wrapper, footer').animate({
				'opacity' : 1,
				'visibility' : 'visible'
				},3000);
			},3000);
		});
		setTimeout(function() {
			loaded();
		},10000);
}


$(function() {
	$('.headerTop li a').each(function() {
   const backColor = $(this).css('backgroundColor');
   const fontColor = $(this).css('color');

    $('.headerTop li a').hover(
	    function() {
		    $(this).stop().animate({
			    'background-color' : '#333',
			    'color' : '#fff'
		      },500);
	  },
	     function() {
		    $(this).stop().animate({
			    'background-color' : backColor,
			    'color' : fontColor
		      },500);
	     });
	});

	$(document).on('click', '.scrollButton, #thirdSectionContentButtonId', function() {

		const menuAttribute = $(this).attr('href');
		
		if ( $('.scrollButton').is(this) ) {
			const menuPosition = $(menuAttribute).offset().top -95;
			$('html,body').animate({
				'scrollTop': menuPosition
			},800);
		} else if ( $('#thirdSectionContentButtonId').is(this) ) {
			$('html,body').animate({
				'scrollTop': 0
			},800);
		}
	});
});

		/* --------------------一文字ずつアニメーション-------------------- */

function thankMessage() {

	const animationTargetElements = document.querySelector(".animationMessage");
	
		const targetElement = animationTargetElements;
		texts = targetElement.textContent,
		textsArray = [];
		
		targetElement.textContent = "";
		
		for (let j = 0; j < texts.split("").length; j++) {
			const t = texts.split("")[j];
			if (t === " ") {
				textsArray.push("  ");
			} else {
				textsArray.push('<span style="animation-delay: ' + ((j * .2) + .3) + 's;">' + t + '</span>');
			}
		}
		
		for (let k = 0; k < textsArray.length; k++) {
			targetElement.innerHTML += textsArray[k];
		}
	}
const scrollEvent = function() {
	window.addEventListener("scroll", function func() {
    let scrollValue = window.pageYOffset;
		let scrollEle = document.querySelector(".fourthSection");
		let scrollTops = scrollEle.getBoundingClientRect().top + scrollValue;
		let windowHeight = window.innerHeight;
		const scrollAll = scrollTops - windowHeight + 500;
	if (scrollValue >= scrollAll) {
	  thankMessage();
		this.removeEventListener("scroll", func);
	}
	});
};
scrollEvent();

		/* --------------------トップ画面にスクロール-------------------- */
		const logTopScrollButton = document.getElementById('logTopScrollButton');
		logTopScrollButton.addEventListener('click' ,(e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0, 
		  left: 0,
			behavior: 'smooth'});
	});

