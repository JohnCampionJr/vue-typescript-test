<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{ test }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { getModule } from 'vuex-module-decorators';
// import { CounterModule } from '@/modules/CounterModule.ts';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public test: string = 'tester';
  // public counterModule = getModule(CounterModule);
  public mounted() {
    // CounterModule.increment(5);
  }
}
</script>
