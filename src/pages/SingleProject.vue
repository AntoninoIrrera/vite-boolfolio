<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';


import axios from 'axios';

export default {
    components: {
        ProjectCard,
        AppLoader
    },
    data() {
        return {
            apiURL: 'http://127.0.0.1:8000/api/project/',
            project: null,
            
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiURL + `${this.$route.params.id}`, {
                params: {

                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.project = response.data.results;
                    console.log(this.project)



                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created() {
        this.getProject();
    }
}


</script>

<template>
    <main class="mt-5 pt-1">
        <div class="container">
            <div class="row" v-if="project == null">
                <div class="col-12 text-center mt-5">
                    <AppLoader/>
                </div>
            </div>
            <div class="row altezza" v-else>
                <ProjectCard :title="project.title" :id="project.id" :image="project.image"
                    :relase_date="project.relase_date" :type="project.type" :technologies="project.technologies" :show="true" />
            </div>
            
               
        </div>
    </main>
</template>

<style scoped lang="scss"></style>
