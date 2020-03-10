<template>
    <div>
        <BlockHeader :buttons="false" title="About">
            <template v-slot:media>
                <img src="~assets/images/speed-network.jpg"/>
            </template>
        </BlockHeader>
        <BlockAbout title="What is JupyterCon?" :img="require('~/assets/images/explain.jpg')"/>
        <BlockGreyOrange>
            <h1>Past events</h1>
        </BlockGreyOrange>
        <div class="comittee">
            <h1>Comittee</h1>
        </div>
        <BlockGreyOrange :right="false">
            <div>
                <h1>Conduct - diversity - eco friendly</h1>
            </div>
        </BlockGreyOrange>
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
