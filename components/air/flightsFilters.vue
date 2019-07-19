<template>
  <div class="filters">
    <el-row type="flex" justify="space-between" class="topFilters">
      <el-col
        :span="8"
      >单程：{{ data.info.departCity}}-{{ data.info.destCity}} / {{ data.info.departDate}}</el-col>
      <el-col :span="4">
        <el-select size="mini" placeholder="起飞机场" v-model="airport" @change="handleAirport" >
          <el-option 
          v-for="(item,index) in data.options.airport"
          :key="index"
          :label="item"
           :value="item"></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" placeholder="起飞时间" v-model="flightTimes" @change="handleFlightTimes">
          <el-option 
          v-for="(item,index) in data.options.flightTimes"
          :key="index"
          :label="`${item.from}:00 - ${item.to}:00`"
           :value="`${item.from},${item.to}`"
           ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" placeholder="航空公司" v-model="company" @change="handleCompany">
          <el-option
          v-for="(item,index) in data.options.company"
          :key="index"
           :label="item"
           :value="item"
            ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" placeholder="机型" v-model="airSize" @change="handleAirSize">
          <el-option 
          v-for="(item,index) in airSizeList"
          :key="index"
          :label="item.type" 
          :value="item.size"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="cancle">
      筛选
      <el-button type="primary" size="mini" round plain @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airport: "",
      flightTimes: "",
      company: "",
      airSize: "",
      airSizeList:[
          {type:'大',size:'L'},
          {type:'中',size:'M'},
          {type:'小',size:'S'},
      ]
    };
  },
  // 接收父组件传递过来的数据
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // 选择机场时候触发
    handleAirport(value) {
        const arr = this.data.flights.filter(v=>{
            return v.org_airport_name===value
           this.$emit('changeFlightsList',arr)
        })
    },
    // 选择出发时间时候触发
    handleFlightTimes(value) {
        const [from,to] = value.split(',')
        const arr = this.data.flights.filter(v=>{
            const [start] = v.dep_time.split(':');
            return from <= start && start < to;
        })
        // console.log(arr);
        // 发射一个事件给父组件
        this.$emit('changeFlightsList',arr)
    },
    // 选择航空公司时候触发
    handleCompany(value) {
        const arr = this.data.flights.filter(v=>{
            return v.airline_name===value;
        })
        // 发射一个事件给父组件
        this.$emit('changeFlightsList',arr)
    },
    // 选择机型时候触发
    handleAirSize(value) {
        const arr = this.data.flights.filter(v=>{
            return v.plane_size === value;
        })
        // 发射一个事件给父组件
        this.$emit('changeFlightsList',arr)
    },
    // 撤销条件时候触发
    handleFiltersCancel() {
        this.airport='',
        this.flightTimes='',
        this.company='',
         this.airSize='',
         this.airSizeList=[]
         this.$emit('changeFlightsList',this.data.flights)
    }
  }
};
</script>
    
<style lang='less' scoped>
.filters {
  margin: 20px 0;
  .topFilters {
    > div {
      padding-right: 5px;
    }
  }
}
</style>