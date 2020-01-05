import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const mutations = {
    'INIT_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCKS', order);
    },
    initStocks: ({ commit }, order) => {
        commit('INIT_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}