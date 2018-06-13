!function(){
    //通过全局变量 AV 获得SDK
    // 存储服务
    var { Query, User } = AV;
    AV.init('appId', 'appKey');
    // 实时消息服务
    var { Realtime, TextMessage } = AV;
    //调试用的
    localStorage.setItem('debug', 'leancloud*,LC*');


    //init
    var APP_ID = 'rkk77nVws72ECp28upJUiGec-gzGzoHsz';
    var APP_KEY = 'LiQjClXYJC8slzGNIYmcB5tO';
    AV.init({
    appId: APP_ID,
    appKey: APP_KEY
    });
    //console.log('运行到了这里')

    //储存数据的代码
    //create'TestObject(这个名字对应的是leanCloud上的Classname)'表
    //在表中创建一行数据
    //数据内容是'Hello World!'
    //如果保存成功则运行alert中的内容'LeanCloud Rocks!'
    //test
    /*
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!'
    }).then(function(object) {
      console.log(arguments[0]);
    })
    */
    let myForm = document.getElementById('#postMessage')
    myForm.addEventListener('submit',function(e){
        e.preventDefault()  //阻止默认事件
        let content = myForm.querySelector('input[name=content]').value
        var Message = AV.Object.extend('Message');
        var message = new Message();
        message.save({
          content: content
        }).then(function(object) {
          console.log('存入成功');
          console.log(object);
        })
    })
}.call() 