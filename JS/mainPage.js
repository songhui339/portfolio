/*
================================================
mainPage JavaScript
================================================
*/
jQuery(document).ready(function ($) {

    // 타이핑 효과
    var content = "안녕하세요 :-) \n 개발뽀시래기 최송희입니다.";
    var text = document.querySelector(".text");
    var i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 240)



    // 이미지 슬라이드
    let imgIndex = 0;
    let position = 0;
    const IMG_WIDTH = 450;
    const $btnPrev = document.querySelector(".btn-prev");
    const $btnNext = document.querySelector(".btn-next");
    const $slideImgs = document.querySelector(".imgList");

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