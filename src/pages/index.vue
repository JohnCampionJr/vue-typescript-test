<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ test }}
    {{ myModule.count }}    
    <b-notification type="is-info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </b-notification>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { getModule } from 'vuex-module-decorators'
import MyModule from '@/store/myModule'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public test: string = 'tester'
  public myModule = getModule(MyModule, this.$store)
  public mounted() {
    this.myModule.incrCount(5)
  }
}
</script>
