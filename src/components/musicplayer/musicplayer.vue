<template>
    <div class="bg-color">
            <div class="player"></div>
            <div class="player-content">
                <div class="songname">
                    <i class="iconfont" v-on:click="goback()" >&#xe67f;</i>
                    <p>美人鱼</p>
                    <span>周杰伦</span>
                    <i class="iconfont">&#xe630;</i>
                </div>
                <div class="jukebox">
                    <img class="motor" src="../../assets/header.png">
                    <div class="record"></div>
                </div>
                <div class="songoptions">
                    <i class="iconfont">&#xe605;</i>
                    <i class="iconfont">&#xe608;</i>
                    <i class="iconfont">&#xe600;</i>
                    <i class="iconfont">&#xe63f;</i>
                </div>
                <div class="progress">
                    <span>00:00</span>
                    <div class="progress-bar">
                        <div class="bar-now"></div>
                        <div class="bar-cache"></div>
                    </div>
                    <span>05:00</span>
                </div>
                <div class="control">
                    <div><i class="iconfont pattern">&#xe62b;</i></div>
                    <div><i class="iconfont prev-song">&#xe60b;</i></div>
                    <div><i class="iconfont play">&#xe672;</i></div>
                    <div><i class="iconfont next-song">&#xe613;</i></div>
                    <div><i class="iconfont list-song">&#xe60d;</i></div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    methods: {
        goback () {
            history.go(-1);
        }
    }
}
</script>

<style>
@import '../../common/stylus/iconfont.css';
.bg-color {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #FFF;
    z-index: 9;
    background: #FFF;
}

.player {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #FFF;
    z-index: 10;
    background: url('../../assets/a7.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(60px);
}

.player-content {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 11;
    background: rgba(0,0,0,.2);
}

.songname {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 60px;
    color: #FFF;
}

.songname i {
    width: 50px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
}

.songname p {
    flex: 1;
    padding: 6px;
    font-size: 18px;
}

.songname span {
    position: absolute;
    top: 34px;
    left: 56px;
    font-size: 12px;
    color: #DDD;
}

.jukebox {
    position: absolute;
    top: 60px;
    bottom: 190px;
    width: 100%;
}

.jukebox .motor {
    position: absolute;
    left: 46%;
    z-index: 12;
}

.jukebox .record {
    position: absolute;
    height: 300px;
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 50px solid #000;
    border-radius: 50%;
    background: url('../../assets/a7.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

.songoptions {
    display: flex;
    position: absolute;
    bottom: 130px;
    height: 60px;
    width: 100%;
    justify-content: center;
}

.songoptions i {
    width: 80px;
    text-align: center;
    color: #C0C0C0;
    font-size: 30px;
}

.progress {
    display: flex;
    position: absolute;
    bottom: 100px;
    height: 30px;
    width: 100%;
    justify-content: center;
}

.progress-bar {
    position: relative;
    height: 1px;
    width: 70%;
    background: #C0C0C0;
}

.progress-bar::before {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    left: 30%;
    margin-top: -8px;
    border-radius: 50%;
    background: #FFF;
    z-index: 11;
}

.bar-now {
    position: absolute;
    width: 30%;
    height: 1px;
    background: #E70000;
    z-index: 10;
}

.bar-cache {
    position: absolute;
    width: 50%;
    height: 1px;
    background: #D0D0D0;
    z-index: 9;
}

.progress span {
    width: 50px;
    text-align: center;
    font-size: 12px;
    margin-top: -4px;
    color: #C0C0C0;
}

.control {
    display: flex;
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
}

.control div {
    width: 20%;
    height: 100%;
    line-height: 100px;
    text-align: center;
    color: #FFF;
}

.pattern, .list-song {
    font-size: 24px;
}

.prev-song, .next-song {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border: 2px solid #FFF;
    border-radius: 50%;
    font-size: 16px;
}

.play {
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    margin-top: 14px;
    border: 2px solid #FFF;
    border-radius: 50%;
    font-size: 30px;
}

</style>
