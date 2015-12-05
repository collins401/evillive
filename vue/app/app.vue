<template>
<div class="wapper">
    <!-- Page Content goes here -->
      <component is={{view}} v-transition="fade" transition-mode="out-in">
        
        
      </component>
</div>
<footer class="ui-footer ui-footer-btn">
            <ul class="ui-tiled ui-border-t">
                <li class="ui-border-r"><a href="#/product">产品中心</a></li>
                <li class="ui-border-r"><a href="#/news">新闻资讯</a></li>
                <li class="ui-border-r"><a href="#/">Home</a></li>
                <li class="ui-border-r"><a href="#/jobs">人才招聘</a></li>
                <li><a href="#/about">关于我们</a></li>
            </ul>
        </footer>
</template>
<div class="pullrefresh" style="display:none;">ss</div>
<script>
module.exports = {
  data: function () {
    return {
      view: '',
      matetitle: 'ss',
    }
  },
  components: {
    'home': require('./views/home.vue'),
    'product-view': require('./views/product-view.vue'),
    'jobs-view': require('./views/jobs-view.vue'),
    'about-view': require('./views/about-view.vue'),
    'news-view': require('./views/news-view.vue'),
    'detail-news-view': require('./views/detail-news-view.vue'),
    'detail-product-view': require('./views/detail-product-view.vue'),
    'detail-jobs-view': require('./views/detail-jobs-view.vue'),
    'detail-about-view': require('./views/detail-about-view.vue'),
    
  }
}

</script>