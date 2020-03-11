<template>
    <div>
        <BlockHeader title="JupyterCon" subtitle="2020">
        </BlockHeader>
        <BlockAbout :img="require('~/assets/images/flickr/batman.jpg')" title="About"/>
        <BlockGreyOrange>
            <div class="main-text main-content float-left">
                <h2>Participate</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                    Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                    malesuada pretium faucibus odio quis
                    congue.</p>
                <nuxt-link class="button hollow" to="/participate/">Learn More</nuxt-link>
            </div>
            <img src="~assets/images/speed-network.jpg" class="float-left"></img>
        </BlockGreyOrange>
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
