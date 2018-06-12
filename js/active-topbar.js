!function(){
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
}.call() 