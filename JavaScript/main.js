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
                ifcreated:{index:0,},
                hot:[{href:'#',title:'东京动画奖2019”年度最佳动画作品奖与个人奖结果发表',date:'2019-2-21'}],
                index:{
                        indeximg:[{img:'./Images/66474729_p0.jpg',href:'#',abstract:'ccc',},
    {img:'./Images/8c007b5cgy1fqwefu5tkrj20xc0nkqv5.jpg',href:'#',abstract:'xxx'},
    {img:'./Images/8c007b5cly1fkayrbqu9sj216b0ovke1.jpg',href:'#',abstract:"zzz"}
                        ],
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
                        this.e = e
                        _temp.ajaxsuccess(data,e)
                    },
                    error:function(xxx){
                        let data = [{title:'东京动画奖2019”年度最佳动画作品奖与个人奖结果发表',href:'#',img:'/Images/66474729_p0.jpg',abstract:'东京动画奖2019（TAAF2019）”的“年度最佳动画部门”作品奖与个人奖结果发表了。',date:'2019-2-21',source:'dmzj',type:'动画'},
                            {title:'《辉夜姬想让人告白》真人电影化决定！桥本环奈饰演辉夜',href:'#',img:'/Images/66474729_p0.jpg',abstract:'赤坂赤创作的漫画《辉夜姬想让人告白～天才们的恋爱头脑战～》将拍摄真人电影版，白银御行由平野紫耀出演，四宫辉夜由桥本环奈饰演。',date:'2019-2-21',source:'dmzj',type:'杂项'},
                        ]
                        this.e = e
                        console.log(e)
                        _temp.ajaxsuccess(data,e)
                    },
                });
            },
            ajaxsuccess:function(data,e){
                this[e.page][e.part] = data
                this.ifcreated[e.page]=1
            }
        },
        created:function(){
            this.ajaxstart({page:'index',part:'hot'})
        }
    }).$mount('#body-container')

})()