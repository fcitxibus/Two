// $(function() {
//     $(addBut).on("click",function () {
//         messageValue = $(msg).val() ;
//         $(msgList).append("<option>" + messageValue + "</option>");
//     });
// })
$(function() {
    var message = new Message();
    message.init();//初始化
})
function Message() {}
$.extend(Message.prototype,{
    init:function () {   //初始化操作
    this.bindMessageEvent(); //进行事件的绑定处理
},
bindMessageEvent:function() {   //事件绑定的专属处理函数
        $(addBut).on("click",$.proxy(this.messageHandler,this));
},
       messageHandler:function(){
        messageValue = $(msg).val();
        $(msgList).append("<option>" + messageValue + "</option>");
        $(msg).val(""); //数据清空
}
})
