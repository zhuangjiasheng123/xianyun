<template>
    <section class="container">
        <h2 class="air_title">
            <span class="iconfont iconfeiji"></span>
            <i>国内机票</i>
            </h2>
        <!-- 左边搜索 -->
        <el-row class="left_search" type='flex' justify='space-between'>
            <!-- 搜索表单 -->
            <SearchForm/>
            
            <div class="sale_banner">
                <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" alt="">
            </div>
        </el-row>
        <!-- 中间广告栏 -->
        <el-row type='flex' class="statement" >
            <el-col :span='8'>
                 <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409EFF;"></i>
                <span>100%航协认证</span>
            </el-col>
            <el-col :span='8'>
                <i class="iconfont iconbaozheng" style="color:green;"></i>
                <span>出行保证</span>
            </el-col>
            <el-col :span='8'>
                 <i class="iconfont icondianhua" style="color:#409EFF;"></i>
                <span>7x24小时服务</span>
            </el-col>
        </el-row>
        <!-- 底部特价机票和图片 -->
        <h2 class="air_sale_title">
            <span class="iconfont icontejiajipiao"></span>
            <i>特价机票</i>
        </h2>
        <div class="air_sale">特价机票</div>
    </section>
</template>
<script>
import SearchForm from '@/components/air/searchForm'
export default {
    components: {
        SearchForm,
    },
    data () {
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 1100px;
    margin: 0 auto;
    .air_title{
        margin: 15px 0;
        font-size: 20px;
        color: #ffa500;
        font-weight: normal;
    }
    .statement{
        margin: 15px 0;
        height: 58px;
        background-color: #f5f5f5;
        padding: 10px 0;
        border: 1px solid #ddd;
        >div{
            text-align: center;
            line-height: 38px;
            border-right: 1px solid #ddd;
        &:last-child{
            border-right: none;
        }
        i{
            font-size: 30px;
            
        }
        }
    }
    .air_sale_title{
        margin: 15px 0;
        font-size: 25px;
        color: #409eff;
        font-weight: normal;
    }
    *{
        vertical-align: middle;
    }
}
</style>

