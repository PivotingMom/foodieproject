<template>
  <q-page class="flex" padding>
    <MenuList />
    <CreateMenu />
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
});

export default MenuPage;
</script>

<style lang="sass" scoped>

</style>
