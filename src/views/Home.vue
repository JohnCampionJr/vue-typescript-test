<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{ test }}
    {{ myModule.count }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { getModule } from 'vuex-module-decorators';
import { MyModule } from '@/store';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public test: string = 'tester';
  public myModule = getModule(MyModule, this.$store);
  public mounted() {
    this.myModule.incrCount(5);
  }
}
</script>
