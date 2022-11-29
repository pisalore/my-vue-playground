<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'todos' }">Todo Utility</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'counter' }">Counter</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'inputs' }">Inputs</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'watcher' }">Watcher</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'validators' }">Validators</router-link>
      </li>
    </ul>
  </nav>
</template>
