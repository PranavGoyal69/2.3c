<template>
  <div class="background">
    <div class="form-demo">
      <h1 class="title">Your Favorite Car</h1>

      <!-- Text Input -->
      <div class="input-group">
        <label for="text-input" class="label">Enter Your Favorite Car:</label>
        <input type="text" id="text-input" v-model="textInput" class="input" />
        <p class="result">Your Choice: {{ textInput }}</p>
      </div>

      <!-- Radio Buttons -->
      <div class="input-group">
        <label class="label">Choose Car Type:</label>
        <div class="radio-options">
          <input type="radio" id="radio-option1" value="Sedans" v-model="radioValue" />
          <label for="radio-option1" class="radio-label">Sedans</label>
        </div>
        <div class="radio-options">
          <input type="radio" id="radio-option2" value="UTE" v-model="radioValue" />
          <label for="radio-option2" class="radio-label">UTE</label>
        </div>
        <p class="result">Selected Type: {{ radioValue }}</p>
      </div>

      <!-- Checkbox -->
      <div class="input-group">
        <label for="checkbox" class="label">Additional Features:</label>
        <input type="checkbox" id="checkbox" v-model="checkboxValue" />
        <p class="result">Selected Features: {{ checkboxValue ? 'Yes' : 'No' }}</p>
      </div>

      <!-- Select Dropdown -->
      <div class="input-group">
        <label for="select" class="label">Choose Car Brand:</label>
        <select id="select" v-model="selectedOption" class="select">
          <option value="Audi">Audi</option>
          <option value="Mercedes Benz">Mercedes Benz</option>
          <option value="BMW">BMW</option>
        </select>
        <p class="result">Selected Brand: {{ selectedOption }}</p>
      </div>

      <!-- Textarea -->
      <div class="input-group">
        <label for="textarea" class="label">Comments:</label>
        <textarea id="textarea" v-model="textareaValue" class="textarea"></textarea>
        <p class="result">Your Comments:</p>
        <pre class="textarea-result">{{ textareaValue }}</pre>
      </div>

      <!-- Modifiers -->
      <div class="input-group">
        <label for="modifier-input" class="label">Modifiers:</label>
        <input type="text" id="modifier-input" v-model.trim="trimmedText" class="input" />
        <p class="result">Trimmed Value: {{ trimmedText }}</p>
        <input type="number" id="number-input" v-model.number="numberValue" class="input" />
        <p class="result">Number Value: {{ numberValue }}</p>
        <input type="text" id="lazy-input" v-model.lazy="lazyText" class="input" />
        <p class="result">Lazy Value: {{ lazyText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
      checkboxValue: false,
      radioValue: 'Option 1',
      selectedOption: 'Audi',
      textareaValue: '',
      trimmedText: '',
      numberValue: 0,
      lazyText: '',
    };
  },
};
</script>

<style scoped>
/* Component-specific styles */
.background {
  background-color: #3498db;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-demo {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.label {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.input,
.select,
.textarea {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  width: 100%;
}

.radio-options {
  display: flex;
  align-items: center;
}

.radio-label {
  margin-left: 5px;
}

.select {
  width: 100%;
}

.result {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
}

.textarea-result {
  font-size: 16px;
  color: #333;
  white-space: pre-wrap;
  margin-top: 5px;
}
</style>
