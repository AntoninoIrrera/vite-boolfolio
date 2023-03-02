<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';

export default{
  components:{
    ProjectCard,
  },
  data(){
    return{
      apiURL: 'http://127.0.0.1:8000/api/post',
      project: [],
    }
  },
  methods:{
    getProjects(){
      axios.get(this.apiURL, {
        params: {

        }
      })
        .then(function (response) {
          console.log(response.data.results.data);
        })
    }
  },
  created(){
    this.getProjects();
  }
}



</script>

<template>
  <ProjectCard/>
</template>

<style lang="scss">

  @use './style/main.scss' as *;

</style>
