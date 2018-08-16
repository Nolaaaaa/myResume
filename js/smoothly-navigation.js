!function(){
    //获取所有的a标签
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        init: function(view){
            this.view = view
            this.initAnimate()
            this.bindEvents()
        },
        //初始化TWEEN动画
        initAnimate: function(){
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function(){
            var aTags = this.view.querySelectorAll("nav.menu>ul>li>a") 
            for(let i=0;i<=aTags.length;i++){
                $(aTags[i]).on('click',(x)=>{
                    // x.preventDefault();  //阻止a标签默认的跳
                    let a=x.currentTarget;
                    let href=a.getAttribute("href"); //找到href中的内容，如果href中时一个锚点则返回#siteSkills
                    let element=document.querySelector(href); //找到内容中的锚点对应ID的标签，如对应的锚点名为#siteSkills，则返回<section class=​"skills" id=​"siteWorks">​…​</section>​
                    this.scrollToElement(element)
                })
            }  
        },
        scrollToElement: function(element){
            let top=element.offsetTop;    //目标的高度
            let currentTop=window.scrollY; //所在的位置
            let targetTop=top-80;  //目标位置
            let s=targetTop-currentTop;     //所在到目标的高度差
            let t=Math.abs((s/100)*200)    //Math.abs方法保证时间为正值不为负数。ps:Math的首字母需要大写！！！
            var coords={y:currentTop};     //y为所在位置
            //tween方法,看不懂～～
            if(t>=500){t=500}     //如果时间最大为500，不超过500
            var tween=new TWEEN.Tween(coords)
                .to({y:targetTop},t)   //y为到达目标位置，时间
                .easing(TWEEN.Easing.Quadratic.In)
                .onUpdate(function(){
                    window.scroll(0,coords.y)
                })
                .start();
        }
    }
    controller.init(view)      
}.call() 