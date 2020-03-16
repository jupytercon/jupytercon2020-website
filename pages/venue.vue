<template>
    <div>
        <BlockHeader :buttons="false" title="Venue" tall>
            <template v-slot:side-content>
                <div>bcc Berlin Congress Center</div>
                <div class="location-name">
                    <p>
                        Alexanderstraße 11<br>
                        10178 Berlin, Germany
                    </p>
                </div>
            </template>
            <template v-slot:media>
                <img src="~assets/images/bcc_photo_exterior_view_4708_x_2648_pixel_350_dpi.jpg?resize&size=899"/>
            </template>
            <template v-slot:content>
                <div class="header-content" id="Conference center">
                    <h2>The conference hall</h2>
                    <slot>
                    <p>
                        This year’s JupyterCon will take place at the <a href="https://www.bcc-berlin.de/en">bcc Berlin Congress Center</a>.
                        Situated in the heart of Berlin, it provides easy access to the city’s top destinations including Alexanderplatz,
                        Maerkisches Museum, Altes Stadthaus, Rotes Rathaus and many others.
                        The location's excellent public transport connections ensure an easy arrival and minimized commuting times.
                    </p>
                    </slot>
                </div>
            </template>
        </BlockHeader>

        <div class="getting-there white-background" id="Getting there">
            <h1>Getting there</h1>
            <p>To make your journey to and from the bcc quick and comfortable.</p>
            <iframe width="100%" height="480" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1213.855686908161!2d13.416141100470513!3d52.520562242410854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1898c0bf43%3A0xd2a15220241f2080!2sbcc%20Berlin%20Congress%20Center%20GmbH!5e0!3m2!1sde!2sde!4v1574775063564!5m2!1sde!2sde"></iframe>
            <p>The venue is located right in the center of the city, and is well connected to the public transport network. Here is some information to help you find your way.
</p>
            <h2>Arriving by train</h2>

            <p>ICE and Inter-City trains stop at Berlin Central Station. At the central station follow the green "S" signs.</p>

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

            <p>For more info:</p>
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

        <div class="hotel-local-info white-background" id="Hotel and local info">
            <h1>Hotels and local info</h1>

                <h2>Hotels</h2>

                    <h3><a href="https://www.radissonhotels.com/en-us/brand/park-inn">Park Inn</a></h3>

                    <p>Alexanderplatz 7, 10178 Berlin</p>

                    <p>
                    Price: 114€ per single room, 124€ per double room<br>
                    Distance from venue: 0.3km<br>
                    Release date: May 17th, 2020<br>
                    Phone: +49 (0)30 / 2389 4333<br>
                    E-Mail: reservations@parkinn-berlin.com<br>
                    Keyword: JupyterCon2020
                    </p>

                    <h3><a href="https://www.motel-one.com/en/hotels/berlin/hotel-berlin-alexanderplatz/">Motel One Berlin-Alexanderplatz</a></h3>

                    <p>Grunerstraße 11, 10179 Berlin</p>

                    <p>
                    Price: 79€ per single room, 94€ per double room<br>
                    Distance from venue: 0.35km<br>
                    Release date: May 31, 2020<br>
                    E-Mail: berlin-alexanderplatz@motel-one.com
                    </p>

                    <h3><a href="https://www.hilton.com/en/hotels/berhxhx-hampton-berlin-city-centre-alexanderplatz/">Hampton Berlin City Centre Alexanderplatz</a></h3>

                    <p>Otto-Braun-Straße 69, 10178 Berlin</p>

                    <p>
                    Price: 89€ per single room, 99€ per double or twin room<br>
                    Distance from venue: 0.6km<br>
                    Release date: June 14th, 2020<br>
                    Phone: +49 (0) 30 2130 85 933<br>
                    Group Reference: JupyterCon2020
                    </p>

                <h2>General Information</h2>

                    <h3>Tipping</h3>

                        <p>Tips are officially included in all prices - but it's standard practice to add a tip if you were happy with the service provided.</p>

                        <ul>
                            <li>Taxi: 10%</li>
                            <li>Restaurant: 10-15%</li>
                            <li>Chambermaid: 2-3 €</li>
                            <li>Hairdresser: 10%</li>
                        </ul>

                    <h3>Electricity</h3>

                        <p>230V - remember to pack adapters and only bring electrical equipment with a voltage change facility!</p>

                    <h3>Public spaces etiquette</h3>

                        <ul>
                            <li>When in an escalator, stay on the right if you are not in a hurry, and use the left side otherwise.</li>
                            <li>Be aware of the bike lanes! Usually they will have a different color.</li>
                            <li>Let people exit the trains before going in.</li>
                            <li>It’s allowed to drink on the streets but not inside the public transportation (gray-area with S-bahns and Regional trains).</li>
                        </ul>
        </div>

        <BlockGreyOrange :right="false" id="Child care">
            <img src="~assets/images/venue-berlin-roads.jpg" class="float-left"></img>
            <div class="main-text main-content float-left">
                <h2>Child Care</h2>
                <p>
                    Welcome JupyterCon parents! We are pleased to offer complimentary childcare during JupyterCon 2020 in Berlin, Germany.
                    Quality childcare will be offered on TBD August, 2020 by licensed and pre-screened providers. Childcare is offered during the conference hours only.
                    If you like to sign up for this service, please complete the Childcare Request Questionnaire by insert date. If you have any questions, email us at <a href="mailto:events@numfocus.org">events@numfocus.org</a>.
                </p>
                <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
            </div>
        </BlockGreyOrange>

        <div class="things-todo  white-background " id="Things to do">
            <h1>Things to do</h1>
            <p>Located at the heart of Europe, Berlin is one of the most vibrant and cultural cities in Europe. It features top-notch European universities and research facilities and a cultural landscape full of art treasures and international collections. Excellent public transport and a vibrant nightlife make Berlin one of the top spots to be!</p>

            <h2>Activities and sights in Berlin</h2>

            <p>If you are staying extra days in Berlin, for example during the weekend, you might be interested in checking out some of the popular activities and sights!</p>

            <h3>Restaurants and Bars close to the bcc</h3>

                <h4><a href="https://www.google.com/maps/place/Hofbr%C3%A4u+Wirtshaus+Berlin/@52.5232845,13.4105376,17.75z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x0:0xdb4940eb3fc10d1d!8m2!3d52.5245624!4d13.413846">Hofbräu Wirtshaus Berlin</a></h4>

                    <p>One of the largest bavarian-like restaurants in Berlin, which is also really touristic, so better to make a reservation beforehand. Since it’s a large open space, it’s usually a bit noisy.</p>

                <h4><a href="https://www.google.com/maps/place/Madami+-+Mom's+vietnamese+kitchen/@52.525119,13.4086387,17.25z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x47a84e1fd1e33e39:0x3e26c82b22aa020d!8m2!3d52.5233653!4d13.4089456">Madami - Mom's vietnamese kitchen</a></h4>

                    <p>One of the best vietnamese restaurants in this are of Berlin, and there are two of them really close by. The map points to the one in Rosa-Luxemburg-Str but around the corner in Dircksenstr there is also another one.</p>

                <h4><a href="https://www.google.com/maps/place/Dolores/@52.525119,13.4086387,17.25z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x0:0x361f48f2cb931ba4!8m2!3d52.5238598!4d13.4091997">Dolores</a></h4>

                    <p>Mexican restaurants that specialize in Burritos, Bowls and Nachos. You can buy yours as a take away, due to the popularity there is always some queue, but it’s worth the wait.</p>

                <h4><a href="https://www.google.com/maps/place/Belushi's+Berlin/@52.5277427,13.4080072,17.25z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x47a84e1df02f9389:0xcc322c3368ec8722!8m2!3d52.52686!4d13.4105824">Belushi's Berlin</a></h4>

                    <p>US-style sport bar that sells some local beers but also imported ones. They serve finger food, burgers and more. Since it’s also a Hostel, there is always people from all over the globe.</p>

                <h4><a href="https://www.google.com/maps/place/Kaschk/@52.5286153,13.4057608,17.25z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x0:0x29195df9db2b738d!8m2!3d52.5284058!4d13.4099025">Kaschk</a></h4>

                    <p>Small Beer and Coffee place that sells a varied selection of local beers, but also coffee and some cakes.</p>

                <h4><a href="https://www.google.com/maps/place/Zeit+f%C3%BCr+Brot/@52.5277535,13.4072568,18.25z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x0:0x1231990246d7414!8m2!3d52.5280121!4d13.4086033">Zeit für Brot</a></h4>

                    <p>Bakery that sells one of the best cinnamon rolls in Berlin. They have a large variety of other bread and cakes, so it’s worth it if you are close by and want to have a coffee and something sweet.</p>

                <h4><a href="https://www.google.com/maps/place/Brauhaus+Georgbr%C3%A6u/@52.5170946,13.4067599,17.5z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x0:0x48223ec25814cecd!8m2!3d52.5165318!4d13.4054989">Brauhaus Georgbræu</a></h4>

                    <p>Located inside the Nikolaiviertel this is a brewery and a restaurant that serves typical south German food. Due to the location it can become really full of tourist, since it’s close to the Museum Island.</p>

                <h4><a href="https://www.google.com/maps/place/Transit/@52.5291155,13.4033113,17.75z/data=!4m12!1m6!3m5!1s0x47a84e1898c0bf43:0xd2a15220241f2080!2sbcc+Berlin+Congress+Center+GmbH!8m2!3d52.5206375!4d13.4159899!3m4!1s0x47a851e473c07501:0x1a18bdadb06f54d0!8m2!3d52.5286717!4d13.4022877">Transit</a></h4>

                    <p>Asian mediterranean fusion restaurant that serves many small dishes in its menu. The main concept here is to order many of them and share them on a table.</p>

            <h3>Science & Technology</h3>

                <h4><a href="http://www.naturkundemuseum-berlin.de/en/">Museum for Natural History</a></h4>

                    <p>Dinosaurs, evolution and the solar system.</p>

                    <p>
                    Tue-Fri: 9.30 a.m. - 6.00 p.m., Sat-Sun: 10.00 a.m. - 6.00 p.m., Mon closed<br>
                    Regular Price: 5 €<br>
                    Invalidenstrasse 43, 10115 Berlin<br>
                    Stations: Naturkundemuseum (U6), Nordbahnhof, Hauptbahnhof, Tram (M6, M8)
                    </p>

                <h4><a href="http://www.sdtb.de/">Museum of Technology</a></h4>

                    <p>Original trains, cars, ships, planes and, of course, computers.</p>

                    <p>
                    Tue-Fri: 9.00 a.m. – 5.30 p.m., Sat-Sun: 10.00 a.m. - 6.00 p.m.<br>
                    Regular price: 6 €<br>
                    Trebbiner Straße 9, 10963 Berlin-Kreuzberg<br>
                    Stations: Anhalter Bahnhof (S1, S2), Möckernbrücke (U1, U7), Gleisdreieck (U2)
                    </p>

                <h4><a href="http://www.mfk-berlin.de/">Museum of Communication</a></h4>

                    <p>The past and future of communication.</p>

                    <p>
                    Tue: 9.00 a.m. – 8.00 p.m., Wed-Fri: 9.00 a.m. - 5.00 p.m. Sat-Sun: 10.00 a.m. - 6.00 p.m., Mon closed<br>
                    Regular price: 4 €<br>
                    Leipziger Straße 16, 10117 Berlin<br>
                    Station: Stadtmitte (U2, U6)
                    </p>

                <h4><a href="http://computerspielemuseum.de/">Computer Games Museum</a></h4>

                    <p>Sixty years of the history of computer games. Over 300 exhibits from rare originals to playable classics.</p>

                    <p>
                    Wed – Mon: 10.00 a.m. - 8.00 p.m., Tue closed<br>
                    Regular price: 8 €<br>
                    Karl-Marx-Allee 93a, 10243 Berlin-Friedrichshain<br>
                    Stations: Weberwiese (U5), Ostbahnhof
                    </p>

            <h3>Art & Architecture</h3>

                <h4><a href="http://www.deutsche-kinemathek.de/en">Museum for Film and Television</a></h4>

                    <p>The permanent exhibition presents over 100 years of German film and 50 years of German TV history.</p>

                    <p>
                    Tue – Sun: 10.00 a.m. - 6.00 p.m., Mon closed<br>
                    Regular price: 7 €<br>
                    Potsdamer Str. 2, 10785 Berlin-Mitte<br>
                    Station: Potsdamer Platz (U2, S1, S2, S26)
                    </p>

                <h4><a href="http://www.jmberlin.de/main/EN/homepage-EN.php">Jewish Museum</a></h4>

                    <p>In Daniel Libeskind's impressive museum building presenting German Jewish history from the middle ages to today.</p>

                    <p>
                    Mon: 10.00 a.m. - 10.00 p.m., Tue – Sun: 10 a.m. - 6 p.m.<br>
                    Regular price: 8 €<br>
                    Lindenstr. 9-14, 10969 Berlin-Kreuzberg<br>
                    Stations: Hallesches Tor (U1), Kochstraße (U6)
                    </p>

                <h4><a href="http://www.bauhaus.de/en/">Bauhaus Archive</a></h4>

                    <p>The most complete collection on the most important school of architecture, design, and art of the 20th century.</p>

                    <p>
                    Wed - Mon 10.00 a.m. – 5.00 p.m., Tue closed<br>
                    Regular price: 7 € 7<br>
                    Klingelhöferstraße 14, 10785 Berlin<br>
                    Station: Nollendorfplatz (U1, U2, U3)
                    </p>

                <h4><a href="http://www.goart-berlin.de">GoArt!</a></h4>

                    <p>Exclusive tours through the art scene.</p>

            <h3>Sightseeing</h3>

                <h4><a href="http://www.tv-turm.de/en/">TV Tower</a></h4>

                    <p>The huge tower near the bcc. In half an hour the Restaurant "Sphere" will make one turn about its own axis.
Daily 9.00 a.m. to midnight.</p>

                    <p>
                    Regular price: 13 €, children up to 16 years 8.50<br>
                    Station: Alexanderplatz (S5, S7, S75, S9, U2, U5, U8), Tram (M4, M5, M6)
                    </p>

                <h4><a href="https://www.visitberlin.de/en/berlin-wall-memorial">Berlin Wall</a></h4>

                    <p>Open-air museum with one of the last remaining sections of the Berlin Wall.</p>

                    <p>
                    Free admission 24/7<br>
                    Stations: Bernauer Strasse (U8), Nordbahnhof (S1, S2, S25)
                    </p>

                <h4><a href="http://berliner-unterwelten.de/home.1.1.html">Berlin Underground</a></h4>

                    <p>Guided tours through tunnels, bunkers and other subterranean architecture.</p>

                    <p>
                    Regular price: 10 € – 13 €<br>
                    Attendants must be at least 7 years old<br>
                    please check the web page for details
                    </p>

                <h4><a href="http://www.abandonedberlin.com">Abandoned Berlin</a></h4>

                    <p>Places to visit on your own risk.</p>

                <h4>Guided Tours</h4>

                    <ul>
                        <li><a href="http://en.bex.de/sightseeing.html">On a bus</a></li>
                        <li><a href="http://berlinonbike.de/en/">On a bicycle</a></li>
                        <li><a href="http://citysegwaytours.com/berlin">On a Segway</a></li>
                    </ul>

                <h4><a href="http://www.visitberlin.de/en/article/berlin-welcomecard-0">Berlin WelcomeCard</a></h4>

                    <p>The Berlin WelcomeCard provides discounts between 25% and 50% at more than 160 partners.</p>

                <h4><a href="http://www.visitberlin.de/en/article/museum-pass-berlin">Museum Pass Berlin</a></h4>

                    <p>The 3-day Berlin Museum Pass gives free admission to many of the big museums . €24,00 (reduced €12)/</p>
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
        name: "venue",
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
        a {
            color: white;
            text-decoration: underline;
        }
        h2 {
            font-size: 30px;
        }
    }
    .getting-there, .things-todo, .hotel-local-info {
        padding: 100px 120px;
    }

    .hotel-local-info {
        background: $figma-grey3;
    }
</style>
