<template>
    <header class="b-header">
      <ul class="b-header__list">
        <li class="b-header__item"><router-link to="/">Home</router-link></li>
        <li class="b-header__item"><router-link to="/">게시판</router-link></li>
      </ul>
      <ul class="b-header__list">
        <li class="b-header__item"><router-link to="/register">회원가입</router-link></li>
        <li class="b-header__item"><router-link to="/">로그인</router-link></li>
        <li class="b-header__item"><router-link to="/">마이페이지</router-link></li>
      </ul>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'b-header',
  props: {
    msg: String,
  },
});
</script>