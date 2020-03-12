<template>
    <div>
        <BlockHeaderPlain title="Our Sponsors">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1 class="sponsors-title">Sponsors</h1>
            <div class="grid-container sponsors">
                <div class="grid-y">
                    <div class="cell sponsor-row" v-for="sponsor in sponsors">
                        <div class="grid-x">
                            <div class="cell small-4"><img class="sponsor-image" :src="sponsor.image"></div>
                            <div class="cell auto">
                                <p class="sponsor-text-plain">
                                    {{ sponsor.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="sponsors-title">Community sponsors</h1>
            <div class="grid-container sponsors">
                <div class="grid-y">
                    <div class="cell sponsor-row" v-for="sponsor in community_sponsors">
                        <div class="grid-x">
                            <div class="cell small-4"><img class="sponsor-image" :src="sponsor.image"></div>
                            <div class="cell auto">
                                <p class="sponsor-text-plain">
                                    {{ sponsor.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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
        data() {
            return {
                sponsors: [
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                ],
                community_sponsors: [
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                    {
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    .menubar {
        position: relative;
        z-index: 1;
    }
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 24px;
    }
    h1, h2 {
        color: $figma-orange;
    }
    .main {
        background-color: $figma-grey3;
        padding: 100px;
    }
    .sponsors-title {
        margin-top: 60px;
        margin-bottom: 30px;
    }
    .sponsors {
        background-color: white;
    }
    .sponsor-row {
        min-height: 200px;
    }
    .sponsor-image {
        margin: 10%;
        width: 80%;
    }
    .sponsor-text-plain {
        margin: 30px;
    }
</style>
