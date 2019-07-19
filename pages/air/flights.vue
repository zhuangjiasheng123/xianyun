<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 传递数据给子组件 -->
        <FlightsFilters :data='cacheDataFlights' @changeFlightsList='changeFlightsList'/>
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
      <flightsAside/>
    </el-row>
  </section>
</template>

<script>
import FlightsListHeader from "@/components/air/flightsListHeader";
import FlightsListItem from "@/components/air/flightsListItem";
import FlightsFilters from "@/components/air/flightsFilters";
import flightsAside from "@/components/air/flightsAside";
export default {
  data() {
    return {
        // 请求返回的对象
      flightsList: {
          flights:[],
          info:{},
          options:{},
      },
      // 复制一份缓存的初始值
      cacheDataFlights:{
          flights:[],
          info:{},
          options:{},
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
    FlightsListItem,
    FlightsFilters,
    flightsAside
  },
  computed: {
    currentFlights(){
        
     return  this.flightsList.flights.slice( (this.pageIndex-1)* this.pageSize,this.pageSize*this.pageIndex )
    }
  },
  // watch: {
  //   $route(){
  //     this.getFilghtersList()
  //   }
  // },
  // 监听路由的变化,，同一个页面之间的跳转不会重新加载组件
  beforeRouteUpdate (to, from, next) {
        next();
        this.getFilghtersList();
    },

  mounted() {
  this.getFilghtersList()
  },
  methods: {
    // 渲染机票列表
    getFilghtersList(){
       this.$axios({
      url: "/airs",
      method: "GET",
      params: this.$route.query
    }).then(res => {
      this.flightsList = res.data;
      this.cacheDataFlights = {...res.data};
      this.total=this.flightsList.flights.length;
    //   显示第一页的数据  数组截取
      // this.currentFlights = this.flightsList.flights.slice(0,this.pageSize)
    });
    },
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
      // },

      // 监听子组件传递过来的数据，刷新页面
      changeFlightsList(arr){
        this.flightsList.flights=arr;
        this.total = this.flightsList.flights.length;
        this.pageIndex = 1;
      }
  },
};
</script>

<style scoped lang="less">
.contianer {
  width: 900px;
  margin: 20px auto;
}

.flights-content {
  width: 1000px;
  font-size: 14px;
}

.aside {
  width: 340px;
}
</style>