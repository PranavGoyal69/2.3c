<template>
    <div class="container">
      <h1 class="title">Computed Properties Example</h1>
      <div class="form">
        <div class="input-group">
          <label for="first-name">Please Enter Your Desired First Name:</label>
          <input id="first-name" v-model="firstName" />
        </div>
        <div class="input-group">
          <label for="last-name">Please Enter Your Desired Last Name:</label>
          <input id="last-name" v-model="lastName" />
        </div>
      </div>
      <div class="result">
        <p class="full-name">Your Enterd Full Name is : {{ fullName }}</p>
        <button @click="displayGreeting" class="button">Display Greeting</button>
        <p v-if="greetingMessage" class="greeting">{{ greetingMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
     
      const firstName = ref('');
      const lastName = ref('');
      const greetingMessage = ref('');
  
      
      const fullName = computed(() => {
        return `${firstName.value} ${lastName.value}`;
      });
  
    
      const displayGreeting = () => {
        greetingMessage.value = `Hello, ${fullName.value}!`;
      };
  
      return {
        firstName,
        lastName,
        fullName,
        greetingMessage,
        displayGreeting,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .title {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 18px;
    color: #333;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .result {
    text-align: center;
    margin-top: 20px;
  }
  
  .full-name {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  .greeting {
    font-size: 18px;
    color: green;
    margin-top: 10px;
  }
  </style>
  