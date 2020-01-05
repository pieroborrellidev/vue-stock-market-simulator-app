<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/portfolio" activeClass="active"><a>Portfolio</a></router-link>
          <router-link tag="li" to="/stocks" activeClass="active"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds }}$</strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">End day</a>
          </li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            > Save and Load <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">Save data</a>
              </li>
              <li>
                <a href="#">Load data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>