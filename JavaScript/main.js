(function(){
    function leftresize(){
        let wwidth = $(window).width()
        if(wwidth-1200>0){
            $(".tab-bar").css({'left':`${(wwidth-1200)/2}px`})
        }else{
            $(".tab-bar").css({'left':'0'})
        }
    }
    $(window).resize(function() {
        leftresize()
      });
      leftresize()
$(window).scroll(function(){
    $(".tab-bar").css({'left':`${-$(window).scrollLeft()}px`})
})

new Vue({
    // el:'#app',
})
})()