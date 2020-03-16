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

        <div class="tickets white-background" id="Register / Tickets">
            <h1>Tickets</h1>
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-4">
                    <h3 class="ticket-number">May 24th</h3>
                    <hr>
                    <h3>Early Bird</h3>
                    <p>Open through May 24th</p>
                    <a class="button" href="https://www.eventbrite.com/e/jupytercon-2020-tickets-98280733319">Purchase</a>
                </div>
                <div class="cell small-12 medium-4 grayscale">
                    <h3 class="ticket-number">July 26th</h3>
                    <hr>
                    <h3>Regular</h3>
                    <p>Open through July 26th</p>
                    <a class="button disabled" href="https://www.eventbrite.com/e/jupytercon-2020-tickets-98280733319">Purchase</a>
                </div>
                <div class="cell small-12 medium-4 grayscale">
                    <h3 class="ticket-number">Aug 10th</h3>
                    <hr>
                    <h3>Last Call</h3>
                    <p>From July 27th</p>
                    <a class="button disabled" href="https://www.eventbrite.com/e/jupytercon-2020-tickets-98280733319">Purchase</a>
                </div>
            </div>
        </div>

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
                    NumFOCUS and the JupyterCon team believe that diversity is the strength of our community and essential for success. To help foster this inclusive environment, we are offering scholarships and financial aid to create an event that brings together many different perspectives.  We want to include participants that represent all ethnicities, sexual orientations, religions, ages, and genders. We’d also like to introduce geo-diversity as a goal to bring attendees from around the globe since JupyterCon has been previously held in the US and now Europe.
                </p>

                <h2>How to apply</h2>

                    <p>We will soon open online applications to the diversity scholarship.</p>                    
 
                    <p>Key dates:</p>

                    <ul>
                        <li>April 20th: deadline to submit application</li>
                        <li>May 4th: applicants notified; speakers notified of CFP acceptance</li>
                    </ul>
 
                <h2>What’s included</h2>

                    <ul>
                        <li>Full conference pass that includes all talks, tutorials, social events.</li>
                        <li>A 500  Euro gift card or digital fund transfer (Venmo, PayPal) will be provided to the recipient onsite at the conference to offset costs such as travel, lodging, and meals.</li>
                    </ul>
  
                    <p>
                        We encourage you to take photos and share on Twitter, LinkedIn, and other social media platforms.  Sharing about the event brings visibility to Jupyter, NumFOCUS, and open source.  And importantly, it helps us to get sponsors for future events, who often support financial aid.
                    </p>
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
