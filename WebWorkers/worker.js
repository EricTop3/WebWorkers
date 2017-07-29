var i = 0;
function timeCount(){
    i = i + 1;
    postMessage(i); //postMessage用于向html页面回传一段消息，它是Worker对象的方法
    setTimeout("timeCount()",500);
}
timeCount();