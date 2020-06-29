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
                    <p>What do you wish you would have known when starting to use Jupyter or interacting in the Jupyter community? Propose a talk or poster at the JupyterCon 2020! </p>
                    <p>
                                <a class="button hollow" style="border-color: white; color: white" href="https://www.eventbrite.com/e/jupytercon-2020-tickets-109183767588">Register / Tickets</a>
                    </p>

                    </slot>
                </div>

            </template>
        </BlockHeader>

        <BlockGreyOrange id="Call for proposals">
            <div class="proposals">
                <h1>Proposals</h1>
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12 medium-4 proposal-type">
                        <h2>Talks & Posters</h2>
                        <div class="proposal-caption">
                           JupyterCon talks are 30 minutes long and share insights about Jupyter and its applications.
                        </div>
                        <div class="proposal-caption">
                           JupyterCon posters present a topic and engage community members in individual discussion at the poster session.
                        </div>
                        <nuxt-link class="cfp-button button hollow" to="/talk-poster-cfp/">Propose a Talk or Poster</nuxt-link>
                    </div>
                    <div class="cell small-12 medium-4 proposal-type">
                        <h2>Tutorials</h2>
                        <div class="proposal-caption">
                            JupyterCon tutorials are 3 hours long and are for beginner, intermediate, or experienced users.
                        </div>
                        <nuxt-link class="cfp-button button hollow" to="/tutorial-cfp/">Propose a Tutorial</nuxt-link>
                    </div>
                    <div class="cell small-12 medium-4 proposal-type">
                        <h2>Sprints</h2>
                        <div class="proposal-caption">
                            The JupyterCon 2020 Sprint Day is a day-long event following the conference. Attendees will have the opportunity to meet active contributors and maintainers of their favorite open source projects, exchange ideas, collaborate in real time, and create lasting connections.
                        </div>
                        <nuxt-link class="cfp-button button hollow" to="/sprint/">Propose a Sprint</nuxt-link>
                    </div>
                </div>
            </div>
        </BlockGreyOrange>

        <div class="tickets white-background" id="Financial Aid">

            <h1>Financial Aid and Diversity Scholarships</h1>

                <p>
                    NumFOCUS and the JupyterCon team believe that diversity is the strength of our community and essential for success. To help foster this inclusive environment, we are offering scholarships for full conference passes (all talks, tutorials, social events) to create an event that brings together many different perspectives.  We want to include participants that represent all ethnicities, sexual orientations, religions, ages, genders, and geographical areas.
                </p>

                <h2>How to apply</h2>

                <p>
                    Please use <a href="https://docs.google.com/forms/d/e/1FAIpQLScBy-7hNFDWLsejqNM0wS2qE4Q5APeXO8rlYW3kzgltq-bIZg/viewform">this form</a> to apply for Diversity and Financial Aid scholarships.
                </p>
 
                    <h2>Dates to remember</h2>
                      <table style="width:100%">
                  <tr>
                    <td>July 20</td>
                    <td>Deadline to submit applications</td>
                  </tr>
                  <tr>
                    <td>August 10</td>
                    <td>Acceptance notifications are sent</td>
                  </tr>
                  </table>
  
        </div>
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
        font-size: 128px;
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

    .grayscale {
        opacity: 0.4;
    }

    .disabled {
        pointer-events: none;
    }

    .proposal-type {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
    }

    .proposal-caption {
        margin-bottom: 16px; 
    }

    .cfp-button {
        margin-top:auto;
    }
</style>
