<template>
    <div class="component-demo">
      <h1>Component Demo</h1>
      
      <!-- Example a: Props -->
      <div class="example">
        <h2>Props</h2>
        <p>
          This component takes a "message" prop from its parent and displays it.
        </p>
        <p class="message">{{ message }}</p>
      </div>
      
      <!-- Example b: Events [$emit] -->
      <div class="example">
        <h2>Events [$emit]</h2>
        <p>
          You can change the message in this component and send it back to the parent using an event.
        </p>
        <input type="text" v-model="newMessage" class="input-field" />
        <button @click="updateMessage" class="button">Update Message</button>
      </div>
      
      <!-- Example c: Slots -->
      <div class="example">
        <h2>Slots</h2>
        <p>
          This component has a slot for content that can be provided by the parent.
        </p>
        <div class="slot-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: String,
    },
    data() {
      return {
        newMessage: '',
      };
    },
    methods: {
      updateMessage() {
        this.$emit('update', this.newMessage);
        this.newMessage = ''; // Clear the input field after emitting the event
      },
    },
  };
  </script>
  
  <style scoped>
  .component-demo {
    padding: 20px;
    background-color: black; /* Change background color to black */
    font-family: Arial, sans-serif;
    color: white; /* Set text color to white */
  }
  
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .example {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: black; /* Change background color to black */
    color: white; /* Set text color to white */
  }
  
  h2 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .message {
    font-size: 18px;
    color: #333;
  }
  
  .input-field {
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
    background-color: white; /* Set input field background color to white */
    color: black; /* Set input field text color to black */
  }
  
  .button {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .button:hover {
    background-color: #2980b9;
  }
  
  .slot-container {
    border: 1px dashed #ccc;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  