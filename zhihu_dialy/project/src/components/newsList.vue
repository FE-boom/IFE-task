//新闻组件
<template>
    <div>
        <div id="slider">
            <div class="img">
                <div>
                    <img :src="nowSrc">
                    <p>{{nowP}}</p>
                </div>
            </div>
            <ol>
                <li :class="{'active': isActive[0]}"></li>
                <li :class="{'active': isActive[1]}"></li>
                <li :class="{'active': isActive[2]}"></li>
                <li :class="{'active': isActive[3]}"></li>
                <li :class="{'active': isActive[4]}"></li>
            </ol>
        </div>
        <div id="news">
            <p class="hot-content">今日热文</p>
            <ul class="clearfix">
                <li v-for="item in newsArr">
                    <router-link :to="'/newsContent'+item.id">
                        <p>{{item.title}}</p>
                        <img :src="item.images">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                newsArr: [],
                topNews: [],
                src: [],
                nowSrc: '',
                nowP: '正在加载',
                i: 0,
                isActive: [false, false, false, false, false]
            }
        },
        // 获取数据
        created () {
            this.getNews()
            // this.slider()
        },
        methods: {
            getNews () {
                var _this = this
                this.$http.get('api/news/latest').then(function (res) {
                    _this.newsArr = res.data.stories
                    _this.topNews = res.data.top_stories
                    _this.nowSrc = _this.topNews[0].image
                    _this.nowP = _this.topNews[0].title
                    _this.isActive[0] = true
                    setInterval(function () {
                        _this.nowSrc = _this.topNews[_this.i % _this.topNews.length].image
                        _this.nowP = _this.topNews[_this.i % _this.topNews.length].title
                        for (var i = 0; i < _this.topNews.length; i++) {
                            _this.isActive[i] = false
                        }
                        _this.isActive[_this.i % _this.topNews.length] = true
                        _this.i++
                    }, 3000)
                    // console.log(res.data.top_stories)
                }).catch(function (err) {
                    alert(err)
                })
            }
        }
    }
</script>

<style scoped>
    #slider {
        width:16rem;
        height: 10rem;
        top: 0rem;
    }
    #slider img {
        width: 16rem;
        height: 10rem;
        display:block;
        position: absolute;
        left: 0rem;
    }
    #slider p {
        position: absolute;
        top: 8.1rem;
        color: #fff;
        left: 0.8rem;
        font-size: 0.9rem;
        line-height: 0.9rem;
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
    #news {
        width: 16rem;
        position: relative;
        top: 0rem;
        left: 0rem;
        background: #f3f3f3;
    }
    .hot-content {
        font-size: 0.58rem;
        line-height: 0.58rem;
        position: absolute;
        top: 0.85rem;
        left: 0.74rem;
        color: #6f6f6f;
    }
    #news ul {
        position: absolute;
        top: 3.34rem;
        left: -0.5rem;
        right: 0rem;
    }
    #news ul li {
        background: #fafafa;
        width: 14.73rem;
        height: 4.4rem;
        border: 1px solid #e7e7e7;
        border-radius: 5%;
        font-size: 0.74rem;
        line-height: 0.95rem;
        padding-top: 0.76rem;
        padding-left: 0.33rem;
        margin-bottom: 0.34rem;
    }
    #news ul li p {
        width: 9.73rem;
        float: left;
    }
    #news ul li img {
        width: 3.64rem;
        height: 3.19rem;
        margin-right: 0.74rem;
        float: right;
    }
</style>
