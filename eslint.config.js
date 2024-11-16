// @ts-check
import pluginVitest from '@vitest/eslint-plugin';
import pluginTailwindCss from 'eslint-plugin-tailwindcss';
import pluginVueScopedCss from 'eslint-plugin-vue-scoped-css';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      quotes: 'single',
      commaDangle: 'never',
      braceStyle: '1tbs'
    }
  },
  dirs: {
    src: ['./src']
  }
})
  .append({
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-import-type-side-effects': 'error'
    }
  })
  .append(
    ...pluginTailwindCss.configs['flat/recommended'],
    ...pluginVueScopedCss.configs['flat/recommended'],
    ...pluginVueA11y.configs['flat/recommended']
  )
  .append({
    files: ['src/app/composables/**/*.ts', 'src/app/server/**/*.ts'],
    plugins: {
      pluginVitest
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      'pluginVitest/consistent-test-it': ['error', { fn: 'it' }],
      'pluginVitest/require-top-level-describe': 'error'
    }
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }]
    }
  });
