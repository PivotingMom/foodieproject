<template>
  <q-page>
    <ClientForm />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import ClientForm from 'src/components/Profile/ClientProfileForm.vue';

const ProfilePage = defineComponent({
  name: 'ProfilePage',
  components: {
    ClientForm,
  },
});
export default ProfilePage;
</script>
