<template>
  <div id="app">
    <block-header-plain />
    <menu-bar />
    <desktop-footer />
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
import BlockHeaderPlain from "./components/BlockHeaderPlain";
import DesktopFooter from "./components/DesktopFooter";

export default {
  name: 'App',
  components: {
    MenuBar, BlockHeaderPlain, DesktopFooter
  }
}
</script>

<style>
</style>
