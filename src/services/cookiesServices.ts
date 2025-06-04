import { useListStore } from '@/stores/list-store';
import { inject } from 'vue';
import type { VueCookies } from 'vue-cookies';

const $cookies = inject<VueCookies>('$cookies');

export function setCookie(key: string, value: any) {
  $cookies?.set(key, value);
}

export function getCookie(key: string) {
  return $cookies?.get(key);
}

export function loadListSettings() {
  const listStore = useListStore();
  const settings = getCookie('settings');
  if (settings) {
    listStore.sections;
  }
}
