<template>
    <div>
        <BlockHeader :buttons="false" title="Venue" tall>
            <template v-slot:side-content>
                <div>Venue name</div>
                <div class="location-name">Berlin, Germany</div>
            </template>
            <template v-slot:media>
                <img src="~assets/images/bcc_photo_exterior_view_4708_x_2648_pixel_350_dpi.webp"/>
            </template>
            <template v-slot:content>
                <div class="header-content"> 
                    <h2>The conference hall</h2>
                    <slot>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    </slot>
                </div>

            </template>
        </BlockHeader>
        <div class="getting-there">
            <h1>Getting there</h1>
        </div>

        <BlockGreyOrange :right="false">
            <img src="~assets/images/venue-berlin-roads.jpg" class="float-left"></img>
            <div class="main-text participate-text float-left">
                <h2>Staying there</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                    Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                    malesuada pretium faucibus odio quis
                    congue.</p>
                <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
            </div>
        </BlockGreyOrange>
        <div class="things-todo">
            <h1>Getting there</h1>
        </div>
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import BlockAbout from "../components/BlockAbout";
    import BlockGreyOrange from "../components/BlockGreyOrange";

    export default {
        name: "venue",
        components: {BlockHeader, BlockAbout, BlockGreyOrange},
    }
</script>

<style lang="scss" scoped>
    @import 'assets/scss/settings';
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
    .getting-there, .things-todo {
        height: 800px;
        padding: 100px 120px;
        background-color: white;
        h1 {
            color: $figma-orange;
        }
    }
</style>
