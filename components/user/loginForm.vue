<template>
    <div class="container">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="loginForm">
  <el-form-item  prop="username" class="from_item">
    <el-input  v-model="loginForm.username" placeholder='用户名/手机'></el-input>
  </el-form-item>
  <el-form-item  prop="password" class="from_item">
    <el-input type="password"  v-model="loginForm.password" placeholder='密码'></el-input>
  </el-form-item>
  
  <el-form-item>
      <p class="form_text"> <nuxt-link to='#'>忘记密码</nuxt-link> </p>
    <el-button type="primary" class="btn" @click="handleCommit">登录</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>

export default {
data () {
    return {
        loginForm:{
            username:'',
            password:'',
        },
        rules:{
             username: [
                { 
                    required: true, 
                    message: '请输入用户名', 
                    trigger: 'blur' 
                },
            ],
            password: [
                { 
                    required: true, 
                    message: '请输入密码', 
                    trigger: 'blur' 
                },
            ],
        },
    }
},
methods: {
    handleCommit(){
        this.$refs.loginForm.validate(valid=>{
            if(valid){
               this.$store.dispatch('user/login',this.loginForm)
               .then(res=>{ 
                //    console.log(res);
                   
                //    this.$router.push('/') 
                // 返回上一页，不呀直接进主页
                this.$router.back(-1)
                   })
            }
        })
    }
}
}
</script>

<style lang='less' scoped>
.loginForm{
    // padding: 25px;
    padding: 15px 25px 10px 25px;
    .form_item{
        margin-bottom: 10px;
    }
    .form_text{
        font-size: 14px;
        color: #48a3ff;
        text-align: right;
    }
    .btn{
        width: 100%;
    }
}
</style>