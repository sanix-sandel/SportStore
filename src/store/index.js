import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const testData=[];

for(let i=1; i<=10; i++){
    testData.push({
        id:i, name:`Product #${i}`, category:`Category ${i%3}`,
        description:`This is Product #${i}`, price:i*50
    })
}

export default new Vuex.Store({
    strict:true,
    state:{
        products:testData,
        productsTotal:testData.length,
        currentPage:1,
        pageSize:4
    },

    getters:{
        processedProducts:state=>{
            let index=(state.currentPage -1)*state.pageSize;
            return state.products.slice(index, index+state.pageSize);
        },

        pageCount:state=>Math.ceil(state.productsTotal/state.pageSize)
    },
    mutations:{
        setCurrentPage(state, page){
            state.currentPage=page;
        },
        setPageSize(state, size){
            state.pageSize=size;
            state.currentPage=1;
        }
    }

})