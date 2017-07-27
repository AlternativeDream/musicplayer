<template>
    <div class="songsheet">
        <div class="sheet">
            <div class="sheet-header">
                <span class="sheet-title">全部歌单</span>
                <button><i class="iconfont">&#xe619;</i>选择分类</button>
            </div>
            <div class="sheet-recom">
                <div class="sheet-recom-img">
                    <img src="../../../assets/a8.jpg">
                </div>
                <div class="sheet-recom-title">
                    <p>精品歌单</p>
                    <span>『古典』优美的声乐曲集</span>
                    <i class="iconfont">&#xe610;</i>
                </div>
            </div>
            <div class="sheet-item">
                <ul>
                    <li>
                        <img src="../../../assets/a2.jpg" >
                        <p>千古江南，醉里吴音</p>
                    </li>
                    <li>
                        <img src="../../../assets/a3.jpg" >
                        <p>中餐厅背景音乐BGM合集</p>
                    </li>
                    <li>
                        <img src="../../../assets/a4.jpg" >
                        <p>寂静美声</p>
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
                        <img src="../../../assets/a8.jpg" >
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
.songsheet {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.sheet {
    width: 100%;
}

.sheet-header {
    height: 40px;
    width: 100%;
    line-height: 40px;
    border-bottom: 1px solid #F0F0F0;
}

.sheet-title {
    display: inline-block;
    margin-left: 6px;
    font-size: 16px;
}

.sheet-title::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-bottom: -2px;
    border-left: 2px solid #333;
}

.sheet-header button {
    border: none;
    background: #FFF;
    border: 1px solid #E0E0E0;
    padding: 4px;
    border-radius: 4;
    font-size: 12px;
    float: right;
    margin-top: 6px;
    margin-right: 6px;
}

.sheet-header button i {
    font-size: 12px;
}

.sheet-recom {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    border-bottom: 1px solid #F0F0F0;
}

.sheet-recom-img {
    width: 100px;
    height: 100%;
    padding: 6px;
}

.sheet-recom-img img {
    width: 100% !important;
    height: 100% !important;
}

.sheet-recom-title {
    flex: 1;
    height: 100%;
    position: relative;
    padding: 10px;
}

.sheet-recom-title p {
    position: absolute;
    top: 30px;
    font-size: 18px;
}

.sheet-recom-title span {
    position: absolute;
    top: 56px;
    color: #999;
}

.sheet-recom-title i {
    position: absolute;
    top: 40px;
    right: 10px;
    font-size: 20px;
    color: #CCC;
}

.sheet-item ul {
    padding: 6px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.sheet-item li {
    margin: 1%;
    width: 48%;
    text-align: center;
    height: 240px;
}

.sheet-item img {
    width: 100%;
    height: auto;
}

.sheet-item p {
    display: inline-block;
    width: 100%;
    word-wrap: break-word;
    text-align: left;
    margin-top: 1%;
}

</style>
