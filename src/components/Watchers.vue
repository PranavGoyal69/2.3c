<template>
  <div class="input-watcher">
    <h1>Input Length Watcher</h1>
    <input v-model="userInput" placeholder="Type something" class="input-field" />
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      message: '',
      maxInputLength: 10, // Set the maximum input length
    };
  },
  watch: {
    userInput(newInput) {
      if (newInput.length > this.maxInputLength) {
        this.message = 'Input is too long!';
      } else {
        this.message = ''; // Clear the message if input is within limits
      }
    },
  },
};
</script>

<style scoped>
.input-watcher {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.input-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  width: 300px;
}

.message {
  font-size: 18px;
  color: #e74c3c; /* Red color for error message */
  margin-top: 10px;
}
</style>
