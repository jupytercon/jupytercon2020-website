<template>
  <div>
    <BlockHeaderPlain title="COVID-19 Statement">
      <template v-slot:side-content></template>
    </BlockHeaderPlain>
    <div class="main grey-background">
      <div class="et_pb_text_inner">
        <p>18 June 2020</p>

        <p>Our first priority will always be the safety and well-being of our community members. We are closely monitoring the developments of the Covid-19 pandemic, and how it may affect not only the conference, but the lives of our speakers, attendees, and organizers.</p>

        <p>We have therefore changed JupyterCon 2020 to be an online virtual conference in October to avoid a large in-person gathering.</p>

        <p>-The JupyterCon Organizing Committee</p>
      </div>
    </div>
    <DesktopFooter />
  </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "proposals",
        components: {DesktopFooter, BlockHeaderPlain},
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
    .menubar {
        position: relative;
        z-index: 1;
    }
    .main {
        padding: 100px;
    }
</style>
