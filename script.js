window.onload = function (){
    var track;
    var time;

    document.getElementById('scroll').onclick = function () {
        track = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop(){
        if (track>0){
            window.scrollTo(0, track);
            track = track - 100;
            time = setTimeout(scrollToTop, 100)
        }
        else {
            window.scrollTo(0,0);
        }
    }
}