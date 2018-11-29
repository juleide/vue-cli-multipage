import Vue from 'vue'
import Info from './info.vue'
import { Header, DatetimePicker, Button, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

require('@/assets/css/normalize.css');
/* eslint-disable no-new */
new Vue({
  el: '#info',
  components: { Info }
})
