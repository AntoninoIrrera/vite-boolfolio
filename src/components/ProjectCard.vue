<script>


export default{
    props: {
        id: Number,
        title: String,
        relase_date: String,
        image: String,
        type: Object,
        technologies: Array,
        show: Boolean
    },
}

</script>

<template>

  <div class="col-3 my-3">
    <div class="card" style="width: 18rem;">
      <div class="text-center">
        <img v-if="image != null" :src="'http://127.0.0.1:8000/storage/' + image"  class="card-img-top w-50" alt="...">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ type.name }}</p>
        <p class="card-text">
          <span v-for="technology in technologies"> #{{ technology.name }} </span>
        </p>
        <p class="card-text">{{ relase_date }}</p>
        <router-link :to="{ name: 'project', params: { id: id } }" class="nav-link btn btn-primary" v-if="show != true">show</router-link>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">



</style>
