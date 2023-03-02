<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';

export default{
  components:{
    ProjectCard,
  },
  data(){
    return{
      apiURL: 'http://127.0.0.1:8000/api/project',
      projects: [],
    }
  },
  methods:{
    getProjects(){
      axios.get(this.apiURL, {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.results.data);
          this.projects = response.data.results.data;
        })
    }
  },
  created(){
    this.getProjects();
  }
}



</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <ProjectCard v-for="project in projects" :title="project.title" :image="project.image" :relase_date="project.relase_date" :type="project.type" :technologies="project.technologies"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss">

  @use './style/main.scss' as *;

</style>
