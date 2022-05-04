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
      Loading.show();
      try {
        const response = await api.post(`/api/${accountType}-login`, payload);
        if (response.status === 201) {
          this.setCookie('token', response.data.token);
          this.setCookie('clientId', response.data.clientId);
          this.setCookie('restaurantId', response.data.restaurantId);

          return true;
        }
        return false;
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
    async logout(accountType) {
      Loading.show();
      try {
        // get a cookie value with the key "token", saved during login
        api.defaults.headers.token = Cookies.get('token');
        const response = await api.delete(`/api/${accountType}-login`);

        if (response.status === 204) {
          Notify.create({
            message: 'Logout was successful',
            position: 'center',
            type: 'positive',
          });
          Cookies.remove('token');
          Cookies.remove('restaurantId');
          Cookies.remove('clientId');

          return true;
        }
        return false;
      } catch (error) {
        Notify.create({
          message: 'Logout failed',
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
    async updateProfile(payload, accountType) {
      Loading.show();

      try {
        api.defaults.headers.token = Cookies.get('token');
        const response = await api.patch(`/api/${accountType}`, payload);

        if (response.status === 200) {
          Notify.create({ type: 'positive', message: 'Profile update successfully', position: 'center' });
          return true;
        }
        return false;
      } catch (error) {
        Notify.create({ type: 'negative', message: 'Profile update failed', position: 'center' });
        return false;
      } finally {
        Loading.hide();
      }
    },
    getAccountType() {
      const restauarantId = Number(Cookies.get('restaurantId'));
      const clientId = Number(Cookies.get('clientId'));

      if (restauarantId) {
        return 'restaurant';
      }
      if (clientId) {
        return 'client';
      }
      return null;
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
    restauarantId: (state) => state.restaurantId,
  },
});
