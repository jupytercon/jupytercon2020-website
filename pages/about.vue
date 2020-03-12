<template>
    <div>
        <BlockHeader :buttons="false" title="About">
            <template v-slot:media>
                <img src="~assets/images/speed-network.jpg"/>
            </template>
        </BlockHeader>
        <BlockAbout id="What is it?" title="What is JupyterCon?" :img="require('~/assets/images/explain.jpg')"/>
        <BlockGreyOrange id="Past Events">
            <h1>Past events</h1>
        </BlockGreyOrange>
        <div id="Organizing Committee" class="comittee">
            <h1>Comittee</h1>
        </div>
        <BlockGreyOrange id="conduct-diversity-eco" :right="false">
            <div>
                <h1>Conduct - diversity - eco friendly</h1>
            </div>
        </BlockGreyOrange>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "about",
        components: {DesktopFooter, BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="scss" scoped>
    @import 'assets/scss/settings';
    .comittee {
        height: 800px;
        padding: 100px 120px;
        background-color: white;
        h1 {
            color: $figma-orange;
        }
    }
</style>
