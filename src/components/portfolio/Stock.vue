<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: insufficientQuantity}"/>
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-danger"
                            @click="sellStocks"
                            :disabled="insufficientQuantity || quantity <= 0"
                    >{{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["stock"],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
              return this.quantity > this.stock.quantity;

          }
    },
    methods: {
        sellStocks() {
            const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('sellStocks', order);
            this.quantity = 0;
        }
    }
}
</script>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>