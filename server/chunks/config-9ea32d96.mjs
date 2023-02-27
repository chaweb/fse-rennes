import { reactive } from 'vue';
import { u as useNuxtApp, l as __appConfig } from './app.config-f3ff7543.mjs';

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}

export { useAppConfig as u };
//# sourceMappingURL=config-9ea32d96.mjs.map
