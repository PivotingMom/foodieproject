<template>
  <q-page class="flex flex-centre column">
    <h4>Update Your Profile</h4>
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
