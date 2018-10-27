import { Action, Module, Mutation, MutationAction, VuexModule, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'mm' })
export default class MyModule extends VuexModule {
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
