<script setup>
import { menuData } from '~/data/menu'
</script>

<template>
  <main>
    <h1>Our Menu</h1>

    <section v-for="section in menuData" :key="section.category">
      <h2>{{ section.category }}</h2>
      <ul>
        <li v-for="item in section.items" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </section>

  </main>
</template>