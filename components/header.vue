<template>
  <div class="main">
    <el-row type="flex" justify="space-between" class="container">
      <!-- login -->
      <div class="header-img">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 菜单 -->
      <el-row type="flex" class="header_bar">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅遊攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
      <!-- 登录注册 -->
      <div class="login_model">
        <div class="login"  v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
        </div>
        <div  v-else>
          <el-dropdown>
          <span class="el-dropdown-link">
            <img
              :src="$axios.defaults.baseURL+$store.state.user.userInfo.user.defaultAvatar"
              alt='' />
            {{$store.state.user.userInfo.user.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="clearUserInfo">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    clearUserInfo(){
      // const {commit} = this.$store
      this.$store.commit('user/clearUserInfo')
      
    }
  }
};
</script>

<style lang='less' scoped>
.main {
  box-shadow: 0 2px 2px #ddd;
  .container {
    width: 1200px;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    .header-img {
      margin-right: 20px;
      img {
        width: 156px;
        height: 43px;
        margin-top: 9px;
      }
    }
    .header_bar {
      flex: 1;
      a {
        padding: 0 20px;
        font-size: 16px;
        //    box-sizing: border-box;
        &:hover {
          border-bottom: 5px solid #409eff;
          color: #409eff;
        }
      }
      .nuxt-link-exact-active {
        background-color: #409eff;
        color: white;
        &:hover {
          color: white;
        }
      }
    }
    .login_model {
      .login {
        a {
          font-size: 16px;
        }
      }
      .el-dropdown-link {
        img {
          width: 36px;
          height: 36px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>