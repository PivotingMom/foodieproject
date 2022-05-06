<template>
  <q-card bordered flat class="menuList">
    <h6>Menu List</h6>
    <q-card-section>
      <div class="row q-gutter-md">
        <div class="col-md-3" v-for="(item, index) in menus" :key="index">
          <q-card bordered flat class="my-card">
            <q-img :src="item.imageUrl">
              <div class="absolute-bottom text-subtitle2 text-center">
                {{ item.name }} - {{ item.price }}
                <div>
                  {{ item.description }}
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useMainStore } from 'stores/mainStore';

const MenuList = defineComponent({
  name: 'MenuList',
  computed: {
    ...mapState(useMainStore, ['restaurantId', 'menus']),
  },
  mounted() {
    this.getMenus(this.restaurantId);
  },
  methods: {
    ...mapActions(useMainStore, ['getMenus']),
  },
});

export default MenuList;
</script>

<style>
.menuList {
  width: 100%;
}
</style>
