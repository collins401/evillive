<template>
	<header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>{{parentMsg}}</h1>
    </header>

</template>
<script>
module.exports = {
  props:['parentMsg']

}
</script>