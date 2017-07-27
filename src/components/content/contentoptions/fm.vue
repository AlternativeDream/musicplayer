<template>
    <div class="fm">
        <div class="fmnav">
            <ul>
                <li>
                    <i class="iconfont">&#xe635;</i>
                    <p>有声书</p>
                </li>
                <li>
                    <i class="iconfont">&#xe64d;</i>
                    <p>知识技能</p>
                </li>
                <li>
                    <i class="iconfont">&#xe6b2;</i>
                    <p>商业财经</p>
                </li>
                <li>
                    <i class="iconfont">&#xe8d5;</i>
                    <p>人文历史</p>
                </li>
                <li>
                    <i class="iconfont">&#xe6e8;</i>
                    <p>外语世界</p>
                </li>
                <li>
                    <i class="iconfont">&#xe607;</i>
                    <p>亲自宝贝</p>
                </li>
                <li>
                    <i class="iconfont">&#xe60e;</i>
                    <p>创作翻唱</p>
                </li>
                <li>
                    <i class="iconfont">&#xe680;</i>
                    <p>音乐故事</p>
                </li>
            </ul>
        </div>
        <div class="fmrank">
            <p>主播电台排行榜<i class="iconfont">&#xe610;</i></p>
            <span>最火的节目和电台，每天更新</span>
            <img src="../../../assets/a10.jpg" >
        </div>
        <div class="fmrecom">
            <div class="fm-program"><p>精彩节目推荐</p></div>
            <ul>
                <li>
                    <img src="../../../assets/a5.jpg">
                    <div>
                        <p>第二季 - 你知道松鼠桂鱼名字的来由吗？</p>
                        <span>我们爱吃的鱼都以洄游鱼类居多？</span>
                    </div>
                </li>
                <li>
                    <img src="../../../assets/a6.jpg">
                    <div>
                        <p>十二星座的睡前故事</p>
                        <span>一期帮大家催眠的节目</span>
                    </div>
                </li>
                <li>
                    <img src="../../../assets/a7.jpg">
                    <div>
                        <p>精益创业：创业像开车一样简单？</p>
                        <span>“业”要怎么“创”呢？</span>
                    </div>
                </li>
                <li>
                    <img src="../../../assets/a8.jpg">
                    <div>
                        <p>钮大可与成本与 山谷与风的对话（1989） -听山</p>
                        <span>听山谷的爱与风的心事</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.content .fm {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.fmnav ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
}

.fmnav li {
    width: 25%;
    text-align: center;
    margin-top: 16px;
}

.fmnav li i {
    font-size: 30px;
    color: #AAA;
}

.fmnav li p {
    font-size: 12px;
    color: #666;
}

.fmrank {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin: 6px;
    padding: 6px;
    border: 1px solid #F0F0F0;
}

.fmrank p {
    margin-top: 20px;
    font-size: 18px;
    margin-left: 10px;
}

.fmrank p i {
    margin-left: 4px;
    font-size: 18px;
}

.fmrank span {
    position: absolute;
    top: 50px;
    left: 16px;
    font-size: 14px;
    color: #999;
}

.fmrank img {
    height: 80px;
}

.fmrecom .fm-program {
    margin-top: 20px;
    border-bottom: 1px solid #F0F0F0;
}

.fmrecom .fm-program p {
    padding: 10px;
    font-size: 18px;
}

.fmrecom .fm-program p::before {
    content: '';
    height: 16px;
    border-left: 4px solid #333;
    margin-right: 4px;
}

.fmrecom li {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border-bottom: 1px solid #F0F0F0;
}

.fmrecom li img {
    height: 60px;
}

.fmrecom li div {
    flex: 1;
    padding: 10px;
}

.fmrecom li p {
    font-size: 16px;
    color: #000;
    margin-bottom: 2px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.fmrecom li span {
    color: #999;
}

</style>
