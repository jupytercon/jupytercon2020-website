<template>
    <div>
        <BlockHeader :buttons="false" title="Program" tall>
            <template v-slot:media>
                <!-- TODO: update photo -->
                <img src="~assets/images/explain.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                    <h2>Program</h2>
                    <slot>
                    </slot>
                </div>

            </template>
        </BlockHeader>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "program",
        components: {DesktopFooter, BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="scss" scoped>
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
    .location-name {
        color: $figma-orange;
    }
    .header-content {
        margin: 100px 120px;
        color: white;
        h2 {
            font-size: 30px;
        }
    }
    img.overlay-circle {
        position: absolute;
        top: (516px - 424px)/2;
        right: 0;
        height: 424px !important;
        width: 212px !important;
    }

    .grayscale {
        opacity: 0.4;
    }

    .disabled {
        pointer-events: none;
    }
</style>
