<template>
    <div class="accound">
        <v-header></v-header>
        <div class="accound-detail">
            <div class="accound-info">
                <div class="accound-user">
                    <img class="accound-icon" src="../../assets/tx49.jpg">
                    <p class="accound-name">Test</p>
                    <span class="level">Lv.1</span>
                    <button><i class="iconfont">&#xe661;</i>签到</button>
                </div>
                <div class="accound-datum">
                    <div class="accound-data">
                        <p>动态</p>
                        <span>0</span>
                    </div>
                    <div class="accound-data">
                        <p>关注</p>
                        <span>0</span>
                    </div>
                    <div class="accound-data">
                        <p>粉丝</p>
                        <span>0</span>
                    </div>
                    <div class="accound-data">
                        <i class="iconfont">&#xe62f;</i>
                        <span>编辑资料</span>
                    </div>
                </div>
            </div>
            <div class="accound-options">
                <ul>
                    <li>
                        <i class="iconfont">&#xe63b;</i>
                        <p>我的消息</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="iconfont">&#xe679;</i>
                        <p>会员中心</p>
                        <span>会员专享演出抽奖</span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe69c;</i>
                        <p>积分商城</p>
                        <span>137积分</span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe72e;</i>
                        <p>在线听歌免流量</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="iconfont">&#xe604;</i>
                        <p>设置</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe603;</i>
                        <p>主体换肤</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe6e4;</i>
                        <p>夜间模式</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe649;</i>
                        <p>定时关闭</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe615;</i>
                        <p>音乐闹钟</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
                    </li>
                    <li>
                        <i class="iconfont">&#xe61c;</i>
                        <p>驾驶模式</p>
                        <span></span>
                        <i class="iconfont">&#xe610;</i>
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

.accound .accound-detail {
    position: absolute;
    top: 40px;
    bottom: 60px;
    width: 100%;
    background: #F0F0F0;
    overflow-y: auto;
    overflow-x: hidden;
}

.accound-info {
    width: 100%;
    background: #FFF;
}

.accound-info .accound-user {
    border: 1px solid #F0F0F0;
}

.accound-info .accound-icon {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 20px;
}

.accound-info .accound-name {
    display: inline-block;
    vertical-align: top;
    margin-top: 40px;
    font-size: 18px;
}

.accound-info .level {
    display: block;
    position: absolute;
    top: 64px;
    left: 104px;
    width: 40px;
    text-align: center;
    border: 1px  solid #BBB;
    border-radius: 10px;
}

.accound-info button {
    position: absolute;
    top: 50px;
    right: 10px;
    height: 30px;
    width: 70px;
    border: none;
    background: #FFF;
    border: 1px solid #333;
    border-radius: 4px;
}

.accound-info button i {
    margin-right: 6px;
}

.accound-info .accound-datum {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.accound-info .accound-data {
    width: 25%;
    text-align: center;
    padding: 10px;
}

.accound-info .accound-data p {
    font-size: 14px;
    color: #999;
}

.accound-info .accound-data span {
    font-size: 16px;
    color: #333;
}

.accound-info .accound-data i {
    display: block;
    font-size: 18px;
    color: #999;
}

.accound-detail .accound-options ul {
    width: 100%;
    background: #FFF;
    margin-top: 10px;
}

.accound-detail .accound-options li {
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    border: 1px solid #F0F0F0;
}

.accound-detail .accound-options i {
    width: 50px;
    text-align: center;
}

.accound-detail .accound-options i:first-child {
    font-size: 20px;
    color: #999;
}

.accound-detail .accound-options i:last-child {
    font-size: 18px;
    width: 30px;
    color: #CCC;
}

.accound-detail .accound-options p {
    flex: 1;
    font-size: 18px;
}

.accound-detail .accound-options span {
    font-size: 14px;
    color: #CCC;
}
</style>
