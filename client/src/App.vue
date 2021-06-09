<template>
  <div>
    <b-header></b-header>
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const a = 'test';

    return {
      a
    };
  },
})
</script>
