Conditionals and Loops
=======================

## 知识点
* v-if
* v-for

### v-if

条件判断式，根据表达式的真伪进行页面处理。

~~~html
// if v-if="seen"(yes), will appear 快看我！
// if not, nothing display
<p v-if="seen">快看我！</p>
~~~

### v-for
处理数组循环，将数据循环显示到页面上。

~~~html
// ol是html里的列表，li是列表项
<ol>
  <li v-for="game in games">
    {{ game.title }}
  </li>
</ol>
~~~

## 综合例
~~~html
<div id="myApp">
    <h3>游戏列表</h3>
    <!--不确定是不是2017年发卖，在这里这是了个if statement分辨--> 
    <div v-if="seen">2017最新发卖</div>
    <ol>
        <li v-for="game in games">{{game.title}} / {{game.price}}元</li>
    </ol>
</div>
<script>
    var myApp = new Vue({
        el: '#myApp',
        data: {
            // 目前设置为true
            seen: true,
            //[]代表数组
            games: [
                {title:'勇者斗恶龙',price:400},
                {title:'超级马里奥',price:380},
                {title:'我的世界',price:99},
            ],
        },
    });
</script>
~~~