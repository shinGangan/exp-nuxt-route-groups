<script setup lang="ts">
const route = useRoute();

const user = ref({
  name: 'GANGAN'
});
</script>

<template>
  <UContainer class="flex justify-center pt-8">
    <UCard class="w-10/12">
      <template #header>
        <p class="font-bold">User Profile</p>
      </template>
      <div class="grid grid-rows-2 gap-4 place-items-start">
        <div
          class="grid grid-cols-4 grid-rows-subgrid place-items-center gap-8"
        >
          <UAvatar
            src="https://avatars.githubusercontent.com/u/44604921?v=4"
            alt="Avatar"
            size="lg"
          />
          <p>
            User ID: <span class="font-bold">{{ route.params.id }}</span>
          </p>
          <p class="font-bold">
            {{ user.name }}
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
