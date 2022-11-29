<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

const products = ref([]);
const product = ref(null);
const lastProductId = computed(
  () => products.value[products.value.length - 1].id
);

async function getProducts() {
  try {
    const { data } = await axios.get("/products");
    products.value = data;
  } catch (error) {
    products.value = [];
  }
}

async function getProduct(id) {
  try {
    const { data } = await axios.get(`/products/${id}`);
    product.value = data;
  } catch (error) {
    product.value = null;
  }
}

async function createProduct(name, price) {
  try {
    await axios.post("/products", { name, price });
    loadData();
  } catch (error) {}
}

async function updateProductName(id, name) {
  try {
    await axios.patch(`/products/${id}`, {
      name,
    });
    loadData();
  } catch (error) {}
}

async function deleteProduct(id) {
  try {
    await axios.delete(`/products/${id}`);
    loadData();
  } catch (error) {}
}

function loadData() {
  getProducts();
  getProduct(1);
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <h2>Axios test</h2>
  <h4>Get products</h4>
  <ul>
    <li v-for="product in products" :key="product.id">{{ product }}</li>
  </ul>
  <div v-if="product">
    <h4>Product with id {{ product.id }}</h4>
    <span>Name: {{ product }}</span>
  </div>
  <div>
    <h4>Operations</h4>
    <button @click="createProduct('surf board', 423)">Create product</button>
    <button @click="updateProductName(lastProductId, 'old')">
      Update product
    </button>
    <button @click="deleteProduct(lastProductId)">Delete product</button>
  </div>
</template>
