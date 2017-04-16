<template>
    <div>
        <div class="news-nav">
            <router-link to="/home">
                <img class="back" src="/static/img/login_back.png">
            </router-link>
            <img class="share" src="/static/img/news_share.png">
            <img class= "star" src="/static/img/mine_star.png">
            <img class="commit" src="/static/img/news_commit.png">
            <img class="zan" src="/static/img/news_zan.png">
        </div>
        <div class="news-top-img">
            <img class="top-img" :src="newsText.image">
            <p class="top-h">{{newsText.title}}</p>
        </div>
        <div>
            <p class="news-text" v-html="newsText.body">{{newsText}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                newsText: '正在加载'
            }
        },
        created () {
            var reg = /\d+/g
            var id = this.$route.path.match(reg)
            console.log(id)
            this.getNewsText(id)
            console.log(this.$route.path)
        },
        methods: {
            getNewsText (id) {
                let _this = this
                var url = '/api/news/' + id
                console.log(url)
                this.$http.get(url).then(function (res) {
                    _this.newsText = res.data
                    console.log(res.data)
                })
            }
        }
    }
</script>

<style scoped>
    .news-nav {
        width: 16rem;
        height: 2.5rem;
        position: relative;
        background: #00a2e5;
    }
    .news-nav img{
        position: absolute;
        top: 0.85rem;
        height: 0.73rem;
    }
    .back {
        width: 0.7rem;
        left: 0.89rem;
    }
    .share {
        width: 0.8rem;
        left: 5.74rem;
    }
    .star {
        width: 0.88rem;
        left: 8.20rem;
    }
    .commit {
        width: 0.91rem;
        left: 10.49rem;
    }
    .zan {
        width: 1.07rem;
        left: 13.04rem;
    }
    .top-img {
        width: 16rem;
        height: 9.60rem;
        display:block;
        position: absolute;
    }
    .top-h {
        position: absolute;
        top: 8rem;
        color: #fff;
        left: 0.8rem;
        font-size: 0.9rem;
    }
    /*.news-summary {
        position: absolute;
        top: 12.60rem;
    }
    .recommenders {
        font-size: 0.7rem;
        position: absolute;
        left: 0.95rem;
    }
    .recommenders-span {
        color: #235594;
    }
    .news-summary-h {
        font-size: 0.8rem;
        line-height: 1.1rem;
        position: absolute;
        top: 2.89rem;
        left: 0.95rem;
        color: #080808;
    }
    .section {
        position: relative;
        top: 6.20rem;
        left: 0.95rem;
    }*/
    /*.news-text {
        font-size: 0.65rem;
        line-height: 1.20rem;
        position: absolute;
        top: 8.04rem;
        left: 0.48rem;
    }*/
    @import url("http://news-at.zhihu.com/css/news_qa.auto.css");
</style>
