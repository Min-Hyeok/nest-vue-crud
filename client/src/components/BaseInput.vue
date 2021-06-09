<template>
    <div class="b-input">
        <span class="b-input__desc">{{ desc }}</span>
        <label class="b-input__label">
            <input
              class="b-input__textfield"
              :type="type"
              :name="name"
              v-model="val"
              @focus="activeInputDesc(this)"
            >
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { baseInput } from '../composition/base-input';

export default defineComponent({
  name: 'b-input',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    desc: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const {
      val,
      activeInputDesc
    } = baseInput(props, context);

    return {
      val,
      activeInputDesc
    };
  }
});
</script>