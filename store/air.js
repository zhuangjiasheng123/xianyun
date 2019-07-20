export const state = () => {
    return {
        // 获取机票信息
        InfoData: {
            seat_infos: {}
        },
        allPrice:0

    }
}

export const mutations = {
    // 设置机票信息
    setInfoData(state,data){
        state.InfoData = data;
    },
     // 设置总价格
     setAllPrice( state, data ){
        state.allPrice = data;
    },
}