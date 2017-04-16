//登录
<template>
	<div id="login">
		<div class="login_nav">
			<router-link to="home">
				<img src="/static/img/login_back.png">
			</router-link>
			<span class="login_text">登录</span>
		</div>
		<div id="login_content">
			<img src="/static/img/login_log.png">
			<p>使用微博登录</p>
			<input class="sina" type="button" name="sina" value="新浪微博登录">
			<input class="tencent" type="button" name="tencent" value="腾讯微博登录">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style scoped>
	.login_nav {
		width: 16rem;
		height: 2.5rem;
		position: relative;
		background: #00a2e5;
	}
	.login_nav img {
		width: 0.7rem;
		height: 0.73rem;
		position: absolute;
		left: 0.89rem;
		top: 0.85rem;
	}
	.login_text {
		font-size: 0.73rem;
		position: absolute;
		left: 3.25rem;
		line-height: 2.5rem;
		color: #fff;
	}
	#login_content {
		background: #218fe4;
		width: 16rem;
		height: 25.9rem;
		position: relative;
	}
	#login_content img {
		width: 5.34rem;
		height: 1.63rem;
		position: absolute;
		top: 5.27rem;
		left: 5.34rem;
	}
	#login_content p {
		font-size: 0.73rem;
		position: absolute;
		top: 10.85rem;
		left: 5.34rem;
		color: #fff;
	}
	input {
		width: 11.63rem;
		height: 2.23rem;
		border: none;
		background: #fff;
		border-radius: 5%;
		color: #303030;
		font-size: 0.73rem;
		position: absolute;
		left: 2.20rem;
	}
	.sina {
		top: 12.82rem;
	}
	.tencent {
		top: 16.10rem;
	}
</style>
