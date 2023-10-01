import Vue from "vue";
import App from "./App.vue";
import LikeNumber from  "./components/LikeNumber.vue";

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value){
  console.log("フィルタ")
  return value.toUpperCase();
});
// Vue.directive("border", function(el, binding) {
//   el.style.borderWidth = binding.value.width;
  // el.style.borderColor = binding.value.color;
  // el.style.borderStyle = binding.arg;
  // if (binding.modifiers.round) {
  //   el.style.borderRadius = "0.5rem";
  // }
  // if (binding.modifiers.shadow) {
  //   el.style.boxShadow = "0.2px 5px rgba(0, 0, 0, 0.26)";
  // }
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
// });
Vue.mixin({
  created() {
    console.log("global mixin")
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
