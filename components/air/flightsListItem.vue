<template>
  <div class="flights_item">
    <div @click="isshow=!isshow">
      <el-row type="flex" align="middle" class="flight_info">
        <el-col :span="6">
          <span>{{data.airline_name}}</span>{{data.flight_no}}
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between" class="flight_info_center">
            <el-col :span="8" class="flight_airport">
              <strong>{{data.dep_time}}</strong>
              <span>{{data.org_airport_name}} {{data.org_airport_quay}}</span>
            </el-col>
            <el-col :span="8" class="flight_time">
              <span>{{ rankTime }}</span>
            </el-col>
            <el-col :span="8" class="flight_airport">
              <strong>{{data.arr_time}}</strong>
              <span>{{ data.dst_airport_name }} {{data.dst_airport_quay}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="flight_info_right">
          ￥
          <span class="price">{{ data.base_price / 2 }}</span>起
        </el-col>
      </el-row>
    </div>

    <div class="flight_recommend" v-if="isshow">
      <el-row type="flex" align="middle" justify="space-between">
        <el-col :span="4">低价推荐</el-col>

        <el-col :span="20">
          <el-row type="flex"
           justify="space-between"
            align="middle" 
            class="flight_sell"
            v-for="(item,index) in data.seat_infos"
            :key="index"
            >
            <el-col :span="16" class="flight_sell_left">
              <span>{{ item.name }}</span>|{{ item.supplierName }}
            </el-col>
            <el-col :span="5" class="price">￥{{item.org_settle_price}}</el-col>
            <el-col :span="3" class="choose_button">
              <el-button type="warning" size="mini">确定</el-button>
              <p>剩余：{{item.discount}}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
   // props: []
      props: {
        data: {
          type: Object,
          default: {}
        }
      },
      computed: {
        rankTime(){
          let start = this.data.dep_time.split(':');
          let end = this.data.arr_time.split(':');
          // 间隔分钟
          let arr = end[0]*60+ +end[1];
          let dep = start[0]*60+ +start[1];
          // 到达时间是第二天  需要加24小时
          if(arr<dep){
            arr += 24*60
          }
          const dis = arr-dep;
          const hour = Math.floor(dis/60);
          const min  =dis%60;
          return `${hour}时${min}分`
        }
      },
  data() {
    return {
     isshow:false
    };
  }
};
</script>

<style lang='less' scoped>
.flights_item {
  border: 1px solid #ccc;
  // padding: 20px;
  margin-bottom: 10px;
  .flight_info {
    padding: 15px;
    cursor: pointer;
    font-size: 15px;
    > div {
      &:first-child,
      &:last-child {
        text-align: center;
      }
    }
    .flight_info_center {
      padding: 0 30px;
      text-align: center;
      .flight_time {
        color: #a4a4a4;
      }
      .flight_airport {
        strong {
          font-size: 16px;
        }
        span {
          display: block;
          color: #a4a4a4;
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
  .price {
    color: orange;
    font-size: 20px;
    margin: 0 2px;
  }
  .flight_recommend {
    background-color: #f6f6f6;
    padding: 0 20px;
    border-top: 1px solid #ccc;
    .flight_sell {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      .flight_sell_left {
        span {
          color: #008000;
        }
      }
      .choose_button {
        text-align: center;
        button {
          width: 100%;
          margin: 3px 0;
        }
      }
    }
  }
}
</style>