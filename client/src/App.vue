<template>
  <div>
    <b-header></b-header>
    <div id="content">
      <router-view/>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
})
</script>
