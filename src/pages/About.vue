<template>
  <q-page class="q-pa-lg">
    <div class="text-h4 text-center">Web-GIS single page application</div>
    <div class="text-body1 q-mt-md q-mb-md">
      Single page application (SPA) is a single page (hence the name) where a
      lot of information stays the same and only a few pieces need to be updated
      at a time.
    </div>
    <div class="text-body1 q-mb-md">
      For example, when you browse through your email you’ll notice that not
      much changes during navigation - the sidebar and header remain untouched
      as you go through your inbox.
    </div>
    <div class="text-body1 q-mb-md">
      The SPA only sends what you need with each click, and your browser renders
      that information. This is different to a traditional page load where the
      server re-renders a full page with every click you make and sends it to
      your browser.
    </div>
    <div class="text-body1 q-mb-md">
      This piece by piece, client side method makes load time must faster for
      users and makes the amount of information a server has to send a lot less
      and a lot more cost efficient. A win-win.
    </div>
  </q-page>
</template>

<script>
export default {
  name: "About",

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {},
};
</script>

<style scoped></style>
