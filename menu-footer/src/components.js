import Vue from "vue";
import './assets/scss/app.scss'

import NuxtLink from './components/NuxtLink';
import MenuBar from './components/MenuBar';
import DesktopFooter from './components/DesktopFooter';
import BlockHeaderPlain from './components/BlockHeaderPlain';

Vue.component('nuxt-link', NuxtLink);
Vue.component('MenuBar', MenuBar);
Vue.component('DesktopFooter', DesktopFooter);
Vue.component('BlockHeaderPain', BlockHeaderPlain);
