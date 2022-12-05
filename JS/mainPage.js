/*
================================================
mainPage JavaScript
================================================
*/
jQuery(document).ready(function ($) {

    // 타이핑 효과
    var content = "안녕하세요 반갑습니다 :-) \n 적극적인 마인드, 열정이 넘치는 최송희입니다.";
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

});