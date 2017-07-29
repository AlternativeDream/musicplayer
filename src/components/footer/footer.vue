<template>
    <div class="footer">
        <div class="switch-page" v-bind:class="{ onchoose: isSelect.content }" v-on:click="switchPage('content')" >
            <router-link to="/content">
                <i class="iconfont">&#xe662;</i>
                <p>发现音乐</p>
            </router-link>
        </div>
        <div class="switch-page" v-bind:class="{ onchoose: isSelect.mymusic }" v-on:click="switchPage('mymusic')" >
            <router-link to="/mymusic">
                <i class="iconfont">&#xe680;</i>
                <p>我的音乐</p>
            </router-link>
        </div>
        <div class="switch-page" v-bind:class="{ onchoose: isSelect.friend }" v-on:click="switchPage('friend')" >
            <router-link to="/friends">
                <i class="iconfont">&#xe648;</i>
                <p>朋友</p>
            </router-link>
        </div>
        <div class="switch-page" v-bind:class="{ onchoose: isSelect.accound }" v-on:click="switchPage('accound')" >
            <router-link to="/accound">
                <i class="iconfont">&#xe614;</i>
                <p>账号</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isSelect: {
                content: true,
                mymusic: false,
                friend: false,
                account: false
            }
        }
    },
    methods: {
        switchPage (css) {
            for(var item in this.isSelect) {
                if(item != css) {
                    this.isSelect[item] = false;
                }
            }
            this.isSelect[css] = true;
        }
    }
}
</script>

<style>
.footer {
    display: flex;
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    background: #333;
    justify-content: space-between;
}

.footer a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #999;
}

.footer .switch-page {
    width: 25%;
    text-align: center;
}

.footer .onchoose a {
    background: #E70000;
    color: #FFF !important;
}

.switch-page i {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 30px;
    margin: 8px 0 0;
}

.switch-page p {
    font-size: 12px;
}
</style>

