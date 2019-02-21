(function(){
    leftresize()
    $(window).on('scroll',function(){
        let wwidth = $(window).width()
        if(wwidth-1200>0){
            $(".tab-bar").css({'left':`${(wwidth-1200)/2}px`})
        }else{
            $(".tab-bar").css({'left':`${-$(window).scrollLeft()}px`})
        }
    })
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


    const anime = { template: '<div>anime</div>' }
    const routes = [
        { path: '/', component:index},
        { path: '/anime', component: anime },
        { path: '*', component: index },
    ]

    const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
    })

    const bodyContainer = new Vue({
        el:'#body-container',
        router,
        data:{
            pagestate:{
                index:{
                    data:{
                        timeline:[],
                        newanimeindex:[],
                        pastanimeindex:[],
                        ovaindex:[],
                    },
                    num:0
                },
                newanime:{data:{},num:0},
                pastanime:{data:{},num:0},
                movie:0,
            },
        },
        methods:{


        },
    }).$mount('#body-container')

})()