<template>
  <header-a parent-msg="{{pagetitle}}"></header-a>
    <div class="ui-container">
    	   <ul class="ui-list ui-list-text ui-border-tb">
        <li class="ui-border-t" v-repeat="job: jobs">
            <a class="ui-list-info" href="#/jobs/{{job.id}}">
                <h4 class="ui-nowrap">{{job.title}}</h4>
            </a>
      
        </li>


      </ul>
      
     
    </div>
     <loading-b></loading-b>
</template>
<script>
	  var com = require('../component/commont.js');
     var headerA = require('../component/header.vue');
    var loadingB = require('../component/loading.vue');
module.exports = {
  data: function () {
    return {
      jobs: [],
       pagetitle: '人才招聘'
    }
  },
    components:{
      'header-a': headerA,
      'loading-b':loadingB
    },
  ready: function () {
    var jobStorage = localStorage.getItem('joblists');
     com.loadingStart();
    document.title = '人才招聘';

    if(!jobStorage){
       
        this.$http.jsonp(com.api()+'get_posts/?count=8&page=1&post_type=jobs')
        .success(function (reponse) {
          this.jobs =reponse.posts;
           window.localStorage.setItem('joblists',JSON.stringify(reponse.posts));
          com.loadingEnd();
        });

      }else{
        this.jobs = JSON.parse(jobStorage);
          com.loadingEnd();

      }
    

  },
  methods: {
  }
}
</script>