<template>
    <div class="content-recommend">
        <div class="slide">
            <ul>
                <li>
                    <img src="../../../assets/1.png" >
                </li>
            </ul>
        </div>
        <div class="music">
            <div class="recom-fm">
                <i class="iconfont">&#xe601;</i>
                <p>私人FM</p>
            </div>
            <div class="personal">
                <span class="date">25</span>
                <p>个性化推荐</p>
            </div>
            <div class="newsong">
                <i class="iconfont">&#xe6b1;</i>
                <p>云音乐新歌榜</p>
            </div>
        </div>
        <div class="recommend">
            <div class="title" >
                <span><i class="iconfont">&#xe74a;</i>推荐歌单</span>
                <span>更多<i class="iconfont">&#xe610;</i></span>
            </div>
            <div class="resongsheet">
                <ul>
                    <li>
                        <img src="../../../assets/a2.jpg" >
                        <p>阅尽沧桑，洗尽铅华；聆听...</p>
                    </li>
                    <li>
                        <img src="../../../assets/a3.jpg" >
                        <p>说起来很霸气 唱起来很酷</p>
                    </li>
                    <li>
                        <img src="../../../assets/a4.jpg" >
                        <p>每人一首良曲</p>
                    </li>
                    <li>
                        <img src="../../../assets/a5.jpg" >
                        <p>经典男声</p>
                    </li>
                    <li>
                        <img src="../../../assets/a6.jpg" >
                        <p>经典女声</p>
                    </li>
                    <li>
                        <img src="../../../assets/a7.jpg" >
                        <p>纯音乐</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>

.content-recommend {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.content .slide {
    position: relative;
    width: 100%;
}

.content .slide li img {
    height: 200px;
}

.content .music {
    display: flex;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #F0F0F0;
    justify-content: space-around;
}

.content .music p {
    margin-top: 10px;
}

.content .music div {
    margin: 20px 0;
    text-align: center;
    width: 90px;
}

.content .music i, .content .music .date {
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 2px solid #E70000;
    font-size: 30px;
    border-radius: 50%;
    color: #E70000;
}

.content .recommend .title {
    display: flex;
    justify-content: space-between;
    padding: 6px;
}

.recommend .title span:first-child {
    font-size: 18px;
}

.recommend .title span:first-child i {
    font-size: 26px;
    margin: 0 6px;
    color: #E70000;
}

.content .resongsheet ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.content .resongsheet li {
    width: 33%;
    text-align: center;
    margin-top: 10px;
}

.content .resongsheet img {
    width: 100px;
    height: 100px;
}

.content .resongsheet p {
    display: inline-block;
    width: 100px;
    word-wrap: break-word;
    text-align: left;
}

</style>


