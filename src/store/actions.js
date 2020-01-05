import Vue from 'vue'

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(data => data.json())
            .then(data => {
                if (data) {
                    const stocks = data.stocks;
                    const funds = data.funds;
                    const stocksPortfolio = data.stocksPortfolio;

                    const portfolio = {
                        funds,
                        stocksPortfolio
                    }
                    commit('INIT_STOCKS', stocks);
                    commit('INIT_PORTFOLIO', portfolio);
                }
            });
}