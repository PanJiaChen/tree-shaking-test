<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { banana } from './fruit';

export default {
  mounted() {
    this.test();
  },
  methods: {
    test() {
      banana();
    },
  },
};
</script>
