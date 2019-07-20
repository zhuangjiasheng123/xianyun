export const state=()=>{
   return{
    userInfo:{
        token:'',
        user:{}
    }
   }
};
export const mutations={
    
    
    // 保存用户信息到state
    setUserInfo(state,data){
        // console.log(state);
        state.userInfo=data
    },

    // 清除用户数据
    clearUserInfo(state){
        
        state.userInfo={
            token:'',
            user:{}
        }
    }
}
export const actions={
    // 注册请求
    register(store,props){
        return this.$axios({
            url:'/accounts/register',
            method:'POST',
            data:props
        })
        .then(res=>{
            return res.data
            
            
        })
    },
    // 验证码请求
    sendCode(store,phoneNumber){
      return  this.$axios({
            url:'/captchas',
            method:'POST',
            data:{tel:phoneNumber}
        }).then(res=>{
            const {code} = res.data
           return code
        })
    },
    // 登录请求
    login(store,data){
     return  this.$axios({
            url:'/accounts/login',
            method:'POST',
            data,
        })
        .then(res=>{
            console.log(res);
            store.commit('setUserInfo',res.data)           
        })
    }
}