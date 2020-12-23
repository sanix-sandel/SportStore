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
        },
        setCartData(state, data){
            state.lines=data;
        }
    },
    actions:{
        loadCartData(context){
            let data=localStorage.getItem("cart");
            if(data!=null){
                context.commit("setCartData", JSON.parse(data));
            }
        },

        storeCartData(context){
            localStorage.setItem("cart", JSON.stringify(context.state.lines));
        },
        clearData(context){
            context.commit("setCartData", []);
        },
        initializeCart(context, store){
            context.dispatch("loadCartData");
            store.watch(state=>state.cart.lines,//To observe the data store for changes to the lines state property
                ()=>context.dispatch("storeCartData"), {deep:true});

                /*
                
                    The arguments to the watch method are a function that selects the state property and a function to
                    invoke when a change is detected. This statement selects the lines property and uses the dispatch method
                    to invoke the storeCartData action when there is a change. There is also a configuration object that sets
                    the deep property to true, which tells Vuex that I want to receive notifications when there is a change to any
                    of the properties in the lines array, which is not done by default.
                */
        }
        
    }


}