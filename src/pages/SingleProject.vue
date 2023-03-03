<script>
import ProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';

export default {
    components: {
        ProjectCard
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
                    console.log(response.data);
                    this.project = response.data.results;
                    


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
    <div class="container">
        <main class="mt-5 pt-1">
            <div class="container">
                <div class="row altezza">
                    <ProjectCard :title="project.title" :id="project.id" :image="project.image"
                        :relase_date="project.relase_date" :type="project.type" :technologies="project.technologies" :show="true" />
                </div>
            </div>
            
               
        </main>
    </div>
</template>

<style scoped lang="scss"></style>
