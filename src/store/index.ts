import Vuex from 'vuex';
import Vue from 'vue';
import MyModule from './myModule';
Vue.use(Vuex);

interface StoreType {
    mm: MyModule;
}

export default new Vuex.Store<StoreType>({
});
