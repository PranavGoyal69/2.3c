<template>
    <div>
      <!-- Class Binding -->
      <div :class="{ active: isActive, error: isError }">Class Binding Example</div>
  
      <!-- Style Binding -->
      <div :style="{ fontSize: fontSize + 'px', color: fontColor }">Style Binding Example</div>
      
      <!-- Buttons to Toggle Class and Style -->
      <button @click="toggleActive">Toggle Active Class</button>
      <button @click="toggleError">Toggle Error Class</button>
      <button @click="increaseFontSize">Increase Font Size</button>
      <button @click="changeFontColor">Change Font Color</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
        isError: false,
        fontSize: 16,
        fontColor: 'black'
      };
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive;
      },
      toggleError() {
        this.isError = !this.isError;
      },
      increaseFontSize() {
        this.fontSize += 2;
      },
      changeFontColor() {
        this.fontColor = this.fontColor === 'black' ? 'red' : 'black';
      }
    }
  };
  </script>
  
  <style>
  div {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  
  .active {
    background-color: lightgreen;
  }
  
  .error {
    background-color: lightcoral;
  }
  </style>
  