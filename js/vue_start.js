window.onload = function() {	// 当页面显示完成之后再进行操作执行
	new Vue({
		el: '#msgDiv',		// 设置要进行渲染的根元素
		data: {
			message: 'Hello World !' 
		}
	}) ;	// 实例化MVVM的管理对象
}