<template>
  <div>
    <header>
      <h1>Welcome to My Vue Website</h1>
    </header>
    <div class="container">
      <div class="column">
        <h1 class="title">Text Size Increaser</h1>

        <!-- User Input -->
        <div class="input-container">
          <input v-model="userInput" class="input" placeholder="Enter text">
        </div>

        <!-- Text Size Controls -->
        <div class="text-size-controls">
          <button @click="increaseTextSize">Increase Text Size</button>
          <button @click="decreaseTextSize">Decrease Text Size</button>
        </div>
      </div>

      <div class="column">
        <!-- Text Output with Dynamic Text Size -->
        <p class="output" :style="{ fontSize: textSize + 'px' }">User Input: {{ userInput }}</p>
      </div>
    </div>

    <!-- Separate div for displaying raw HTML content -->
    <div class="raw-html-content" v-html="htmlContent"></div>

    <!-- Attribute Binding and JavaScript Expression -->
    <div class="attribute-binding">
      <p :id="dynamicId">This is an element with a dynamic ID: {{ dynamicId }}</p>
      <p :title="elementTitle">Hover over me</p>
      <p :data-custom-attribute="customAttribute">This has a custom data attribute</p>
      <p>{{ 5 + 3 }} is equal to {{ 2 * 4 }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const userInput = ref('');
    const htmlContent = '<p>This is some <strong>raw HTML</strong> content.</p>';
    const dynamicId = computed(() => userInput.value.toLowerCase());
    const elementTitle = 'This is a title';
    const customAttribute = 'Custom Value';
    const textSize = ref(16); // Initial text size in pixels

    const increaseTextSize = () => {
      textSize.value += 2; // Increase text size by 2 pixels
    };

    const decreaseTextSize = () => {
      textSize.value -= 2; // Decrease text size by 2 pixels
    };

    return {
      userInput,
      htmlContent,
      dynamicId,
      elementTitle,
      customAttribute,
      textSize,
      increaseTextSize,
      decreaseTextSize,
    };
  },
};
</script>
  
  <style scoped>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(135deg, #3498db, #6c5ce7);
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    width: 800px; /* Adjust the container width as needed */
    margin-bottom: 20px;
    background-color: black;
  }
  
  .column {
    flex: 1;
    padding: 20px;
  }
  
  .title {
    font-size: 28px;
    margin-bottom: 20px;
    color: #6c5ce7;
  }
  
  .input-container {
    margin-bottom: 20px;
  }
  
  .input {
    width: 100%;
    padding: 12px;
    border: 2px solid #3498db;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
  }
  
  .output {
    font-size: 20px;
    color: #333;
    margin-top: 20px;
  }
  
  .raw-html-content {
    background-color: #020202;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    width: 800px; /* Adjust the width as needed */
    font-size: 16px;
    text-align: center;
    background-color: black;
  }
  
  .attribute-binding {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    width: 800px; /* Adjust the width as needed */
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    background-color: black;
  }
  </style>
  