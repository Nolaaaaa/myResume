$(document).ready(function(){
    //1 welcome动画
    setTimeout(function(){
        siteWelcome.classList.remove('active');
    },1000)
    
    //2 元素首先离开原来的位置，等页面滑到对应位置时元素返回来
    let specialTags=document.querySelectorAll("[data-x]"); 
    for(let i=0;i<specialTags.length;i++){
        specialTags[i].classList.add("offset");
    }
    //console.log(specialTags)
    //3 先运行一次findClosest()
    findClosest();
    //4 当鼠标滚动时，顶部导航栏变化以及特殊元素和topBar的各种互动
    window.onscroll=function(scrollChangeTopBar){
        //鼠标滑动时顶部导航栏变化
        if(window.scrollY>0){
            topNavbar.classList.add("sticky");
        }else{
            topNavbar.classList.remove("sticky");
        }
        //当元素滚动时特殊元素和topBar的各种互动
        findClosest();
        
    }
    //5 鼠标放到topbar上时添加效果
    yyy();
    //6 获取a标签遍及a标签并在a被点击时动画滑动到对应元素
    zzz();  //一定要在第4步之后
    /**********************************************/
    function zzz(){
        //获取所有的a标签
        let aTags=document.querySelectorAll("nav.menu ul li a") 
        //这个时TWEEN这个需要的，看不懂～～
        function animate(time){
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        //2 遍历a标签
        for(let i=0;i<=aTags.length;i++){
            $(aTags[i]).on('click',function(x){
                x.preventDefault();  //阻止a标签默认的跳
                let a=x.currentTarget;
                let href=a.getAttribute("href"); //找到href中的内容，如果href中时一个锚点则返回#siteSkills
                let element=document.querySelector(href); //找到内容中的锚点对应ID的标签，如对应的锚点名为#siteSkills，则返回<section class=​"skills" id=​"siteWorks">​…​</section>​
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
            })
        }            
    }
    function findClosest(){
        //找到所在位置的标签
        let specialTags=document.querySelectorAll("[data-x]");    //找到含有data-x属性的所有元素，data-x是直接标记在元素上的不是类也不是ID
        //console.log(window.scrollY)
        let minIndex=0;   //离窗口顶部最近的元素
        for(let i=1;i<specialTags.length;i++){
            //console.log(window.scrollY)
            //console.log(specialTags[i].offsetTop)
            if(Math.abs(specialTags[i].offsetTop - window.scrollY)<Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex=i;
            }
        }
        //console.log(minIndex)
        //去除offset动画
        specialTags[minIndex].classList.remove("offset");
        //通过所在位置找到topbar上对应的位置,先找到specialTags的ID，再找到ID对应的a标签，再找a标签的父级元素li，再遍历所有的li标签父级节点的的子元素
        let id=specialTags[minIndex].id;
        let a=document.querySelector('a[href="#'+id+'"]');
        let li=a.parentNode;
        let bortherAndMe=li.parentNode.children;
        //先清除所有的highlight效果，再在当前元素加防止同时出现很多highlight效果
        for(let i=0;i<bortherAndMe.length;i++){
          bortherAndMe[i].classList.remove("highlight")
        }
        li.classList.add("highlight");
    }
    function yyy(){
        let liTags=document.querySelectorAll("nav.menu ul li")   /*找选择器匹配的所有li*/
        //console.log(liTags)
        //监听鼠标有没有在元素上
        for(var i=0;i<liTags.length;i++){
            liTags[i].onmouseenter=function(x){
                //console.log("onmouseenter")
                //console.log(x.target)  打印用户操作的元素
                //console.log(x.currentTarget)   打印用户监听的元素
                /*如果是找下一个节点let brother=a.nextSibling;  下一个元素可能时空格或者回车，所以。。。
                borther.nodeType===3时继续找下一个。节点类型1表示一个元素节点，3表示Element或者Attr中实际的文字。
                或者指定找叫ul的节点，一定要是大写的UL。tagName!=="UL"
                while(brother.tagName!=="UL"){
                brother=brother.nextSibling}*/
                //找到UL元素
                x.currentTarget.classList.add("active")
            }
            liTags[i].onmouseleave=function(x){
                //console.log("mouseleave")
                //鼠标离开监听元素ul上时移除类名active
                x.currentTarget.classList.remove("active")
            }
        }
    }
    //初始化Swiper
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
});