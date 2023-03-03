<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';


import axios from 'axios';

export default{
  components:{
    AppFooter,
    AppHeader,
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  created(){

  }
}



</script>

<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<style lang="scss">

  @use './style/main.scss' as *;


  .altezza {
    height: 1450px;
  }
 
</style>
