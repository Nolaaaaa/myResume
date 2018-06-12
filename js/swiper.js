!function(){
  //初始化Swiper
  var view = document.querySelector('#slides')
  var controller = {
    view: null,
    swiper: null,  //因为有用到swiper函数，所以初始化一下
    swiperOptions:{
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    init: function(view){
        this.view = view
        this.initSwiper()
    },
    initSwiper: function(){
      this.swiper = new Swiper (
        view.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  }
  controller.init(view)
}.call() 