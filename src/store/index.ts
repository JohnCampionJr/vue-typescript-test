import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersistence from 'vuex-persist';
import MyModule from './myModule';
Vue.use(Vuex);

interface StoreType {
  mm: MyModule;
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store<StoreType>({
  plugins: [vuexLocal.plugin],
});
