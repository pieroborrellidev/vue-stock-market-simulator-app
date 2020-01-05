<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition
                    enter-active-class="fadeIn animated"
                    >
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }
</style>
