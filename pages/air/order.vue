<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <!-- <OrderForm @setInfoData='getInfoData'/> -->
            <OrderForm />

            <!-- 侧边栏 -->
            <!-- <OrderAside :data='InfoData'/> -->
            <OrderAside :data='$store.state.air.InfoData'/>
        </el-row>
    </div>
</template>

<script>
import OrderForm from '@/components/air/orderForm'
import OrderAside from '@/components/air/orderAside'
export default {
    components: {
        OrderForm,
        OrderAside
    },
    data () {
        return {
            // InfoData:{
            //     seat_infos: {}
            // }
        }
    },
    methods: {
        // 创建一个方法监听子组件的数据
        // getInfoData(data){
        //     this.InfoData=data
        //     console.log(this.InfoData);
            
        // }
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>