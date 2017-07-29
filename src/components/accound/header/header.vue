<template>
    <div class="header">
        <i class="iconfont"></i>
        <span class="title">账号</span>
        <i class="iconfont" v-on:click="toplayer()" >&#xe612;</i>
    </div>
</template>

<script>
export default {
    methods: {
        toplayer () {
            this.$router.push({ path: '/musicplayer'});
        }
    }
}
</script>

<style>
@import '../../../common/stylus/iconfont.css';

:root {
    --header-height: 40px;
}

.header {
    display: flex;
    width: 100%;
    height: var(--header-height);
    background: #E70000;
    justify-content: space-between;
}

.header i {
    display: inline-block;
    height: 100%;
    width: 60px;
    font-size: 24px;
    color: #FFF;
    text-align: center;
    line-height: var(--header-height);
}

.header .more {
    display: inline-block;
    height: 100%;
    width: 50px;
    font-size: 14px;
    color: #FFF;
    text-align: center;
    line-height: var(--header-height);
}

.header .search {
    position: relative;
    flex: 1;
    height: 100%;
    text-align: center;
    padding-top: 4px;
}

.header .search i {
    position: absolute;
    top: 2px;
    left: 10px;
    font-size: 18px;
    height: 20px;
    width: 20px;
    color: #333;
}

.header .search input {
    height: 32px;
    width: 100%;
    border-radius: 6px;
    border: none;
    text-align: center;
}

.header .title {
    display: inline-block;
    height: 100%;
    line-height: var(--header-height);
    color: #FFF;
    font-size: 18px;
}

.header .local {
    width: 140px;
    height: 30px;
    margin-top: 5px;
    border: 2px  solid  #FFF;
    border-radius: 4px;
    text-align: center;
    display: flex;
}

.header .local span {
    display: inline-block;
    width: 50%;
    color: #FFF;
    padding: 2px;
    font-size: 16px;
}

.header .local .onfollow {
    background: #FFF;
    color: #E70000;
}

</style>