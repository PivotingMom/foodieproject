<template>
<div class="column">
  <q-card bordered flat class="menuList q-mt-md full-width">
    <q-card-section>
      <h6>Menu List</h6>
      <div class="row q-gutter-md">
        <div class="col-md-3 col-3" v-for="(item, index) in menus" :key="index">
          <q-card  bordered flat>
            <q-img height="200px" :src="item.imageUrl">
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ item.name }} - {{ item.price }}
                <div>
                  {{ item.description }}
                </div>
                <div>
                  <q-btn @click="deleteItem(item.id)" icon="delete" rounded flat />
                  <q-btn @click="editItem(item)" icon="edit" rounded flat />
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
  <UpdateMenu :isActive="showPopup" :menuItem="selectedItem" @close="closePopup" />
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useMainStore } from 'stores/mainStore';
import UpdateMenu from 'components/Menu/UpdateMenu.vue';

const MenuList = defineComponent({
  name: 'MenuList',
  props: ['id'],
  components: {
    UpdateMenu,
  },
  data() {
    return {
      showPopup: false,
      selectedItem: null,
    };
  },
  computed: {
    ...mapState(useMainStore, ['restaurantId', 'menus']),
  },
  mounted() {
    console.log(this.$query);
    const id = this.id || this.restaurantId;
    this.getMenus(id);
  },
  methods: {
    ...mapActions(useMainStore, ['getMenus', 'deleteMenu']),
    async deleteItem(menuId) {
      const palyload = {
        menuId,
      };
      await this.deleteMenu(palyload);
    },
    editItem(item) {
      this.selectedItem = item;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
});

export default MenuList;
</script>

<style>
.menuList {
  width: 100%;
}
</style>
