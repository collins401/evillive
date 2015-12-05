<template>
  <div class="inner">
	   <header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>产品详情</h1>
    </header>
    <section class="ui-container">
      <div class="ui-whitespace">
        <div class="article-header">
          <h1 class="article-h1" v-text="post.title"></h1>
          <div class="article-mate ui-border-b">
            分类：{{post.taxonomy_location[0].title}}
          </div>
        </div>
        <div class="article-entry" v-html="post.content"></div>
     </div>
    </section>
</div>
</template>

<script>
   var com = require('../component/commont.js');

module.exports = {
  data: function () {
    return {
      post: ''
    }
  },
  ready: function () { 

 
      this.$http.jsonp(com.api()+'get_post/?post_type=product&id='+this.$root.productId)
        .success(function (reponse,status) {
          this.post =reponse.post;
          document.title = this.post.title;

          if(reponse.status == 'error'){
            window.location.href="#/product";

              // alert('ss');
          }
        })
        .error(function(){
          // console.log('ss');
        })
    
  },

  methods: {
  }
}
</script>