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
      nextPageURL: null,
      prevPageURL: null
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
          this.nextPageURL = response.data.results.next_page_url;
          this.prevPageURL = response.data.results.prev_page_url;
         

        })
    },
    nextPage(){

   
      this.apiURL = this.nextPageURL;
      this.getProjects();

    },
    prevPage(){

     

      this.apiURL = this.prevPageURL;
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
      <div class="row altezza">
        <ProjectCard v-for="project in projects" :title="project.title" :image="project.image" :relase_date="project.relase_date" :type="project.type" :technologies="project.technologies"/>
      </div>
      <div class="row mt-5">
        <div class="col-6">
          <a href="#" v-if="this.prevPageURL != null" class="btn btn-primary" @click="prevPage">prev</a>
        </div>
        <div class="col-6 text-end">
          <a href="#" v-if="this.nextPageURL != null" class="btn btn-primary" @click="nextPage">next</a>
        </div>
      </div>  
    </div>
  </main>
  <AppFooter/>
</template>

<style lang="scss">

  @use './style/main.scss' as *;



  .altezza{
    height: 770px;
  }
</style>
