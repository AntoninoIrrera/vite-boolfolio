<script>

export default{
  props:{
    title: String,
    relase_date: String,
    image: String,
    type: Object,
    technologies: Array
  }
}

</script>

<template>

  <div class="col-3 my-3">
    <div class="card" style="width: 18rem;">
    <img v-if="image != null" :src="{image}"  class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ type.name }}</p>
      <p class="card-text">
        <span v-for="technology in technologies"> #{{ technology.name }} </span>
      </p>
      <p class="card-text">{{ relase_date }}</p>
      <a href="#" class="btn btn-primary">show</a>
    </div>
  </div>
  </div>

</template>

<style scoped lang="scss">



</style>
