<template>
    <div class="list-rendering">
      <div class="header">
        <h1>List Rendering Playground</h1>
      </div>
      <p>
        List rendering in Vue.js is a versatile feature for rendering data dynamically in the DOM. It's a fundamental tool for building interactive web applications.
      </p>
  
      <!-- Example a: v-for with an Object -->
      <div class="example">
        <h2>Favorite Movies</h2>
        <p>
          Let's use v-for to display your favorite movies and their ratings.
        </p>
        <ul>
          <li v-for="(rating, movie) in movieRatings" :key="movie">
            {{ movie }}: {{ rating }}/10
          </li>
        </ul>
      </div>
  
      <!-- Example b: v-for with a Range -->
      <div class="example">
        <h2>Countdown</h2>
        <p>
          Here, we'll use v-for to create a countdown from 10 to 1.
        </p>
        <ul>
          <li v-for="countdown in reversedCountdown" :key="countdown">
            {{ countdown }}
          </li>
        </ul>
      </div>
  
      <!-- Example c: v-for on <template> -->
<div class="example">
  <h2>Programming Languages</h2>
  <p>
    This example uses v-for within a template to list different programming languages.
  </p>
  <div v-for="(language, index) in programmingLanguages" :key="index">
    {{ language }}
  </div>
</div>
  
      <!-- Example d: v-for with v-if -->
      <div class="example">
        <h2>Fruits Collection</h2>
        <p>
          Let's display only the ripe fruits from our collection.
        </p>
        <ul>
          <li v-for="fruit in ripeFruits" :key="fruit">
            {{ fruit }}
          </li>
        </ul>
      </div>
  
      <!-- Example e: v-for without a Component -->
      <div class="example">
        <h2>List of Items</h2>
        <p>
          In this section, we'll create a list of items without a custom component.
        </p>
        <ul>
          <li v-for="(item, index) in customItems" :key="index">
            {{ item.title }} - {{ item.description }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        movieRatings: {
          'Inception': 8.8,
          'The Shawshank Redemption': 9.3,
          'Pulp Fiction': 8.9,
          'The Dark Knight': 9.0,
        },
        reversedCountdown: Array.from({ length: 10 }, (_, i) => 10 - i),
        programmingLanguages: ['JavaScript', 'Python', 'Java', 'Ruby', 'C++'],
        fruits: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
        customItems: [
          { title: 'Item 1', description: 'Description for Item 1' },
          { title: 'Item 2', description: 'Description for Item 2' },
          { title: 'Item 3', description: 'Description for Item 3' },
        ],
      };
    },
    computed: {
      ripeFruits() {
        return this.fruits.filter(fruit => fruit !== 'Banana');
      },
    },
  };
  </script>
  
  <style scoped>
  .list-rendering {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    background-color: #f7f7f7;
    color: #333;
  }
  
  .header {
    text-align: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .example {
    margin-top: 20px;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1, h2 {
    color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
    color: #555;
  }
  </style>
  