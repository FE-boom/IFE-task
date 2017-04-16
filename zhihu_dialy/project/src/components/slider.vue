//轮播图
<template>
    <div id="slider">
    	<ul class="img">
    		<li>
    			<img :src="nowSrc">
    			<p>{{nowP}}</p>
    		</li>
    	</ul>
    	<ol>
       	 	<li :class="{'active': isActive[0]}"></li>
        	<li :class="{'active': isActive[1]}"></li>
       		<li :class="{'active': isActive[2]}"></li>
            <li :class="{'active': isActive[3]}"></li>
            <li :class="{'active': isActive[4]}"></li>
    	</ol>
    </div>
</template>

<script type="text/javascript">
    export default {
        data: function () {
            return {
                topNewsImg: [],
                topNewsText: [],
                nowSrc: '/static/img/img_1.jpg',
                nowP: '太阳天空照',
                i: 0,
                isActive: [false, false, false, false, false]
            }
        },
        mounted () {
            this.imgTab()
        },
        methods: {
            imgTab () {
                this.nowSrc = this.src[0]
                this.isActive[0] = true
                let _this = this
                setInterval(function () {
                    for (let i = 0; i < _this.isActive.length; i++) {
                        _this.isActive[i] = false
                    }
                    _this.i++
                    _this.nowSrc = _this.src[_this.i % _this.src.length]
                    _this.isActive[_this.i % _this.isActive.length] = true
                }, 2000)
            },
            getTopNews () {
                let _this = this
                this.$http.get()
            }
        }
    }
</script>

<style type="text/css">
    #slider {
        width:16rem;
        height: 10rem;
    }
    #slider img {
        width: 16rem;
        height: 10rem;
        display:block;
        position: absolute;
    }
    #slider p {
        position: absolute;
        top: 9.1rem;
        color: #fff;
        left: 0.8rem;
        font-size: 0.9rem;
    }
    #slider ol {
        position:absolute;
        left: 5rem;
        top: 10rem;
    }
    #slider ol li {
        width:0.3rem;
        height:0.3rem; 
        background:#858585; 
        float:left; 
        border-radius:50%; 
        margin-right:0.14rem;
    }
    #slider ol li.active { 
        background:#fff;
    }
</style>
