<template>
    <div class="rankinglist">
        <div class="rankingtitle"><p>云音乐官方榜</p></div>
        <ul>
            <li>
                <img src="../../../assets/a1.jpg" >
                <div>
                    <p>1、三生三世十里桃花 - 那英</p>
                    <p>2、九张机 - 叶炫清</p>
                    <p>3、不冷不热 - Panta.Q</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/a2.jpg" >
                <div>
                    <p>1、越过山丘 - 杨宗伟</p>
                    <p>2、九张机 - 叶炫清</p>
                    <p>3、非酋 - 薛明远</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/a3.jpg" >
                <div>
                    <p>1、不用去猜 - Jony J</p>
                    <p>2、依然 - Panta.Q/Julia Wu</p>
                    <p>3、我们向往着哪里 - 马晓</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/a4.jpg" >
                <div>
                    <p>1、越过山丘 - 杨宗伟</p>
                    <p>2、追光者 - 叶炫清</p>
                    <p>3、再也没有 - Ryan.B</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
.content .rankinglist {
    position: absolute;
    top: 80px;
    bottom: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.rankingtitle p {
    padding: 10px;
    font-size: 18PX;
}

.rankingtitle p::before {
    content: '';
    height: 16px;
    border-left: 4px solid #333;
    margin-right: 4px;
}

.rankinglist ul {
    padding: 10px;
}

.rankinglist li {
    margin-bottom: 10px;
    display: flex;
}

.rankinglist li img {
    width: 120px;
    height: 120px;
    background: #F0F0F0;
}

.rankinglist li div {
    flex: 1;
    padding: 16px 0;
}

.rankinglist li div p {
    padding: 6px;
    font-size: 12px;
}
</style>
