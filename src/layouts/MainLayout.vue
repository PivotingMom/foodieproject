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
    to: 'auth',
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
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>
