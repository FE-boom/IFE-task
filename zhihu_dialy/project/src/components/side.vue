//侧边栏
<template>
	<div id="side-warp">
			<div id="side">
				<div class="header">
					<img class="mine-header" src="../../static/img/mine_header.png">
					<span class="login">请登录</span>
					<div class="coll-dow">
						<img class="mine-star" src="../../static/img/mine_star.png">
						<span class="collection">我的收藏</span>
						<img class="down-logo" src="../../static/img/mine_dolownd.png">
						<span class="down">离线下载</span>
					</div>
					<div class="to-home">
						<img src="../../static/img/mine_home.png">
						<span>首页</span>
					</div>
					<div class="add-warp">
						<div class="add">
							<span>日常心理学</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>用户推荐日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>电影日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>不许无聊</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>设计日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>大公司日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>财经日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>互联网安全</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>开始游戏</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>音乐日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>动漫日报</span>
							<span class="add-logo">+</span>
						</div>
						<div class="add">
							<span>体育日报</span>
							<span class="add-logo">+</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style type="text/css">
	#mask {
		position:absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
		background:#000;
		opacity:0.4;
		filter: alpha(opacity=40);
		z-index: 998;
	}
	#side {
		width: 13.58rem;
		position: absolute;
		z-index: 999;
		left: 0rem;
	}
	.header {
		background: #00a2ea;
		height: 4.85rem;
	}
	.mine-header {
		width: 1.47rem;
		height: 1.47rem;
		position: absolute;
		top: 0.4rem;
		left: 0.71rem;
	}
	.login {
		font-size: 0.67rem;
		color: #fffbff;
		position: absolute;
		top: 0.77rem;
		left: 2.77rem;

	}
	.mine-star {
		width: 0.67rem;
		height: 0.62rem;
		position: absolute;
		left: 1.1rem;
		top: 3.43rem;
	}
	.collection {
		font-size: 0.62rem;
		position: absolute;
		left: 2.89rem;
		top: 3.43rem;
		color: #fff;
	}
	.down-logo {
		width: 0.47rem;
		height: 0.62rem;
		position: absolute;
		top: 3.43rem;
		left: 7.6rem;
	}
	.down {
		font-size: 0.62rem;
		position: absolute;
		top: 3.43rem;
		left: 9.27rem;
		color: #fff;
	}
	.to-home {
		position: absolute;
		top: 4.85rem;
		height: 2.23rem;
		width: 13.58rem;
		background: #f0f0f0;
	}
	.to-home img {
		width: 0.91rem;
		height: 0.76rem;
		position: absolute;
		top: 0.73rem;
		left: 0.96rem;
	}
	.to-home span {
		font-size: 0.67rem;
		color: #009ff3;
		position: absolute;
		left: 2.61rem;
		top: 0.77rem;
	}
	.add-warp {
		position: absolute;
		top: 7.07rem;
		background: #fff;
		width: 13.58rem;
	}
	.add {
		font-size: 0.68rem;
		line-height: 2.23rem;
		padding-left: 0.83rem;
	}
	.add-logo {
		color: #ccc;
		position: absolute;
		right: 2.45rem;
	}
</style>
