<template>
  <div class="b-form">
      <p class="b-form__title">{{ title }}</p>
      <div class="b-form__content">
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'b-form',
    props: {
        title: String
    },
    setup() {
        return {};
    }
});
</script>
