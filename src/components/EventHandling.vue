<template>
  <div class="event-demo">
    <h1>Event Handling Demo</h1>
    <h2>
      What is event handling in Vue.js? Event handling in Vue.js is a fundamental aspect of building interactive web applications. It involves managing and responding to various user-generated events like clicks, keypresses, and mouse movements within the Vue.js framework. Vue.js simplifies event handling by allowing developers to bind event listeners to specific DOM elements using the v-on directive or the shorthand @ symbol in the template. These event listeners are associated with methods defined in the Vue component, enabling you to encapsulate event-handling logic neatly.
    </h2>

    <!-- Inline Event Handler -->
    <button @click="handleClickInline" class="button inline-button">Click me (Inline)!</button>

    <!-- Method Event Handler -->
    <button @click="handleClickMethod" class="button method-button">Click me (Method)!</button>

    <!-- Display the message -->
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '', 
    };
  },
  methods: {
    handleClickMethod() {
      this.message = 'Button clicked (Method)';
    },
    handleClickInline() {
      this.message = 'Button clicked (Inline)';
    },
  },
};
</script>

<style scoped>
.event-demo {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.inline-button {
  background-color: #3498db;
  color: white;
}

.method-button {
  background-color: #e74c3c;
  color: white;
}

.message {
  font-size: 18px;
  color: #333;
  text-align: center;
}
</style>
