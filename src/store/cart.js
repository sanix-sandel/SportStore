export default {
    namespaced:true,
    state:{
        lines:[]
    },
    getters:{
        itemCount:state=>state.lines.reduce((total, line)=>
            total+line.quantity, 0
        ),

        totalPrice:state=>state.lines.reduce((total, line)=>
            total+(line.quantity*line.product.price), 0
        ),

        
    },

    mutations:{
        addProduct(state, product){
            let line=state.lines.find(line=>line.product.id==product.id);
            if(line!=null){
                line.quantity++;
            }else{
                state.lines.push({product:product, quantity:1});
            }
        },

        changeQuantity(state, update){
            update.line.quantity=update.quantity;
        },
        removeProduct(state, lineToRemove){
            let index=state.lines.findIndex(line=>line==lineToRemove);
            if(index>-1){
                state.lines.splice(index, 1);
            }
        }
    }

}