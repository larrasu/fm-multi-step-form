<template>
  <div class="input-group">
    <div class="label-msg">
      <label :for="model">{{ field }}</label>
      <span class="hidden">{{ msg }}</span>
    </div>
    <input type="text" :id="model" :placeholder="place" />
  </div>
</template>

<script setup>
const props = defineProps(["model", "field", "msg", "place"]);
</script>
