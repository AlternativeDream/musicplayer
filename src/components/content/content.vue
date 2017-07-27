<template>
    <div class="content">
        <v-header></v-header>
        <div class="nav">
            <ul>
                <li v-bind:class="{ onchoose: isSelect.recommend.select }" v-on:click="switchOption('recommend')"><router-link to="/content/recommend">推荐</router-link></li>
                <li v-bind:class="{ onchoose: isSelect.songlist.select }" v-on:click="switchOption('songlist')"><router-link to="/content/songsheet">歌单</router-link></li>
                <li v-bind:class="{ onchoose: isSelect.FM.select }" v-on:click="switchOption('FM')"><router-link to="/content/fm">主播电台</router-link></li>
                <li v-bind:class="{ onchoose: isSelect.rank.select }" v-on:click="switchOption('rank')"><router-link to="/content/rankinglist">排行榜</router-link></li>
            </ul>
        </div>
        <transition :name="transitionname">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import header from './header/header.vue';
export default {
    data () {
        return {
            thischoose: 1,
            isSelect: {
                recommend: {
                    select: true,
                    index: 1
                },
                songlist: {
                    select: false,
                    index: 2
                },
                FM: {
                    select: false,
                    index: 3
                },
                rank: {
                    select: false,
                    index: 4
                }
            },
            transitionname: ''
        }
    },
    components: {
        'v-header': header
    },
    methods: {
        switchOption (css) {
            this.transitionname = '';
            for(var item in this.isSelect) {
                if(item != css) {
                    this.isSelect[item].select = false;
                }
            }
            this.isSelect[css].select = true;
            if(this.thischoose > this.isSelect[css].index) {
                this.transitionname = 'slide-left';                
            }else if(this.thischoose < this.isSelect[css].index) {
                this.transitionname = 'slide-right';
            }            
            this.thischoose = this.isSelect[css].index;
            console.log(css+"|"+this.transitionname+'|'+this.thischoose);
        }
    }
}
</script>

<style>
a {
    color: #333;
}

.content {
    position: absolute;
    top: 0;
    bottom: 60px;
    width: 100%;
}

.content .nav {
    position: relative;
    top: 0px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #F0F0F0;
}

.content .nav ul {
    display: flex;
    justify-content: space-around;
}

.content .nav li {
    height: 39px;
    padding: 0 6px;
}

.content .onchoose {
    border-bottom: 2px solid #E70000;
}

.content .onchoose a {
    color: #E70000;
}

.slide-left-enter {
    left: 100%
}

.slide-left-leave {
    right: 0;
}

.slide-right-enter {
    right: 100%;
}

.slide-right-leave {
    left: 0;
}

.slide-left-enter-active {
    animation: fadein-left 500ms;
}

.slide-left-leave-active {
    animation: fadeout-left 500ms;
}

.slide-right-enter-active {
    animation: fadein-right 500ms;
}

.slide-right-leave-active {
    animation: fadeout-right 500ms;
}

@keyframes fadein-left {
    0% {
        left: 100%;
    }

    100% {
        left: 0;
    }
}

@keyframes fadeout-left {
    0% {
        right: 0;
    }

    100% {
        right: 100%;
    }
}

@keyframes fadein-right {
    0% {
        right: 100%;
    }

    100% {
        right: 0;
    }
}

@keyframes fadeout-right {
    0% {
        left: 0;
    }

    100% {
        left: 100%;
    }
}

</style>
