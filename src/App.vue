<template>
  <div>
    <!-- Header with main content and sub-content links -->
    <header class="Header">
      <div class="links">
        <!-- Main content links -->
        <RouterLink class="main-link" to="/templatesyntax">Template Syntax</RouterLink>
        <RouterLink class="main-link" to="/Method">Method</RouterLink>
        <RouterLink class="main-link" to="Reactivity">Reactivity Fundamentals</RouterLink>
        <RouterLink class="main-link" to="/Computed">Computed</RouterLink>
        <RouterLink class="main-link" to="/Classbinding">Class Binding</RouterLink>
        <RouterLink class="main-link" to="/Listrendering">Listrendering</RouterLink>
        <RouterLink class="main-link" to="/Eventhandle">Eventhandle</RouterLink>
        <RouterLink class="main-link" to="/FormBinding">FormBinding</RouterLink>
        <RouterLink class="main-link" to="/Watcher">Watcher</RouterLink>
        <RouterLink class="main-link" to="/Component">Componentinvue</RouterLink>
        <RouterLink class="main-link" to="/router">Router</RouterLink>
        
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: space-between; /* Add space between links and buttons */
  align-items: center;
  padding: 10px;
}

/* Styles for the links */
.links {
  display: flex;
  gap: 10px; /* Add space between links */
}

.main-link {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.main-link:hover {
  background-color: white;
  color: red;
}

/* Styles for the auth buttons */
.auth-buttons {
  display: flex;
  gap: 10px; /* Add space between buttons */
}

button {
  margin: 0;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Primary button style */
.btn-primary {
  background-color: #007bff;
  color: white;
}

/* Secondary button style */
.btn-secondary {
  background-color: #6c757d;
  color: white;
}

/* Hover effect for buttons */
button:hover {
  background-color: #0056b3;
}

</style>
