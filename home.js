



$(function() {
    var menu_bg=document.getElementById('nav-sticky-top');
    var menu=document.getElementsByClassName('color-white');
    var btn_menu_toggler=document.getElementsByClassName('navbar-toggler');
    var cta1=document.getElementById('cta1');
    var cta2=document.getElementById('cta2');
	
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >0) {
            menu_bg.classList.add('shadow');
            cta1.classList.add('HOVER2');
            cta1.classList.remove('HOVER3');
            cta1.classList.remove('FLASH3');
            cta2.classList.add('HOVER2');
            cta2.classList.remove('HOVER3');
            cta2.classList.remove('FLASH3');
            btn_menu_toggler[0].classList.add('bg-white');
            menu[0].classList.add('text-white');
            menu[1].classList.add('text-white');
            menu[2].classList.add('text-white');
            menu[3].classList.add('text-white');
            menu[4].classList.add('text-white');


    

    
        } else {
        menu_bg.classList.remove('shadow');
        cta1.classList.remove('HOVER2');
        cta1.classList.add('HOVER3');
        cta1.classList.add('FLASH3');
        cta2.classList.remove('HOVER2');
        cta2.classList.add('HOVER3');
        cta2.classList.add('FLASH3');
        btn_menu_toggler[0].classList.remove('bg-white');
        menu[0].classList.remove('text-white');
        menu[1].classList.remove('text-white');
        menu[2].classList.remove('text-white');
        menu[3].classList.remove('text-white');
        menu[4].classList.remove('text-white');
        }
    });
});


// hover cta

const ANIMATEDCLASSNAME = "animation";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	if (element.classList[1] == "FLASH") {
		element.addEventListener("animationend", w => {
			element.classList.remove(ANIMATEDCLASSNAME);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", w => {
		ELEMENTS_SPAN[index].style.left = w.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = w.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", w => {
		ELEMENTS_SPAN[index].style.left = w.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = w.pageY - element.offsetTop + "px";
	});
});




// hover cta in nav


const ANIMATEDCLASSNAME2 = "animation2";
const ELEMENTS2 = document.querySelectorAll(".HOVER3");
const ELEMENTS_SPAN2 = [];

ELEMENTS2.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	if (element.classList[1] == "FLASH3") {
		element.addEventListener("animationend", e => {
			element.classList.remove(ANIMATEDCLASSNAME2);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN2[index])
		ELEMENTS_SPAN2[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN2[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN2[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME2);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN2[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN2[index].style.top = e.pageY - element.offsetTop + "px";
	});
});






new WOW().init();

$('.counter').counterUp({
    delay: 10,
    time: 2000
});

