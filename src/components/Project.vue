<template>
  <div class="col-md-4">
    <div class="card">
        <div class="card-head">
            <img alt="Vue logo"
              class="rounded-circle img-custome" 
              :src=project.image>
            <h2>web project</h2>
        </div>
        <hr>
        <div class="card-body">
            <p>{{project.description}}</p>
            <button type="button" class="btn btn-outline-secondary">
              More
            </button>
        </div>
    </div>
    <br>
  </div>
</template>

<script lang="ts">
export default {
    props: {
      project: {
      image: String,
      description: String
    }
  }
}

</script>