!function(){ 
    var view = document.querySelector('#topNavbar')
    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.bindEvents()
            //this.bindEvents().call(this)
        },
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',(scrollChangeTopBar) => {
                //鼠标滑动时顶部导航栏变化
                if(window.scrollY>0){
                    //如果用function()的格式，这里的this会代表鼠标滚动事件，而不是我们想要的this，所以可以用没有this的箭头函数
                    this.active()
                }else{
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add("sticky");
        },
        deactive: function(){
            this.view.classList.remove("sticky");
        }
    }

    controller.init(view)
    //controller.init.call(controller,view)
}.call() 