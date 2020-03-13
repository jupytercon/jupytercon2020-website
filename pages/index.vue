<template>
    <div>
        <BlockHeader title="JupyterCon" subtitle="2020">
        </BlockHeader>

        <BlockAbout :img="require('~/assets/images/flickr/people_smiling_sitting.jpg')" title="About">
            <p>JupyterCon brings together data scientists, business analysts,
            researchers, educators, developers, and core Project contributors
            and tool creators for in-depth training, insightful keynotes,
            networking events, and practical talks exploring the Project Jupyter
            platform.
            </p>
            <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
        </BlockAbout>
        <BlockGreyOrange>
            <div class="main-text main-content float-left">
                <h2>Participate</h2>
                <p>Do you have a great idea or tool for the Jupyter community you would like to share? Do you have a really interesting application where you've used Jupyter heavily and have developed good workflows for using Jupyter software that are broadly applicable? What lessons do you have for others using or deploying Jupyter?</p>
                <nuxt-link class="button hollow" to="/participate/">Learn More</nuxt-link>
            </div>
            <img src="~assets/images/speed-network.jpg" class="float-left"></img>
        </BlockGreyOrange>
        <DesktopSponsors />
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";
    import DesktopSponsors from "../components/DesktopSponsors";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "index",
        components: {DesktopFooter, DesktopSponsors, BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="scss" scoped>
</style>
