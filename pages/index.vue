<template>
  <div class="container">
    <!-- 幻灯片 -->
    <el-carousel :interval="5000" arrow="always" class="banner">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="banner-image"
          :style="` background:url(${$axios.defaults.baseURL+item.url}) center center no-repeat;
          background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- tab栏 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item, index) in tabs"
            :key="index"
            :class="{ active: currentTab === index }"
            @click="handleChangeTab(index)"
          >
            <i>{{item.name}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="tabs[currentTab].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [],
      tabs: [
        { name: "攻略", placeholder: "搜索城市" },
        { name: "酒店", placeholder: "请输入城市搜索酒店" },
        { name: "机票", placeholder: "", pathUrl: "/air" }
      ],
      currentTab: 0
    };
  },
  methods: {
    handleChangeTab(index) {
      if (index === 2) {
        this.$router.push("/air");
      }
      this.currentTab = index;
    }
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners",
      method: "GET"
    })
      .then(res => {
        console.log(res);
        const { data } = res.data;
        this.banners = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang='less' scoped>
.container {
  position: relative;
  min-width: 1000px;
  margin: 0 auto;
  .banner {
    /deep/ .el-carousel__container {
      height: 700px;
    }
    .banner-image {
      width: 100%;
      height: 100%;
    }
  }
  .banner-content {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: 3;
    //  margin-left: -500px;
    border-top: 1px transparent solid;
    .search-bar {
      width: 552px;
      margin: 0 auto ;
    }
    .search-tab {
      .active{
      i{
        color: red;
      }
      &:after{
        background-color: #eee;
      }
    }
      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;
        i {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #ffffff;
          // color: red;
          font-weight: 900;
          font-size: 18px;
        }
        &:after {
          content: "";
          position: absolute;
          left: 0px;
          top: 0px;
          display: block;
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }
    .search-input {
      width: 550px;
      height: 46px;
      background-color: white;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;
      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }
      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
