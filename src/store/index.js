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
        products:testData
    }
})