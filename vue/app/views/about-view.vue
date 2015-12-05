<template>
	<header-a parent-msg="{{pagetitle}}"></header-a>
    <div class="ui-container">
    	 <ul class="ui-list ui-list-text ui-border-tb" id="kk">
        <li class="ui-border-t" v-repeat="about: abouts">
            <a class="ui-list-info" href="#/about/{{about.id}}">
                <h4 class="ui-nowrap">{{about.name}}</h4>
            </a>
      
        </li>
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
      abouts: [
       {'id':'13','name':'企业简介','pic':'company.svg'},
            {'id':'15','name':'企业文化','pic':'culture.svg'},
            {'id':'17','name':'联系我们','pic':'phone.svg'}]
    }
  },
    components:{
      'header-a': headerA,
      'loading-b':loadingB
    },
  ready: function () {
      com.loadingStart();
   
          com.loadingEnd();
        
          document.title = '关于我们';

      $('#kk a').click(function(event) {
        event.preventDefault();
        var d = $(this).attr('href');
        alert(d);
      });
      
    
  },
  methods: {
  }
}
</script>