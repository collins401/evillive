<template>
	<header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>产品列表</h1>
    </header>
    <section class="ui-container">
	    <ul class="ui-pro-list clearfix" id="productList">
	    	<li v-repeat="product: products">
    			<a href="#/product/{{product.id}}">
    				<span class="thumb-img"><img src="{{product.thumbnail}}" alt=""></span>
    				<h4 class="ui-nowrap ui-whitespace">{{product.title}}</h4>
    			</a>
    		</li>
	    </ul>  
	    <div class="ui-loading-wrap">
                <p>加载中</p>
                <i class="ui-loading"></i>
    </div>  	
    </section>
    <div v-if="selectIdComputed" class="ui-container">
          <div>sd</div>
    </div>
	<div id="loading" class="ui-loading-block"></div>
</template>

<script>
  var com = require('../component/commont.js');
	
module.exports = {
  props: ['productId'],
  data: function () {
    'use strict';

    return {
 
      products: [],
      selectId: null,
      selectIdComputed: false
    }
  },

  ready: function () {
    var paroStorage = localStorage.getItem('prolists');
    var page = 1;
    var count = 8;
    var tatol;
    var self = this;
   		com.loadingStart();
      if(!paroStorage){
        this.$http.jsonp(com.api()+'get_posts/?count=8&page=1&post_type=product')
          .success(function (reponse) {
            this.products =reponse.posts;
            tatol = reponse.pages;
           window.localStorage.setItem('prolists',JSON.stringify(reponse));

            document.title = '产品中心';
            com.loadingEnd();
            page++;
            console.log(page);
          });
      }else{
         this.products = JSON.parse(paroStorage).posts;
          document.title = '产品中心';
          com.loadingEnd();
            tatol = JSON.parse(paroStorage).pages;
            page++;
            console.log(page);


      }

        
   	      var raw = $('#productList');
   	      $(window).scroll(function(){
            if ($(this).scrollTop() + $(this).height() == $(document).height() && tatol >= page) {
                self.$http.jsonp(com.api()+'get_posts/?post_type=product',{count:count,page:page})
                  .success(function (reponse) {
                    var Plist = reponse.posts;
            console.log(page);

                    console.log(Plist);
                  for (var i = 0 ; i < Plist.length; i++) {
                      self.products.push(Plist[i]);     
                      console.log('ss');     
                     console.log(self.products.length);
                  };
                  if(reponse.pages <= page){
                         page++;
                  }else{
                      
                  }
                });
              }
            if ($(this).scrollTop() + $(this).height() == $(document).height() && tatol < page) {
                $('.ui-loading-wrap').html('<p>暂无更多</p>');
            }
      });
  },

  methods: {
  	
  }
}
</script>