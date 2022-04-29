import { defineStore } from 'pinia';
import { Cookies } from 'quasar';

export const useCookieStore = defineStore('cookieStore', {
  actions: {
    setCookie(name, payload) {
      Cookies.set(name, payload);
    },
    removeCookie(name) {
      Cookies.remove(name);
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
  },
});
