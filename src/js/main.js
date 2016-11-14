// const Vue = window.Vue;
import Vue from 'vue/dist/vue.js';
import sideVue from './sideVue.js';
import button from './button.js';

Vue.component('sidevue', sideVue);
Vue.component('test-button', button);

// setup Vue
const root = new Vue({el:'#app'});
