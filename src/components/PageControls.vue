<template>
    <div v-if="pageCount > 1" class="text-right">
        <div class="btn-group mx-2">
            <button v-for="i in pageNumbers" v-bind:key="i"
                    class="btn btn-secpmdary"
                    v-bind:class="{ 'btn-primary': i == currentPage }">
                {{ i }}
            </button>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from "vuex";
    export default {
        computed: {
            ...mapState(["currentPage"]),
            ...mapGetters(["pageCount"]),
            pageNumbers() {
                return [...Array(this.pageCount + 1).keys()].slice(1);
            }
        }
    }
</script>