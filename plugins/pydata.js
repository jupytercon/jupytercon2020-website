import Vue from "vue";

// this makes {{ pyDataBaseUrl }} available globally
Vue.mixin({
    data: function() {
      return {
        get pyDataBaseUrl() {
            //    return "http://localhost:8080/test/"; // for development
            return 'https://this-is-a-secret.com/';
        }
      }
    }
  })