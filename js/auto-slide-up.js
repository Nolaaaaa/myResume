// 元素首先离开原来的位置，等页面滑到对应位置时元素返回来
let specialTags=document.querySelectorAll("[data-x]"); 
for(let i=0;i<specialTags.length;i++){
    specialTags[i].classList.add("offset");
}
//console.log(specialTags)
// 先运行一次findClosestAndRemoveOffset()
findClosestAndRemoveOffset();
// 当鼠标滚动时，顶部导航栏变化以及特殊元素和topBar的各种互动
// 不能用window.onscroll，这样的话后面的会被覆盖
window.addEventListener('scroll',function(scrollChangeTopBar){
    //当元素滚动时特殊元素和topBar的各种互动
    findClosestAndRemoveOffset();
})

/****封装的函数部分*/
function findClosestAndRemoveOffset(){
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