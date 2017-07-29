<template>
    <div class="friends">
        <v-header></v-header>
        <div class="share">
            <ul>
                <li>
                    <div class="share-title">
                        <img src="../../assets/tx49.jpg">
                        <div>
                            <span class="accound-name">XXX</span>
                            <span>分享单曲:</span>
                            <span class="share-time">昨天14:17</span>
                            <button class="follow">
                                <i class="iconfont">&#xe9a5;</i>
                                关注
                            </button>
                            <i class="iconfont accound-detail">&#xe60c;</i>
                        </div>
                    </div>
                    <div class="share-detail">
                        <p><span>#周杰伦#</span>全新MV —— 美人鱼</p>
                        <img src="../../assets/2.png">
                        <div class="share-song" >
                            <img src="../../assets/a8.jpg" >
                            <p>美人鱼</p>
                            <span>周杰伦</span>
                        </div>
                        <a class="">获取新MV资讯</a>
                    </div>
                    <div class="operation">
                        <div class="praise">
                            <i class="iconfont">&#xe61a;</i>
                            <span>33</span>
                        </div>
                        <div class="comment">
                            <i class="iconfont">&#xe600;</i>
                            <span>6</span>
                        </div>
                        <div class="forword">
                            <i class="iconfont">&#xe627;</i>
                            <span>转发</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="write">
            <i class="iconfont">&#xe64c;</i>
        </div>
    </div>
</template>

<script>
import header from './header/header.vue';
export default {
    data () {
        return {
            
        }
    },
    components: {
        'v-header': header
    }
}
</script>

<style>
@import '../../common/stylus/iconfont.css';
.friends {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.share {
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.share-title {
    display: flex;
    padding: 10px;
}

.share-title img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}

.share-title div {
    position: relative;
    width: 100%;
}

.share-title div .accound-name {
    color: #8AACFF;
    margin-right: 10px;
}

.share-title div .share-time {
    position: absolute;
    left: 0;
    top: 18px;
    font-size: 12px;
    color: #AAA;
}

.share-title .follow {
    position: absolute;
    right: 30px;
    background: #FFF;
    border: none;
    border: 1px solid #C0C0C0;
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 12px;
}

.share-title .follow i {
    font-size: 12px;
    color: #000;
}

.share-title .accound-detail {
    position: absolute;
    top: 6px;
    right: 2px;
    color: #BBB;
}

.share-detail {
    width: 100%;
    padding: 0 10px 10px 50px;
}

.share-detail img {
    width: 100%;
    margin-top: 10px;
}

.share-song {
    position: relative;
    width: 100%;
    background: #F0F0F0;
    padding: 0 10px 10px;
    margin-top: 2px;
}

.share-song img {
    width: 40px;
}

.share-song p {
    display: inline-block;
    vertical-align: top;
    padding: 8px;
}

.share-song span {
    position: absolute;
    top: 30px;
    left: 62px;
    font-size: 12px;
    color: #999;
}

.share-detail a {
    position: relative;
    top: 6px;
    left: 20px;
    font-size: 12px;
    color: #BBB;
}

.operation {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.operation .praise, .operation .comment, .operation .forword {
    color: #999;
}

.operation .praise {
    margin-right: 40px;
}

.operation .comment {
    margin-right: 40px;
}

.operation .forword {
    margin-right: 20px;
    margin-top: -2px;
}

.friends .write {
    display: flex;
    position: absolute;
    left: 10px;
    bottom: 70px;
    height: 60px;
    line-height: 60px;
    width: 60px;
    background: rgba(0,0,0,.6);
    border-radius: 50%;
}

.friends .write i {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: #FFF;
}

</style>