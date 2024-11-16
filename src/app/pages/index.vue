<script setup lang="ts">
const router = useRouter();

const userId = ref(1);
</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme>
            <USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
            />
          </ColorScheme>
        </div>
      </template>
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
      >
        Open Nuxt UI Documentation
      </UButton>
      <UButton
        class="ml-4"
        icon="i-heroicons-user"
        color="orange"
        target="_blank"
        @click="router.push(`/user/${userId}`)"
      >
        Go to User Page
      </UButton>
    </UCard>
  </UContainer>
</template>
