从index.html开始
================

## 知识点
* html5文档
* vue.js导入
* Vue对象

## index.html

从第一个index.html开始

### vue.js引用
~~~html
用这行字讲vue.js引入进来，vue.js的所有功能就可以使用了
<script src="https://unpkg.com/vue/dist/vue.js"></script>
~~~

### html代码块
- 要用vue.js需要两个代码框
~~~html
<div id="myApp"> 
  {{ message }} 
</div>
~~~

### javascript脚本部分
-功能描述部分
~~~javascript
// myApp对象名可以随便起， 给myApp这个变量定义初始化的类型“Vue”
var myApp = new Vue({
  // 记载要对哪个id的代码框进行使用（可以理解为“选择器”）
  el: '#myApp',
  //对数据进行绑定
  data: {
    message: 'Hello Vue.js World!'
  }
});
~~~