<template>
    <div>
        <BlockHeaderPlain title="Privacy Policy">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main grey-background">
            <h2>Privacy Policy</h2>
            <p>TBD</p>
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
