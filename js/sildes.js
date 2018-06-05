$(document).ready(function(){
    /************第一次尝试*************/
    //将父元素相对定位，子元素img绝对定位
    var n
    x()
    startSlides()
    setInterval(function(){
      makeLeave(getImage(n))
      makeCurrent(getImage(n+1))
      makeEnter(getImage(n+2))
      n+=1;
    },1000)
  
    //以下都是包装的函数
    function getImage(n){
      return $(`.portfolio .works-pic > img:nth-child(${x(n)})`)
    }
    function startSlides(){
      n=1;
      $(`.portfolio .works-pic > img:nth-child(${x(n)})`).addClass('current').siblings().addClass('enter')
  
    }
    function x(n){
      var size = $('.portfolio .works-pic img').length
      if(n>size){
        n = n%size
        if (n===0){
          n =size
        }
      } 
      return n
    }
    function makeLeave($node){
      return $node.removeClass('current enter').addClass('leave')
    }
    function makeCurrent($node){
      return $node.removeClass('enter leave').addClass('current')
    }
    function makeEnter($node){
      return $node.removeClass('leave current').addClass('enter')
    }
  
  })
  
