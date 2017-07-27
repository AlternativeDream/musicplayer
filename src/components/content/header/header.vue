<template>
    <div class="header">
        <i class="iconfont">&#xe71b;</i>
        <div class="search">
            <i class="iconfont">&#xe625;</i>
            <input type="text" placeholder="搜索音乐、歌词、电台" />
        </div>
        <i class="iconfont">&#xe612;</i>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../../common/stylus/iconfont.css';

:root {
    --header-height: 40px;
}

.header {
    display: flex;
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

</style>