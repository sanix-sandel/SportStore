<template>
    <div v-if="show" class="text-danger">
        <div v-for="m in messages" v-bind:key="m">{{m}}</div>
    </div>    
</template>