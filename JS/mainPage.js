/*
================================================
mainPage JavaScript
================================================
*/
jQuery(document).ready(function ($) {

    /*
    ===================
    타이핑 효과
    ===================
    */
    let content = "안녕하세요 :-) \n 개발자를 꿈꾸는 최송희입니다. \n";
    let text = document.querySelector(".text");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 150)

    /*
    ===================
    이미지 슬라이드
    ===================
    */
    let imgIndex = 0;
    let position = 0;
    let IMG_WIDTH = 450;
    let $btnPrev = document.querySelector(".btn-prev");
    let $btnNext = document.querySelector(".btn-next");
    let $slideImgs = document.querySelector(".imgList");

    let prev = function () {
    if (imgIndex > 0) {
        $btnNext.removeAttribute("disabled");
        position += IMG_WIDTH;
        $slideImgs.style.transform = `translateX(${position}px)`;
        imgIndex = imgIndex - 1;
    }
    if (imgIndex == 0) {
        $btnPrev.setAttribute("disabled", "true");
    }
    };

    let next = function () {
    if (imgIndex < 3) {
        $btnPrev.removeAttribute("disabled");
        position -= IMG_WIDTH;
        $slideImgs.style.transform = `translateX(${position}px)`;
        $slideImgs.style.transition = "transform .5s ease-out";
        imgIndex = imgIndex + 1;
    }
    if (imgIndex == 2) {
        $btnNext.setAttribute("disabled", "true");
    }
    };

    let init = function () {
    $btnPrev.setAttribute("disabled", "true");
    $btnPrev.addEventListener("click", prev);
    $btnNext.addEventListener("click", next);
    };

    init();

    
});

/*
===================
Skills 탭
===================
*/
jQuery(document).ready(function ($) {
    let btnAll = $('.skillTabRow_01 .btn_container section .btnBox');
    let tabAll = $('.skillTabRow_02 .detail_container');
    
    
    // 프론트엔드
    $('#skillTabIcon_01').click(function () {
        if ($(this).hasClass('active') === false) {
            // 초기화
            btnAll.removeClass('active');
            tabAll.removeClass('active');
            // 활성화
            $(this).addClass('active');
            $('#skillTabInfo_01').addClass('active');
        }
    });
    
    // 백엔드
    $('#skillTabIcon_02').click(function () {
        if ($(this).hasClass('active') === false) {
            // 초기화
            btnAll.removeClass('active');
            tabAll.removeClass('active');
            // 활성화
            $(this).addClass('active');
            $('#skillTabInfo_02').addClass('active');
        }
    });
    
    // 디자인
    $('#skillTabIcon_03').click(function () {
        if ($(this).hasClass('active') === false) {
            // 초기화
            btnAll.removeClass('active');
            tabAll.removeClass('active');
            // 활성화
            $(this).addClass('active');
            $('#skillTabInfo_03').addClass('active');
        }
    });
    
    // 커뮤니케이션
    $('#skillTabIcon_04').click(function () {
        if ($(this).hasClass('active') === false) {
            // 초기화
            btnAll.removeClass('active');
            tabAll.removeClass('active');
            // 활성화
            $(this).addClass('active');
            $('#skillTabInfo_04').addClass('active');
        }
    });

});

/*
===================
Career 아코디언
===================
*/
jQuery(document).ready(function ($) {

	$(".accordion > li:eq(0) a").addClass("active").next().slideDown();

	$(".accordion a").click(function (e) {
		let dropDown = $(this).closest("li").find(".textBox");
		$(this).closest(".accordion").find(".textBox").not(dropDown).slideUp();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).closest(".accordion").find("a.active").removeClass("active");
			$(this).addClass("active");
		}
		dropDown.stop(false, true).slideToggle();
		e.preventDefault();
	});

});

/*
===================
Flip Card
===================
*/
jQuery(document).ready(function ($) {
    let btn = document.querySelector('.flipBtn');
    btn.addEventListener('click', click);
    
    function click(event) {
        let card = document.querySelector('.flipCard');
        if (card.style.transform == "rotateY(180deg)") {
            card.style.transform = "rotateY(0deg)";
                } else {
                    card.style.transform = "rotateY(180deg)";
        }
    }
});
