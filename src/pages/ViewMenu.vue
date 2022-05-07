<template>
  <div>
    <MenuList />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MenuList from 'components/Menu/MenuList.vue';

const ViewMenu = defineComponent({
  name: 'ViewMenu',
  components: {
    MenuList,
  },
});

export default ViewMenu;
</script>
