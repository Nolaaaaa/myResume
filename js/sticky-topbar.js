window.addEventListener('scroll',function(scrollChangeTopBar){
    //鼠标滑动时顶部导航栏变化
    if(window.scrollY>0){
        topNavbar.classList.add("sticky");
    }else{
        topNavbar.classList.remove("sticky");
    }
})
