!function(){
    var model = {
      //只出现和数据相关的操作
      init: function(){
        var APP_ID = 'rkk77nVws72ECp28upJUiGec-gzGzoHsz'
        var APP_KEY = 'LiQjClXYJC8slzGNIYmcB5tO'
        AV.init({ appId: APP_ID, appKey: APP_KEY })
      },
      fetch: function(){
        var query = new AV.Query('Message')   //.find().then(fn1.fn2) 如果成功了调用then的第一个参数，失败了调用第二个参数
        return query.find()     //返回一个promise对象(后面接的是.then)
      },
      save: function(name,content){
        var Message = AV.Object.extend('Message')
        var message = new Message()
        return message.save({
          name: name,
          content: content,
        })     //返回一个promise对象
      }
    }
    var view = document.querySelector('section.message')
    var controller = {
      view: null,
      model: null,
      messageList: null,
      init: function(view,model){
        this.view = view
        this.model = model

        this.messageList = view.querySelector('#messageList')
        this.form = view.querySelector('form')
        
        this.model.init()
        this.loadMessage()
        this.bindEvents()
      },
      loadMessage: function(){        //批量获取
        this.model.fetch().then(
          (messages)=> {             
          //.find().then(fn1.fn2) 如果成功了调用then的第一个参数，失败了调用第二个参数
            let array = messages.map((item)=> item.attributes)  //console.log(messages[0].attributes)
            array.forEach((item)=> {
              let li = document.createElement('li')
              li.innerText = `${item.name}：${item.content}` //为什么不加$会直接显示整个字符串？
              this.messageList.appendChild(li)
            })
          }, function (error) {
            console.log('提交失败')    // 异常处理
          });
      },
      bindEvents: function(){
        console.log('1')
        this.form.addEventListener('submit', (e)=>{  
        console.log(e)
            e.preventDefault()  //阻止默认事件
            this.saveMessage()  //一定要使用箭头函数（箭头函数没有this），如果不使用箭头函数，这个this会变成submit的Event
        })
      },
      saveMessage: function(){
        var myForm=this.form
        let content = myForm.querySelector('input[name=content]').value
        let name = myForm.querySelector('input[name=name]').value
        this.model.save(name,content).then(
          function(object) {
            console.log('存入成功');   
            //window.location.reload()用户留言后自动刷新页面,但是会刷新整个页面  
            //如下方法会自动添加新生成的li，不会刷新页面
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}：${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
            //自动提交后自动清空
            myForm.querySelector('input[name=content]').value = ''
          })
      }
  }
  controller.init(view,model)
}.call()