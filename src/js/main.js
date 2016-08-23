// const Vue = window.Vue;
import Vue from 'vue';

Vue.component('sidevue', require('./sidevue.js'));
Vue.component('test-button', require('./button.js'));

// setup Vue
const root = new Vue({el:'body'});
