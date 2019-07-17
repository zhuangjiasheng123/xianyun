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
        <div class="air_sale">
            <el-row type='flex' justify='space-between' class="air-sale-pic">
                <el-col :span='6' v-for="(item,index) in sales" :key='index'>
                    <nuxt-link :to="`/air/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`">
                        <img :src="item.cover" alt="">
                        <el-row type='flex' justify='space-between' class="layer-bar">
                        <span>{{item.departCity}}-{{item.destCity}}</span>
                        <span>￥{{Number(item.price).toFixed(2)}}</span>
                        </el-row>
                    </nuxt-link>
                </el-col>
            </el-row>
        </div>
        
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
            sales:[
                
            ]
        }
    },
    mounted () {
        this.$axios({
            url:'airs/sale',
        }).then(res=>{
            // console.log(res);
            this.sales=res.data.data
            
        })
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

    .air_sale{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 20px 0 30px 0;
        .air-sale-pic{
            >div{
            width: 225px;
            height: 140px;
            overflow: hidden;
            position: relative;
            img{
                width: 100%;
            }
            .layer-bar{
                position: absolute;
                left: 0px;
                bottom: 0px;
                background: rgba(0, 0, 0, 0.4);
                padding:5px;
                color: white;
                width: 100%;
            }
            }
        }
    }
}
</style>

