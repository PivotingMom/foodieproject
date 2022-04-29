import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { useCookieStore } from './cookies';

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    clientId: null,
    token: null,
  }),
  getters: {
    token: (state) => state.token,
    clientId: (state) => state.clientId,
  },
  actions: {
    async login(payload, accountType) {
      try {
        const cookieStore = useCookieStore();
        const response = await api.post(`/api/${accountType}-login`, payload);
        if (response.status === 201) {
          cookieStore.setCookie('token', response.data.token);
          return true;
        }
        return false;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
});
