<template>
    <div class="mymusic">
        <v-header></v-header>
        <div class="mymusic-sheet">
                <div class="record">
                <ul>
                    <li>
                        <i class="iconfont">&#xe608;</i>
                        <p>下载音乐</p>
                        <span>0<i class="iconfont">&#xe610;</i></span>
                    </li>
                    <li>
                        <i class="iconfont">&#xe649;</i>
                        <p>最近播放</p>
                        <span>0<i class="iconfont">&#xe610;</i></span>
                    </li>
                    <li>
                        <i class="iconfont">&#xe61b;</i>
                        <p>我的歌手</p>
                        <span>0<i class="iconfont">&#xe610;</i></span>
                    </li>
                    <li>
                        <i class="iconfont">&#xe602;</i>
                        <p>我的MV</p>
                        <span>0<i class="iconfont">&#xe610;</i></span>
                    </li>
                </ul>
            </div>
            <div class="mysong">
                <div class="createsheet">
                    <i class="iconfont">&#xe60c;</i>
                    <p>我创建的歌单(<span>1</span>)</p>
                </div>
                <ul>
                    <li>
                        <img>
                        <div class="sheet-detail">
                            <p>我喜欢的音乐</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/a8.jpg" >
                        <div class="sheet-detail">
                            <p>我的歌单</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="collection">
                <div class="createsheet">
                    <i class="iconfont">&#xe60c;</i>
                    <p>我收藏的歌单(<span>1</span>)</p>
                </div>
                <ul>
                    <li>
                        <img src="../../assets/a3.jpg" >
                        <div class="sheet-detail">
                            <p>歌单1</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/a4.jpg" >
                        <div class="sheet-detail">
                            <p>歌单2</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/a6.jpg" >
                        <div class="sheet-detail">
                            <p>歌单3</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../assets/a5.jpg" >
                        <div class="sheet-detail">
                            <p>歌单4</p>
                            <span>100首</span>
                            <span>by xxx</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import header from './header/header.vue';
export default {
    components: {
        'v-header': header
    }
}
</script>

<style>
@import '../../common/stylus/iconfont.css';
.mymusic {
    position: absolute;
    top: 0;
    bottom: 60px;
    width: 100%;
}

.mymusic-sheet {
    position: absolute;
    top: 40px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.record {
    width: 100%;
}

.record li {
    display: flex;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
}

.record li i {
    display: inline-block;
    width: 60px;
    text-align: center;
    font-size: 20px;
}

.record li span {
    position: relative;
    width: 60px;
    padding-right: 28px;
    text-align: right;
    color: #999;
    border-bottom: 1px solid #F0F0F0;
}

.record li span i {
    position: absolute;
    width: 10px;
    top: 1px;
    padding-left: 2px;
    font-size: 16px;
}

.record li p {
    flex: 1;
    font-size: 16px;
    border-bottom: 1px solid #F0F0F0;
}

.createsheet {
    display: flex;
    justify-content: space-between;
    background: #F0F0F0;
    height: 30px;
    line-height: 30px;
}

.createsheet i {
    display: inline-block;
    width: 30px;
    text-align: center;
    padding: 1px;
}

.createsheet p {
    flex: 1;
}

.mysong li, .collection li {
    display: flex;
    height: 60px;
    padding: 5px;
    padding-left: 10px;
}

.mysong li img, .collection li img {
    width: 50px;
    height: 50px;
    background: #333;
}

.sheet-detail {
    flex: 1;
    height: 56px;
    margin-left: 6px; 
    padding: 6px;
    border-bottom: 1px solid #F0F0F0;
}

.sheet-detail p {
    font-size: 16px;
}

.sheet-detail span {
    font-size: 12px;
    color: #999;
}
</style>
