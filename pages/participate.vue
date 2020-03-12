<template>
    <div>
        <BlockHeader :buttons="false" title="Participate" tall>
            <template v-slot:media>
                <img src="~assets/images/participate.jpg"/>
            </template>
            <template v-slot:content>
                <div class="header-content">
                    <h2>Get involved</h2>
                    <slot>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    </slot>
                </div>

            </template>
        </BlockHeader>
        <div class="tickets">
            <h1>Tickets</h1>
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-4">
                    <h3 class="ticket-number">1</h3>
                    <hr>
                    <h3>Ticket Type 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    <a class="button">Purchase</a>
                </div>
                <div class="cell small-12 medium-4">
                    <h3 class="ticket-number">2</h3>
                    <hr>
                    <h3>Ticket Type 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    <a class="button">Purchase</a>
                </div>
                <div class="cell small-12 medium-4">
                    <h3 class="ticket-number">3</h3>
                    <hr>
                    <h3>Ticket Type 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    <a class="button">Purchase</a>
                </div>
            </div>
        </div>

        <BlockGreyOrange>
            <div class="proposals">
                <h1>Proposals</h1>
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 medium-4">
                        <h2>Talks</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                            Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                            malesuada pretium faucibus odio quis
                            congue.</p>
                    </div>
                    <div class="cell small-12 medium-4">
                        <h2>Tutorials</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                            Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                            malesuada pretium faucibus odio quis
                            congue.</p>
                    </div>
                    <div class="cell small-12 medium-4">
                        <h2>Sprints</h2>
                        <p>The JupyterCon 2020 Sprint Day is a day-long event following the conference. Attendees will
                            have the opportunity to meet active contributors and maintainers of their favorite open source
                            projects, exchange ideas, collaborate in real time, and create lasting connections.</p>
                        <nuxt-link class="button hollow" to="/sprint/">Attend sprints</nuxt-link>
                    </div>
                </div>
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
        name: "participate",
        components: {DesktopFooter, BlockHeader, BlockAbout, BlockGreyOrange},
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
    .tickets {
        h3 {
            color: $figma-orange;
        }

        padding: 100px 120px;
        background-color: white;
        h1 {
            color: $figma-orange;
        }
    }
    .proposals {
         margin-top: -100px; // correct default margin
         h1 {
             margin-bottom: 100px;
         }
    }
    .ticket-number {
        font-size: 220px;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
</style>
