<template>
    <div>
        <BlockHeader title="JupyterCon" subtitle="2020">
        </BlockHeader>
        <BlockAbout :img="require('~/assets/images/flickr/batman.jpg')" title="About"/>
        <BlockGreyOrange/>
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";
    import MenuBar from "../components/MenuBar";

    export default {
        name: "index",
        components: {BlockHeader, BlockAbout, BlockGreyOrange, MenuBar},
    }
</script>

<style lang="scss" scoped>
</style>
