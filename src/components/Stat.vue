<template>
    <div>
        <div class="stat">
          <p>{{stat.name}}:</p>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow=stat.bonus*20 aria-valuemin="0" aria-valuemax="100" :style="{width: stat.bonus*20 + '%'}">+{{stat.bonus}}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        stat: {
            id: Number,
            name: String,
            bonus: Number
        }
    }
}

</script>