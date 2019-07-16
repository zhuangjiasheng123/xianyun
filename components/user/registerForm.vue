<template>
  <div class="registerForm">
    <el-form :model="registerForm" :rules="rules" class="form" ref="registerForm">
      <el-form-item class="form_item" prop="username">
        <el-input placeholder="用户名手机" v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item class="form_item" prop="captcha">
        <el-input placeholder="验证码" v-model="registerForm.captcha">
          <template slot="append">
            <el-button @click="handleSendCaptcha">发送验证码</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form_item" prop="nickname">
        <el-input placeholder="你的名字" v-model="registerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item class="form_item" prop="password">
        <el-input placeholder="密码" type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item class="form_item" prop="chechPassword">
        <el-input placeholder="确认密码" type="password" v-model="registerForm.chechPassword"></el-input>
      </el-form-item>
      <el-button class="submit" type="primary" @click="handleRegister">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        captcha: "",
        nickname: "",
        password: "",
        chechPassword: ""
      },
     rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPassword: [
          // validator： 自定义的验证函数
          { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSendCaptcha() {
      let phoneNumber = this.registerForm.username;
      if (!phoneNumber.trim()) {
        this.$confirm("手机号不能为空", "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
        return;
      }
      this.$store.dispatch("user/sendCode", phoneNumber).then(res => {
        this.$confirm(`模拟手机验证码为：${res}`, "提示", {
          confirmButtonText: "确定",
          showCancelButton: false,
          type: "warning"
        });
      });
    },
    handleRegister() {
        this.$refs.registerForm.validate(valid=>{
            let {chechPassword,...props} = this.registerForm
            this.$store.dispatch('user/register',props)
            .then(res=>{
                // 保存到vuex
            this.$store.commit('user/setUserInfo',res)
                // 跳转到首页
            this.$router.push('/')
            })
        })
      
    }
  }
};
</script>

<style lang='less' scoped>
.form {
  padding: 20px;
  .submit {
    width: 100%;
  }
}
</style>