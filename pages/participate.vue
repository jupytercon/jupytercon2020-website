<template>
    <div>
        <BlockHeader :buttons="false" title="Participate" tall>
            <template v-slot:media>
                <img src="~assets/images/participate.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                    <h2>Get involved</h2>
                    <slot>
                    <p>What do you wish you would have known when starting to use Jupyter or interacting in the Jupyter community? What has been the slowest or most frustrating thing you've had to learn about using Jupyter that you could share with others to make their experience better? Propose a talk or poster at the JupyterCon 2020! </p>
                    </slot>
                </div>

            </template>
        </BlockHeader>

<!--        <div class="tickets white-background" id="Register / Tickets">-->
<!--            <h1>Tickets</h1>-->
<!--            <div class="grid-x grid-padding-x">-->
<!--                <div class="cell small-12 medium-4">-->
<!--                    <h3 class="ticket-number">1</h3>-->
<!--                    <hr>-->
<!--                    <h3>Ticket Type 1</h3>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.-->
<!--                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut-->
<!--                        malesuada pretium faucibus odio quis-->
<!--                        congue.</p>-->
<!--                    <a class="button">Purchase</a>-->
<!--                </div>-->
<!--                <div class="cell small-12 medium-4">-->
<!--                    <h3 class="ticket-number">2</h3>-->
<!--                    <hr>-->
<!--                    <h3>Ticket Type 2</h3>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.-->
<!--                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut-->
<!--                        malesuada pretium faucibus odio quis-->
<!--                        congue.</p>-->
<!--                    <a class="button">Purchase</a>-->
<!--                </div>-->
<!--                <div class="cell small-12 medium-4">-->
<!--                    <h3 class="ticket-number">3</h3>-->
<!--                    <hr>-->
<!--                    <h3>Ticket Type 3</h3>-->
<!--                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.-->
<!--                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut-->
<!--                        malesuada pretium faucibus odio quis-->
<!--                        congue.</p>-->
<!--                    <a class="button">Purchase</a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <BlockAbout id="Register / Tickets" title="Tickets" :img="require('~/assets/images/flickr/jupyter-desk.jpg')">
            <template v-slot:button>
                <a
                        class="button hollow"
                        href="https://www.eventbrite.com/e/jupytercon-2020-tickets-98280733319"
                >Learn more</a>
            </template>
            <p> [TBD] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                malesuada pretium faucibus odio quis
                congue.</p>
        </BlockAbout>

        <BlockGreyOrange id="Call for proposals">
            <div class="proposals">
                <h1>Proposals</h1>
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 medium-4">
                        <h2>Talks</h2>
                        <p>JupyterCon talks are 30 minutes long (plan for 25 minutes of presentation and 5 minutes of questions).</p>
                        <!-- <a class="button hollow" href="">Apply (TDB)</a> -->
                    </div>
                    <div class="cell small-12 medium-4">
                        <h2>Tutorials</h2>
                        <p>JupyterCon tutorials are 3 hours long session, for beginner, intermediate or experienced users.</p>
                        <!-- <a class="button hollow" href="">Apply (TDB)</a> -->
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
    .tickets {
        padding: 100px 120px;
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
    img.overlay-circle {
        position: absolute;
        top: (516px - 424px)/2;
        right: 0;
        height: 424px !important;
        width: 212px !important;
    }
</style>
