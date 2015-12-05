<template>
	<section class="ui-container">
		  <div id="slideBox" class="slideBox">
        <div class="bd">
          <ul>
              <li>
                <img v-attr="src: 'app/assets/img/banner1.jpg'" alt="">
              </li>
              <li>
                <img src="/app/assets/img/banner2.jpg" alt="">
              </li>
             <li>
                <img src="/app/assets/img/banner3.jpg" alt="">
    
              </li>
              <li>
                <img src="/app/assets/img/banner4.jpg" alt="">
              </li>
          </ul>
        </div>
        <div class="hd">
          <ul></ul>
        </div>
      </div>
      <!-- tabs -->
   
      <div id="tabBox1" class="tabBox ui-tab">
        <div class="hd ui-border-t">
          <h3><a href="#">文章</a><span>Article</span></h3>
          <ul>
            <li v-on="click: isActive('one')" v-class="active: selected == 'one'"><a href="javascript:void(0)">新闻资讯</a></li>
            <li v-on="click: isActive('two')" v-class="active: selected == 'two'"><a href="javascript:void(0)">服务范围</a></li>
            <li v-on="click: isActive('three')" v-class="active: selected == 'three'"><a href="javascript:void(0)">帮助中心</a></li>
          </ul>
        </div>
        <div class="tabBox1-bd" id="tabBox1-bd" v-class="oneclass: selected =='one',twoclass: selected == 'two',threeclass: selected == 'three'">
          <div class="con">
            <ul class="ui-list ui-list-text ui-border-b">
              <li class="ui-border-t" v-repeat="post: posts">
                <a href="#/news/{{post.id}}" class="ui-list-info ui-arrowlink"><h4 class="ui-nowrap">{{post.title}}</h4></a>
              </li>
              
            </ul>
          </div>
          <div class="con">
            <ul class="ui-list ui-list-text ui-border-b">
              <li class="ui-border-t" v-repeat="post: faqs">
                <a href="#/news/{{post.id}}" class="ui-list-info ui-arrowlink"><h4 class="ui-nowrap">{{post.title}}</h4></a>
              </li>
              
            </ul>
          </div>
          <div class="con">
            <ul class="ui-list ui-list-text ui-border-b">
              <li class="ui-border-t" v-repeat="post: faqs">
                <a href="#/news/{{post.id}}" class="ui-list-info ui-arrowlink"><h4 class="ui-nowrap">{{post.title}}</h4></a>
              </li>
              </ul>
          </div>

        </div>
      </div>
	</section>
<loading-b></loading-b>
</template>
<script>
    var com = require('../component/commont.js');
    var loadingB = require('../component/loading.vue');
    var ts =require('../../TouchSlide.source.js');
module.exports = {
  data: function () {
    return {
      posts: [],
      faqs: [],
      selected: 'one'
    }
  },
 components:{
    'loading-b':loadingB
  },
  ready: function () {
    var self = this;
     document.title = '首页';
     ts.TouchSlide({ 
          slideCell:"#slideBox",
          titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
          mainCell:".bd ul", 
          effect:"leftLoop", 
          autoPage:true,//自动分页
          autoPlay:true //自动播放
        });

     this.$http.jsonp(com.api()+'get_category_posts/',{count:5,page:1,slug: 'news'})
        .success(function (reponse) {
          self.posts =reponse.posts;
          com.loadingEnd();
        });
     this.$http.jsonp(com.api()+'get_category_posts/',{count:5,page:1,slug: 'faq'})
        .success(function (reponse) {
          self.faqs =reponse.posts;
        });
  },
  methods: {

    isActive: function (e) {
      this.selected = e;
    }
  
  }
}
</script>