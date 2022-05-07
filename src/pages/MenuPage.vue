<template>
  <q-page class="flex column" padding>
    <div class="q-mb-md">
      <q-btn @click="showCreateMenu" label="Show Menu Form" color="dark" />
    </div>
    <CreateMenu v-if="showForm" />
    <MenuList />
  </q-page>
</template>
<script>
import { defineComponent } from 'vue';
import MenuList from 'components/Menu/MenuList.vue';
import CreateMenu from 'components/Menu/CreateMenu.vue';

const MenuPage = defineComponent({
  name: 'MenuPage',
  components: {
    MenuList,
    CreateMenu,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    showCreateMenu() {
      this.showForm = true;
    },
  },
});

export default MenuPage;
</script>

<style lang="sass" scoped>

</style>
