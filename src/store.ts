import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import { Action, Module, Mutation, MutationAction, VuexModule, getModule } from 'vuex-module-decorators';

interface StoreType {
    mm: MyModule;
}

@Module({ name: 'mm' })
export class MyModule extends VuexModule {
    public count = 0;

    @Mutation
    public incrCount(delta: number) {
        this.count += delta;
    }

    @Action({ commit: 'incrCount' })
    public async getCountDelta(retVal: number = 5) {
        return retVal;
    }

    public get halfCount() {
        return (this.count / 2).toPrecision(1);
    }
}

export default new Vuex.Store<StoreType>({
    modules: {
        mm: MyModule,
    },
});
