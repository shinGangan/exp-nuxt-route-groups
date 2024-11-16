<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <header class="top-0 z-50 border border-gray-200 bg-indigo-200/75">
    <UContainer class="flex min-h-16 items-center justify-between gap-4">
      <h1 @click="router.push('/')">Test App</h1>
      <div>
        <UButton
          class="ml-4"
          icon="i-heroicons-user"
          target="_blank"
          @click="router.push('/login')"
        >
          Login
        </UButton>
      </div>
    </UContainer>
  </header>
</template>
