<template>
    <div class="counter">
      <h1>Counter App</h1>
      <p>Count: {{ count }}</p>
      <button @click="incrementCount">Increment</button>
      <button @click="decrementCount">Decrement</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      incrementCount() {
        this.count++;
      },
      decrementCount() {
        this.count--;
      },
    },
  };
  </script>
  
  <style scoped>
  .counter {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    color: #333;
  }
  
  p {
    font-size: 18px;
    color: #666;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 10px;
  }
  
  button:hover {
    background-color: #359f76;
  }
  </style>
  