// const Vue = window.Vue;
import Vue from 'vue/dist/vue.js';

Vue.component('sidevue', require('./sidevue.js'));
Vue.component('test-button', require('./button.js'));

// setup Vue
const root = new Vue({el:'#app'});
