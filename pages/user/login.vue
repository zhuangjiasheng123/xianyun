<template>
    <div class="login">
        <el-row type='flex' justify="center" align="middle"   class="main">
            <div class="form_herder">
                <el-row type='flex' justify='center' class="tab">
                    <span
                     v-for="(item,index) in ['登录','注册']"
                      :key="index"
                      :class="{active:tabChange===index}"
                      @click="handleChangeTab(index)"
                      >{{item}}</span>
                </el-row>
                <LoginForm v-if="tabChange===0"/>
                <RegisterForm v-if="tabChange===1"/>
            </div>
        </el-row>

        
    </div>
</template>

<script>
import LoginForm from "@/components/user/loginForm"
import RegisterForm from "@/components/user/registerForm"
export default {
    components: {
        LoginForm,
        RegisterForm
    },
    data () {
        return {
            tabChange:0,
        }
    },
    methods: {
        handleChangeTab(index){
            this.tabChange=index
        }
    }
}
</script>
<style lang="less" scoped>
    .login{
        background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
        height: 700px;
        min-width: 1000px;
        .main{
            width: 1000px;
            height: 100%;
            margin: 0 auto;
            // background-color: aliceblue;
            position: relative;
        .form_herder{
            // z-index: 2;
            width: 400px;
            margin: 0 auto;
            background-color: #fff;
            box-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
            overflow: hidden;
            // position: absolute;
            // top: 25%;
            // left: 30%;
        .tab{
            span{
                display: block;
                width: 50%;
                height: 50px;
                box-sizing: border-box;
                border-top: 2px solid #eee;
                line-height: 48px;
                text-align: center;
                cursor: pointer;
                color: #666;
                background: #eeeeee;
                &.active{
                border-top-color: #ffa500;
                color: #ffa500;
                background-color: #fff;
                font-weight: bold;
            }
            }
            
        }
        }
        }
    }
</style>

