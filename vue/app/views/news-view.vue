<template>
	<header-a parent-msg="{{pagetitle}}"></header-a>



    <section class="ui-container">
      
      <ul class="ui-list ui-list-text ui-border-tb">
        <li class="ui-border-t" v-repeat="post: posts">
            <a class="ui-list-info ui-arrowlink" href="#/news/{{post.id}}" post-id="{{post.id}}">
                <h4 class="ui-nowrap">{{post.title}}</h4>
            </a>
      
        </li>


      </ul>
      
      <loading-b></loading-b>
    </section>

</template>

<script>
	  var com = require('../component/commont.js');
    var headerA = require('../component/header.vue');
    var loadingB = require('../component/loading.vue');
module.exports = {
  data: function () {
    return {
      posts: [],
      pagetitle: '新闻资讯'
    }
  },
  components:{
      'header-a': headerA,
      'loading-b':loadingB
    },
  ready: function () {
    var newsStorage = localStorage.getItem('newslists');
     com.loadingStart();
    document.title = '新闻资讯';

    if(!newsStorage){
       
        this.$http.jsonp(com.api()+'get_posts/?count=8&page=1')
        .success(function (reponse) {
          this.posts =reponse.posts;
           window.localStorage.setItem('joblists',JSON.stringify(reponse.posts));
          com.loadingEnd();
        });

      }else{
        this.posts = JSON.parse(jobStorage);
          com.loadingEnd();

      }
       
  },
  methods: {
    
  }
}
</script>