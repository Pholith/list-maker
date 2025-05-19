import { defineStore } from 'pinia';
import { ref } from 'vue';

type SnackbarType = 'success' | 'error' | 'info' | 'warning';

interface Snackbar {
  id: number;
  message: string;
  color: SnackbarType;
  timeout: number;
  show: boolean;
}

export const useSnackbarStore = defineStore('snackbar', () => {
  const snackbars = ref<Snackbar[]>([]);

  function openSnackbar(snackbarType: SnackbarType, msg: string, time = 3000) {
    const id = Date.now(); // Unique ID for each snackbar

    snackbars.value.push({
      id,
      message: msg,
      color: snackbarType,
      timeout: snackbarType === 'error' && time < 5000 ? 5000 : time,
      show: true
    });

    setTimeout(() => {
      snackbars.value = snackbars.value.filter((snack) => snack.id !== id);
    }, time);
  }

  return { snackbars, openSnackbar };
});
