<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <FlightsListHeader />

        <!-- 航班信息 -->
        <FlightsListItem v-for="(item,index) in currentFlights" :key="index" :data="item" />
        <!-- 分页组件 -->
            <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHeader from "@/components/air/flightsListHeader";
import FlightsListItem from "@/components/air/flightsListItem";
export default {
  data() {
    return {
        // 请求返回的对象
      flightsList: {
          flights:[],
      },
        // 第一页的数据
      // currentFlights:[],

      pageIndex:1,
      pageSize:5,
      total:0
    };
  },
  components: {
    FlightsListHeader,
    FlightsListItem
  },
  computed: {
    currentFlights(){
        
     return  this.flightsList.flights.slice( (this.pageIndex-1)* this.pageSize,this.pageSize*this.pageIndex )
    }
  },
  mounted() {
    this.$axios({
      url: "/airs",
      method: "GET",
      params: this.$route.query
    }).then(res => {
      this.flightsList = res.data;
      this.total=this.flightsList.flights.length;
    //   显示第一页的数据  数组截取
      // this.currentFlights = this.flightsList.flights.slice(0,this.pageSize)
    });
  },
  methods: {
       handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pageSize=val;
        // this.setDataList()
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.pageIndex=val;
        // this.setDataList()

      },
      // setDataList(){
      //     this.currentFlights = this.flightsList.flights.slice( 
      //         (this.pageIndex-1)* this.pageSize, 
      //         this.pageSize*this.pageIndex 
      //         )
      // }
  },
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>