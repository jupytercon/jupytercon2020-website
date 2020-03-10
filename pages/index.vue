<template>
    <div>
        <BlockHeader title="JupyterCon" subtitle="2020"/>
        <BlockAbout :img="require('~/assets/images/flickr/batman.jpg')" title="About"/>
        <BlockGreyOrange/>
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";

    export default {
        name: "index",
        components: {BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="sass" scoped>

</style>
