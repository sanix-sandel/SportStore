<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col bg-dark text-white">
                    <a class="navbar-brand">SPORTS STORE</a>
                </div>
            </div>
        </div>
        <div class="m-2">
            <div class="form-group m-2">
                <label>Name</label>
                <input v-model="$v.name.$model" class="form-control "/>
                <validation-error v-bind:validation="$v.name" />
            </div>
        </div>
        <div class="text-center">
            <router-link to="/cart" class="btn btn-secondary m-1">
                Back
            </router-link>
            <button class="btn btn-primary m-1" v-on:click="submitOrder">
                Place Order
            </button>
        </div>
    </div>
</template>                        

<script>

import {required} from "vuelidate/lib/validators";
import ValidationError from "./ValidationError";

export default {
    components:{ValidationError},
    data:function(){
        return{
            name:null
        }
    },
    validations:{
        name:{
            required
        }
    },
    methods:{
        submitOrder(){
            //save order
            this.$v.$touch();
        }
    }
}
</script>