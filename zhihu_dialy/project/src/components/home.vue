//主页
<template>
	<div>
		<transition name="show">
			<div v-show="showSide">
				<side></side>
				<div id="mask" @click="hidenSide()"></div>
			</div>
		</transition>
		<div id="nav">
			<transition name="rata">
	    		<img @click="side()" class="nav_mine_log" src="/static/img/nav_mine.png">
	    	</transition>
	    	<span class="nav_home_log">首页</span>
	    	<router-link to="/login">
	    	<img class="nav_lingdang_log" src="/static/img/nav_lingdang.png">
	    	</router-link>
	    	<img class="nav_set_log" src="/static/img/nav_set.png">
		</div>
	   	<!-- <slider></slider> -->
    	<newsList></newsList>
	</div>
</template>

<script type="text/javascript">
	// import navView from './nav.vue'
// import slider from './slider.vue'
import newsList from './newsList.vue'
import side from './side.vue'
export default {
    components: {
        newsList,
        side
    },
    data: function () {
        return {
            showSide: false
        }
    },
    methods: {
        side: function () {
            this.showSide = true
        },
        hidenSide: function () {
            this.showSide = false
        }
    }
}
</script>

<style type="text/css">
	#nav {
		width: 16rem;
		height: 2.5rem;
		background: #00a2ea;
		flex: 1;
		position: relative;
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
	.show-enter-active {
		transition: 1s all ease;
	}
	.show-enter {
		left: -13.58rem;
	}
	.show-enter-active {
		left: 0rem;
	}
	.show-leave {
		left: 0rem;
	}
	.show-leave-active {
		left: -13.58rem;
	}
	.rotate-enter {
		transform: rotate(0deg);
	}
	.rotate-enter-active {
		transform: rotate(90deg);
	}
</style>
