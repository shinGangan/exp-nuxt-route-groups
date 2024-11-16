<script setup lang="ts">
const router = useRouter();

const state = reactive({
  email: '',
  password: ''
});

const onSubmit = (e: Event) => {
  console.log(state);
  router.push('/');
};
</script>

<template>
  <UContainer class="flex justify-center pt-8">
    <UCard class="w-1/2">
      <template #header>
        <h1>Login Form</h1>
      </template>
      <UForm
        class="space-y-4 grid gap-4"
        :state
        @submit.prevent="onSubmit"
        required
      >
        <UFormGroup label="Email" name="email" required hint="Required">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="example@example.com"
            icon="i-heroicons-envelope"
          />
        </UFormGroup>
        <UFormGroup label="Password" name="password" required hint="Required">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="exampleexample"
            icon="i-heroicons-lock-closed"
          />
        </UFormGroup>
        <div class="grid grid-rows-subgrid place-items-end">
          <UButton type="submit" size="lg"> Login </UButton>
        </div>
      </UForm>
    </UCard>
  </UContainer>
</template>
