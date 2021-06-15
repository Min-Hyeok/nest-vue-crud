<template>
  <div>
      <b-form title="회원가입">
        <b-input
          placeholder="아이디"
          label="아이디"
          v-model="id"
        ></b-input>
        <b-input
          placeholder="비밀번호"
          label="비밀번호"
          v-model="password"
        ></b-input>
        <b-input
          placeholder="이름"
          label="이름"
          v-model="name"
        ></b-input>
        <b-input
          placeholder="이메일"
          label="이메일"
          v-model="email"
        ></b-input>
        <b-button @click="regist">회원가입</b-button>
      </b-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import register from '../composition/register';

export default defineComponent({
    setup() {
      const {
        id,
        password,
        name,
        email,
        regist
      } = register();

      return {
        id,
        password,
        name,
        email,
        regist
      };
    },
})
</script>
;