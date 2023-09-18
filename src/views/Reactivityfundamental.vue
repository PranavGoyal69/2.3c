<template>
    <div class="reactivity-example">
      <h1>Reactivity Fundamentals</h1>
      <p>
        This example demonstrates the basic concepts of reactivity in Vue 3 using the <code>ref()</code> function and <code>&lt;script setup&gt;</code>.
      </p>
  
      <div>
        <label for="name">Enter your name:</label>
        <input v-model="name" type="text" id="name" />
      </div>
  
      <div>
        <p>Hello, {{ name }}!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  </script>
  
  <style scoped>
  .reactivity-example {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
  }
  
  p {
    font-size: 18px;
    color: #555;
    margin: 10px 0;
  }
  
  label {
    font-size: 18px;
    color: #333;
    margin-right: 10px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  