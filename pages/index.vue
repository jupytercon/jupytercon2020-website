<template>
    <div>
        <BlockHeader title="JupyterCon" subtitle="2020">
        </BlockHeader>
        <BlockAbout :img="require('~/assets/images/flickr/batman.jpg')" title="About"/>
        <BlockGreyOrange/>
        <DesktopSponsors />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";
    import DesktopSponsors from "../components/DesktopSponsors";

    export default {
        name: "index",
        components: {DesktopSponsors, BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="scss" scoped>
</style>
