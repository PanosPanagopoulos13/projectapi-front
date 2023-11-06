<script setup>
import { ref, onMounted } from 'vue';
import { apiFetch } from '../services/apiFetch.js'

let userID = 1
const user = ref(null)
const apiUrl = import.meta.env.VITE_API_URL

onMounted(async () => {
  try {
    const response = await apiFetch(`${apiUrl}/api/v1/user/get/${userID}`)
    user.value = response.data
    console.log(response)
    console.log(user)
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
});
</script>
<template>
<div class="flex space-x-4 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">

    <template v-if="user">
        <div class="rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 py-1 grid grid-cols-1 gap-y-1">
            <div class="">Name: {{ user.name }}</div>
            <div class="">{{ user.email }}</div>
            <div class="">{{ user.created_at }}</div>
            <div class="">{{ user.updated_at }}</div>
        </div>
    </template>
    <template v-else class="animate-pulse">
        <div class="animate-pulse rounded-full bg-slate-200 h-10 w-10"></div>
        <div class="flex-1 py-1 grid grid-cols-1 gap-y-2">
            <div class="h-3 animate-pulse rounded bg-slate-200"></div>
            <div class="h-3 animate-pulse rounded bg-slate-200"></div>
            <div class="h-3 animate-pulse rounded bg-slate-200"></div>
            <div class="h-3 animate-pulse rounded bg-slate-200"></div>
        </div>
    </template>

</div>
</template>
