<template>
  <button
    class="b-button"
    :class="[color, buttonTextColor]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { baseButton } from '../composition/base-button';

export default defineComponent({
  name: 'b-button',
  props: {
    msg: String,
    color: {
      type: String,
      default: 'primary-light'
    },
    textColor: {
      type: String,
      default: 'white'
    }
  },
  setup(props) {
    const { buttonTextColor } = baseButton(props);

    return {
      buttonTextColor
    };
  }
});
</script>