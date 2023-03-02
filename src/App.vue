<script>
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';

export default{
  components:{
    ProjectCard,
    AppFooter,
    AppHeader
  },
  data(){
    return{
      apiURL: 'http://127.0.0.1:8000/api/project?page=1',
      projects: [],
      pageURL: [],
      index: 1,
    }
  },
  methods:{
    getProjects(){
      axios.get(this.apiURL, {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.results);
          this.projects = response.data.results.data;
          this.pageURL = response.data.results.links;
         

        })
    },
    nextPage(){

      this.index++
      if(this.index == 4){
        this.index = 1;
      }
      this.apiURL = this.pageURL[this.index].url
      this.getProjects();

    },
    prevPage(){

      this.index--
      if(this.index == 0){
        this.index = 3
      }

      this.apiURL = this.pageURL[this.index].url
      this.getProjects();

    }
  },
  created(){
    this.getProjects();
  }
}



</script>

<template>
  <AppHeader/>
  <main class="mt-5 pt-1">
    <div class="container">
      <div class="row">
        <ProjectCard v-for="project in projects" :title="project.title" :image="project.image" :relase_date="project.relase_date" :type="project.type" :technologies="project.technologies"/>
      </div>
      <div class="row mt-5">
        <div class="col-6">
          <a href="#" class="btn btn-primary" @click="prevPage">prev</a>
        </div>
        <div class="col-6 text-end">
          <a href="#" class="btn btn-primary" @click="nextPage">next</a>
        </div>
      </div>  
    </div>
  </main>
  <AppFooter/>
</template>

<style lang="scss">

  @use './style/main.scss' as *;

</style>
