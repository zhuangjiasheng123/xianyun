<template>
    <div class="tab">
        
        <span
         v-for="(value,index) in ['娱乐','军事','体育']" 
         :key="index"
         @click=handleClick(index)
         :class='{native:current==index}'
         >{{value}}</span>
        <div class="box" v-if="current===0">
            <ul>
                <li>娱乐新闻</li>
                <li>娱乐新闻</li>
                <li>娱乐新闻</li>
            </ul>
        </div>
        <div class="box" v-if="current===1">
            <ul>
                <li>军事新闻</li>
                <li>军事新闻</li>
                <li>军事新闻</li>
            </ul>
        </div>
         <div class="box" v-if="current===2">
            <ul>
                <li>体育新闻</li>
                <li>体育新闻</li>
                <li>体育新闻</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            current:0
        }
    },
    methods: {
        handleClick(index){
            // console.log(index);
            
            this.current=index
        }
    }
}
</script>
<style lang="less" scoped>
span{
    margin: 10px;
    cursor:pointer;
}
.box{
    margin: 10px 0;
}
.native{
    color: red;
}
</style>
