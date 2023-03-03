<script>

    export default{
        data(){
            return{
                navItems: ['home','projects','about-us']                
            }
        }
    }


</script>

<template>
    <header>

        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li v-for="navItem in navItems" class="nav-item active">
                            <router-link :to="{name: navItem}" :class="this.$router.name == navItem ? 'active' : '' " class="nav-link">{{ navItem }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">





</style>
