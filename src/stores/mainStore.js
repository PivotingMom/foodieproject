import { defineStore } from 'pinia';
import { Cookies, Notify, Loading } from 'quasar';
import { api } from 'src/boot/axios';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    clientId: null,
    token: null,
    clientDetails: null,
    orders: [],
  }),
  actions: {
    async login(payload, accountType) {
      // to show the process to the user
      Loading.show();

      try {
        const response = await api.post(`/api/${accountType}-login`, payload);
        if (response.status === 201) {
          this.setCookie('token', response.data.token);
          this.setCookie('restaurantId', response.data.restaurantId);
          this.setCookie('clientId', response.data.clientId);
          return true;
        }
        return false;
        // captures the error msg from the api to the user
      } catch (error) {
        const errorMessage = error.response.data.error;

        Notify.create({
          message: errorMessage,
          position: 'center',
          type: 'negative',
        });
        return false;
      } finally {
        Loading.hide();
      }
    },
    async register(payload, accountType) {
      Loading.show();
      try {
        // attempt to perform an action
        const response = await api.post(`/api/${accountType}`, payload);

        if (response.status === 201) {
          this.setCookie('token', response.data.token);
          this.setCookie('restaurantId', response.data.restaurantId);
          this.setCookie('clientId', response.data.clientId);
          return true;
        }
        return false;
      } catch (error) {
        // If it fails, comes into this block
        const errorMessage = error.response.data;
        Notify.create({
          message: errorMessage,
          position: 'center',
          type: 'negative',
        });
        return false;
      } finally {
        Loading.hide();
      }
    },
    async getClient() {
      Loading.show();

      try {
        api.defaults.headers.token = Cookies.get('token');
        const response = await api.get('/api/client');

        if (response.status === 200) {
          const client = response.data[0];
          this.clientDetails = client;
          return true;
        }
        return false;
      } catch (error) {
        Notify.create({ type: 'negative', message: 'An error occurred', position: 'center' });
        return true;
      } finally {
        Loading.hide();
      }
    },
    async getOrders() {
      Loading.show();

      try {
        api.defaults.headers.token = Cookies.get('token');
        const response = await api.get('/api/order');

        if (response.status === 200) {
          this.orders = response.data;
          return true;
        }
        return false;
      } catch (error) {
        Notify.create({ type: 'negative', message: 'An error occurred', position: 'center' });
        return false;
      }
    },
    setCookie(name, payload) {
      Cookies.set(name, payload);
    },
    removeCookie(name) {
      Cookies.remove(name);
    },
  },
  getters: {
    token: (state) => state.token,
    clientId: (state) => state.clientId,
    totalOrders: (state) => state.orders.length,
  },
});
