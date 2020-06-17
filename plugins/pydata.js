import Vue from "vue";

// this makes {{ pyDataBaseUrl }} available globally
Vue.mixin({
    data: function() {
      return {
        get pyDataBaseUrl() {
            return 'https://cfp.jupytercon.com/2020';
        }
      }
    }
  })
