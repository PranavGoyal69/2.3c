<template>
    <div class="app">
      <header>
        <h1>Vue Router Example</h1>
      </header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style scoped>
  .app {
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
  
  header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  .router-link-active {
    font-weight: bold;
  }
  </style>
  