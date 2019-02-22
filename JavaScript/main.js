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
                hot:[{href:'#',title:'东京动画奖2019”年度最佳动画作品奖与个人奖结果发表',date:'2019-2-21'}],
                index:{
                        indeximg:[{img:'',href:''},],
                        article:[{title:'',img:'',abstract:'',date:'',source:'',type:''}],
                        hot:[{href:'#',title:'loading...',date:'loading...'}]
                    },

                newanime:{data:{},num:0},
                pastanime:{data:{},num:0},
                movie:0,
        },
        methods:{
            ajaxstart:function (e){
                let _temp = this
                $.ajax({
                    type:'get',
                    url: `${e.page}/${e.part}`,
                    success: function(data){
                        _temp.ajaxsuccess(data)
                    },
                    error:function(){

                    },
                });
            },
            ajaxsuccess:function(data){
                this[data.page][data.part] = data.data
            }
        },
    }).$mount('#body-container')

})()