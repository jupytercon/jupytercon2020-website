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
            <p>To make your journey to and from the bcc quick and comfortable.</p>
            <iframe width="100%" height="480" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1213.855686908161!2d13.416141100470513!3d52.520562242410854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1898c0bf43%3A0xd2a15220241f2080!2sbcc%20Berlin%20Congress%20Center%20GmbH!5e0!3m2!1sde!2sde!4v1574775063564!5m2!1sde!2sde"></iframe>
            <p>The venue is located right in the center of the city, and is well connected to the public transport network. Here is some information to help you find your way.
</p>
            <h2>Arriving by train</h2>

            <p>ICE and Inter-City trains stop at Berlin Central Station. At the central station follow the  signs.</p>

            <p>Take one of the following trains:</p>

            <ul>
            <li>S3 (direction S Erkner Bhf)</li>
            <li>S5 (direction S Karlshorst)</li>
            <li>S7 (direction S+U Lichtenberg Bhf)</li>
            </ul>

            <p>The train stops at Berlin Friedrichstraße and Hackescher Markt. Get off at Berlin Alexanderplatz which is the 3rd stop.</p>

            <p>Alternatively, if you are arriving with a Regional Train (RE trains), check the internal display on the train to know whether the train stops at Alexanderplatz. If so, you can stay on-board and get off at Alexanderplatz directly.
</p>
            <h2>Arriving by airplane</h2>

            <p>There are currently two airports in Berlin:</p>

            <ul>
            <li>Berlin Tegel (TXL)</li>
            <li>Berlin Schönefeld (SXF)</li>
            </ul>

            <p>From Berlin Tegel (TXL), buy a AB ticket (2,80 EUR) at the machine, and get on the TXL bus, direction S+U Hauptbahnhof (Berlin Central Station). At the central station, follow the instructions from the section above ("Arriving by train").</p>

            <p>From Berlin Schönefeld (SXF), buy a ABC ticket (3,40 EUR) at the machine. Take either the RB14 or RE7 trains and get off at Alexanderplatz (3rd stop).</p>
            <p>If there are no regional trains at the time of your arrival, take the S9 and get off at Alexanderplatz.</p>

            <h2>Public transports in Berlin</h2>

            <p>To get around in Berlin, an AB ticket (2,80 EUR) is usually enough and is valid for 120 minutes.</p>

            <p>An ABC ticket (3,40 EUR) is required to go from and to the Berlin Schönefeld Airport (SXF).</p>

            <p>Here is the list of the Train, Tram, Metro and Bus connections at Alexanderplatz:</p>

            <ul>
            <li>Regional Train: RE 1, RE 2, RE 7, RB 14</li>
            <li>U-Bahn: U2, U5, U8</li>
            <li>S-Bahn: S3, S5, S7, S9</li>
            <li>Bus: M48, 100, 200, 248, N2, N5, N42, N65</li>
            <li>Tram: M2, M4, M5, M6</li>
            </ul>

            <p>For more info</p>
            <ul>
              <li><a href="https://www.berlin.de/en/public-transportation/">Public Transportation in Berlin</a></li>
              <li><a href="https://www.bvg.de/en">Travel Information and Journey Planner (BVG).</a></li>
              <li>Official public transport authority (BVG) apps:
                <ul>
                  <li><a href="https://play.google.com/store/apps/details?id=de.eos.uptrade.android.fahrinfo.berlin">Apple</a></li>
                  <li><a href="https://itunes.apple.com/de/app/fahrinfo-berlin/id284971745">Android</a></li>
                </ul>
              </li>
            </ul>
        </div>

        <BlockGreyOrange :right="false">
            <img src="~assets/images/venue-berlin-roads.jpg" class="float-left"></img>
            <div class="main-text participate-text float-left">
                <h2>Child Care</h2>
                <p>
                    Welcome JupyterCon parents! We are pleased to offer complimentary childcare during JupyterCon 2020 in Berlin, Germany.
                    Quality childcare will be offered on xxxx August, 2020 by licensed and pre-screened providers. Childcare is offered during the conference hours only.
                    If you like to sign up for this service, please complete the Childcare Request Questionnaire by insert date. If you have any questions, email us at events@numfocus.org.
                </p>
                <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
            </div>
        </BlockGreyOrange>
        <div class="things-todo">
            <h1>Things to do</h1>
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
    .getting-there, .things-todo {
        padding: 100px 120px;
        background-color: white;
        h1 {
            color: $figma-orange;
        }
    }
</style>
