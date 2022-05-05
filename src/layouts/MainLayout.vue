<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="chop__primary" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Chops App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label class="q-mb-xl" header> Menu Links </q-item-label>

        <SidebarLink
          v-for="(link, index) in sidebarlinks"
          :key="index"
          :icon="link.icon"
          :to="link.to"
          :title="link.title"
          @clicked="handleClicked"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import SidebarLink from 'src/components/SidebarLink.vue';
import { useMainStore } from 'stores/mainStore';
import { mapActions } from 'pinia';
import { Cookies } from 'quasar';

const sidebarlinks = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    to: 'dashboard',
  },
  {
    title: 'Manage Profile',
    icon: 'person',
    to: 'profile',
  },
  {
    title: 'Create Menus',
    icon: 'assignment',
    to: 'menu',
  },
  {
    title: 'Logout',
    icon: 'logout',
    to: 'logout',
  },
];
export default defineComponent({
  name: 'MainLayout',
  components: {
    SidebarLink,
  },
  data() {
    return {
      sidebarlinks,
      leftDrawerOpen: false,
    };
  },
  computed: {
    accountType() {
      const restaurantId = Cookies.get('restaurantId');
      const clientId = Cookies.get('clientId');
      if (restaurantId) {
        return 'restaurant';
      }
      if (clientId) {
        return 'client';
      }
      return null;
    },
  },
  methods: {
    ...mapActions(useMainStore, ['logout']),
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    async handleClicked(data) {
      if (data === 'logout') {
        const requestWasSuccessful = await this.logout(this.accountType);
        if (requestWasSuccessful === true) {
          this.$router.replace({ name: 'auth' });
        }
      }
    },
  },
});
</script>
