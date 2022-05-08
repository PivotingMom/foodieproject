<template>
  <div>
    <MenuList :id="id" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MenuList from 'components/Menu/MenuList.vue';

const ViewMenu = defineComponent({
  name: 'ViewMenu',
  props: ['id'],
  components: {
    MenuList,
  },
});

export default ViewMenu;
</script>
