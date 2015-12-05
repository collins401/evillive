<template>
  <div class="inner">
	 <header-a parent-msg="{{pagetitle}}"></header-a>
    <section class="ui-container">
    <div class="ui-whitespace">
      <div class="article-header">
        <h1 class="article-h1" v-text="post.title"></h1>
        <div class="article-mate ui-border-b">
          发布时间：{{post.date}}  分类：{{post.categories[0].title}}
        </div>
      </div>
      <div class="article-entry" v-html="post.content"></div>
    </div>
</section>
</div>
<!-- <input type="hidden" name="{{postId}}"> -->
</template>

<script>
  var com = require('../component/commont.js');
  var headerA = require('../component/header.vue');
module.exports = {
   props:['postId'],
  data: function () {
    return {
      post: '',
      pagetitle: '新闻详情'
    }
  },
  components:{
    'header-a': headerA
  },
  computed: function(){
    console.log(this.postId);
    
  },
  ready: function () { 
    // console.log(this.postId);
    var ids = window.location.href;
    var sd = ids.lastIndexOf('/');
    var newsPostId = ids.substring(sd + 1);
      this.$http.jsonp(com.api()+'get_post/?id='+newsPostId)
        .success(function (reponse,status) {
          this.post =reponse.post;
          document.title = this.post.title;
  
          if(reponse.status == 'error'){
            window.location.href="#/news";

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