//首页导航栏
<template>
	<div id="nav">
    	<img @click="side" class="nav_mine_log" src="/static/img/nav_mine.png">
    	<span class="nav_home_log">首页</span>
    	<router-link to="/newsContent">
    		<img class="nav_lingdang_log" src="/static/img/nav_lingdang.png">
    	</router-link>
    	<img class="nav_set_log" src="/static/img/nav_set.png">
	</div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style type="text/css" scoped>
	#nav {
		width: 16rem;
		height: 2.5rem;
		background: #00a2ea;
	}
	.nav_mine_log {
		width: 0.9rem;
		height: 0.6rem;
		position: absolute;
		top: 0.9rem;
		left: 0.9rem;
	}
	.nav_home_log {
		font-size: 0.7rem;
		line-height: 0.7rem;
		color: #fff;
		position: absolute;
		left: 3rem;
		top: 0.9rem;
	}
	.nav_lingdang_log {
		height: 0.9rem;
		width: 0.8rem;
		position: absolute;
		left: 12.5rem;
		top: 0.9rem;
	}
	.nav_set_log {
		width: 0.2rem;
		height: 0.7rem;
		position: absolute;
		top: 0.9rem;
		left: 15rem;
	}
</style>
