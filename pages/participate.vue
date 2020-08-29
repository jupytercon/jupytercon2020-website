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
                    <p>Join us for tutorials, talks and panels, informal community discussions, code sprints, or just hang out with the Jupyter community in the conference chat rooms. Meet new people and old friends, learn cool things people are doing in the poster session, or give a 5-minute lightning talk at JupyterCon 2020!</p>
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
                        <nuxt-link class="cfp-button button hollow" to="/talk-poster-cfp/">More about Talks and Posters</nuxt-link>
                    </div>
                    <div class="cell small-12 medium-4 proposal-type">
                        <h2>Tutorials</h2>
                        <div class="proposal-caption">
                            JupyterCon tutorials are 3 hours long and are for beginner, intermediate, or experienced users.
                        </div>
                        <nuxt-link class="cfp-button button hollow" to="/tutorial-cfp/">More about Tutorials</nuxt-link>
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
                    <td><s>July 20</s> July 22</td>
                    <td>Deadline to submit applications</td>
                  </tr>
                  <tr>
                    <td>August 10</td>
                    <td>Acceptance notifications are sent</td>
                  </tr>
                  </table>
  
        </div>

        <BlockGreyOrange>
            <h1 id="tech-program-committee">Technical Program Committee</h1>
            <ul>
            <li><b>General Conference chair:</b> Lorena Barba</li>
            <li><b>General Conference vice chair:</b> Sylvain Corlay</li>
            <li><b>Technical Program chair:</b> Jason Grout</li>
            <li><b>Tutorial cochairs:</b> Gerard Gorman, Tania Allard</li>
            <li><b>Data Science Applications track co-chairs:</b> Eric Ma, Gianluca Santarossa, Sarah Guido</li>
            <li><b>Enterprise Jupyter Infrastructure track co-chairs:</b> Rollin Thomas, Sarah Gibson</li>
            <li><b>Jupyter Community: Tools and Practices track co-chairs:</b> Doug Blank, Hannah Aizenman, Tony Hirst</li>
            <li><b>Jupyter Core Technologies track co-chairs:</b> M Pacer, Matthias Bussonier</li>
            <li><b>Jupyter in Education track co-chairs:</b> Elizabeth Wickes, Jason Williams</li>
            <li><b>Jupyter in scientific research track co-chairs:</b> Hans Fangohr, Lindsey Heagy</li>
            <li><b>Lightning Talk track co-chairs:</b> Paul Ivanov, Tracy Teal</li>
            <li><b>Poster track co-chairs:</b> Damian Avila, Julia Wagemann</li>
            </ul>
        </BlockGreyOrange>

        <div class="tickets white-background">

        <h1 id="Reviewers">Community Reviewers</h1>
            <p>
            We would like to thank all of the community reviewers who reviewed talk, poster, and tutorial proposals. Listed below are the reviewers who completed all of their requested reviews by the deadline. Thank you!
            </p>

<div class="reviewerlist">
<div class="reviewer">Adrien Friggeri</div>
<div class="reviewer">Ahmed Gad</div>
<div class="reviewer">Akkapantula Kalyan</div>
<div class="reviewer">Aleksey Bilogur</div>
<div class="reviewer">Alex Tennant</div>
<div class="reviewer">Alexander Naylor</div>
<div class="reviewer">Amilcar Blake</div>
<div class="reviewer">Andrea Maldonado</div>
<div class="reviewer">Andreas Bergen</div>
<div class="reviewer">Andreas Schreiber</div>
<div class="reviewer">Angelica Landazabal</div>
<div class="reviewer">Anisha Gunjal</div>
<div class="reviewer">Antonio Cachuan</div>
<div class="reviewer">Armin Kekic</div>
<div class="reviewer">Arnim Bleier</div>
<div class="reviewer">Ashwin Samudre</div>
<div class="reviewer">Awaiz Mukadam</div>
<div class="reviewer">Baden Hughes</div>
<div class="reviewer">BaoGiang HoangVu</div>
<div class="reviewer">Benjamin Winjum</div>
<div class="reviewer">Blaine Mooers</div>
<div class="reviewer">Brian Gue</div>
<div class="reviewer">Byron Chu</div>
<div class="reviewer">Carl Osipov</div>
<div class="reviewer">Cécile Hardebolle</div>
<div class="reviewer">Chandan Bose</div>
<div class="reviewer">Cheuk Ho</div>
<div class="reviewer">Corrie Bartelheimer</div>
<div class="reviewer">Daniel Allan</div>
<div class="reviewer">Darst Richard</div>
<div class="reviewer">David Koop</div>
<div class="reviewer">David Mauricio Delgado Ruiz</div>
<div class="reviewer">Dhavide Aruliah</div>
<div class="reviewer">Doug Blank</div>
<div class="reviewer">Duane Storti</div>
<div class="reviewer">Eduardo Blancas</div>
<div class="reviewer">Emmanuel Jakobowicz</div>
<div class="reviewer">Eric Tang</div>
<div class="reviewer">Fatma Tarlaci</div>
<div class="reviewer">Felipe Schuch</div>
<div class="reviewer">Gabriela de Queiroz</div>
<div class="reviewer">Gajendra Deshpande</div>
<div class="reviewer">Gaurav Kumar Jain</div>
<div class="reviewer">Gautam Kishore Shahi</div>
<div class="reviewer">George Bisbas</div>
<div class="reviewer">Hannah Bohle</div>
<div class="reviewer">Hans Fangohr</div>
<div class="reviewer">Haruna Abdu</div>
<div class="reviewer">Hasan Celik</div>
<div class="reviewer">Ignacio Vergara</div>
<div class="reviewer">Immanuel Bayer</div>
<div class="reviewer">Ioannis K Breier</div>
<div class="reviewer">Jacob Lee</div>
<div class="reviewer">Jairo Jose Niño Perez</div>
<div class="reviewer">Jana Lasser</div>
<div class="reviewer">Jeff Sternberg</div>
<div class="reviewer">John Lam</div>
<div class="reviewer">John Park</div>
<div class="reviewer">Joseph Lucas</div>
<div class="reviewer">Juan Cruz-Benito</div>
<div class="reviewer">Krishna Muriki</div>
<div class="reviewer">Krüger Frank</div>
<div class="reviewer">Lauren Oldja</div>
<div class="reviewer">Lindsey Heagy</div>
<div class="reviewer">Luca Soato</div>
<div class="reviewer">Lucas Durand</div>
<div class="reviewer">Lyudmila Vaseva</div>
<div class="reviewer">Magdalena Wiercioch</div>
<div class="reviewer">Magdalena Zielinska</div>
<div class="reviewer">Manan Dey</div>
<div class="reviewer">Manu Ram Pandit</div>
<div class="reviewer">Marcin Abram</div>
<div class="reviewer">Maria Khalusova</div>
<div class="reviewer">Marianne Corvellec</div>
<div class="reviewer">Marielle Dado</div>
<div class="reviewer">Mario D'Amore</div>
<div class="reviewer">Markus Erwee</div>
<div class="reviewer">Maryam Jahanshahi</div>
<div class="reviewer">Matthias Busch</div>
<div class="reviewer">Matthias Bussonnier</div>
<div class="reviewer">Cristián Maureira-Fredes</div>
<div class="reviewer">Mickael Delattre</div>
<div class="reviewer">Miguel Galeano</div>
<div class="reviewer">Min Ragan-Kelley</div>
<div class="reviewer">Mojtaba Barzegari</div>
<div class="reviewer">Mor Sondak</div>
<div class="reviewer">Nicolás Guarín-Zapata</div>
<div class="reviewer">Noa Malem-Shinitski</div>
<div class="reviewer">Palese Emanuele</div>
<div class="reviewer">Paul Nagy</div>
<div class="reviewer">Philipp Rudiger</div>
<div class="reviewer">Pramit Choudhary</div>
<div class="reviewer">Priya Joseph</div>
<div class="reviewer">Raveen Beemsingh</div>
<div class="reviewer">Richard Meinsen</div>
<div class="reviewer">Rollin Thomas</div>
<div class="reviewer">Romit Mehta</div>
<div class="reviewer">Ryan Cooper</div>
<div class="reviewer">Sebastien Fabbro</div>
<div class="reviewer">Sergii Khomenko</div>
<div class="reviewer">Shagun Sodhani</div>
<div class="reviewer">Shanabrook Saul</div>
<div class="reviewer">Sheeba Samuel</div>
<div class="reviewer">Shinichi Okada</div>
<div class="reviewer">Shivay Lamba</div>
<div class="reviewer">Shreyas Cholia</div>
<div class="reviewer">Shruti Jadon</div>
<div class="reviewer">Simone Perazzoli</div>
<div class="reviewer">Stephen Pascoe</div>
<div class="reviewer">Stuart Campbell</div>
<div class="reviewer">Suhas Guruprasad</div>
<div class="reviewer">Sukanya Mandal</div>
<div class="reviewer">Sun Kerwin</div>
<div class="reviewer">Susanne van Wagensveld</div>
<div class="reviewer">Sylvain Corlay</div>
<div class="reviewer">Tania Allard</div>
<div class="reviewer">Tiffany Timbers</div>
<div class="reviewer">Tim Head</div>
<div class="reviewer">Vidar Fauske</div>
<div class="reviewer">Vijay Sharma</div>
<div class="reviewer">Vittorio Iacovella</div>
<div class="reviewer">Watters Aaron</div>
<div class="reviewer">Yasaswi Sri Chandra Gandhi Kilaru</div>
</div>
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

    .reviewerlist {
        display: flex;
        flex-wrap: wrap;
    }

    .reviewer {
        min-width: 20em;
    }
</style>
