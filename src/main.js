import Vue from "vue";
import App from "./App.vue";
import LikeNumber from  "./components/LikeNumber.vue";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  el.style.borderWidth = binding.value
  // bind(el, binding, vnode) {
  //   //ディレクィブが初めて対象の要素に紐付いた時
  // },
  // inserted() {
  //   //親Nodeでに挿入された時
  // },
  // update(el, binding, vnode, oldVnode) {
  //   // コンポーネントが更新される度。小コンポーネントが更新される前
  // },
  // componentUpdated() {
  //   // コンポーネントが更新される度。子コンポーネントが更新された後
  // },
  // unbind() {
  //   // ディレクティブがひも付いてる要素から取り除かれた時
  // },
});
new Vue({
  render: h => h(App),
}).$mount('#app')
