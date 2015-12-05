<template>
  <div class="inner">
	 <header-a parent-msg="{{pagetitle}}"></header-a>
    <section class="ui-container">
    <div class="ui-whitespace">
      <div class="article-header">
        <h1 class="article-h1" v-text="post.title"></h1>
        <div class="article-mate ui-border-b">
          
        </div>
      </div>
      <div class="article-entry" v-html="post.content"></div>
    </div>
</section>
</div>

</template>

<script>
  var com = require('../component/commont.js');
  var headerA = require('../component/header.vue');
module.exports = {
  data: function () {
    return {
      post: '',
      pagetitle: '关于我们'
    }
  },
  components:{
    'header-a': headerA
  },
  ready: function () { 
    var ids = window.location.href;
    var sd = ids.lastIndexOf('/');
    var newsPostId = ids.substring(sd + 1);
      this.$http.jsonp(com.api()+'get_page/?id='+newsPostId)
        .success(function (reponse,status) {
          this.post =reponse.page;
          document.title = this.post.title;
  
          if(reponse.status == 'error'){
            window.location.href="#/about";

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