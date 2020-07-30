<!-- Possible other photos:
https://www.flickr.com/photos/oreillyconf/29272832387/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/30341563328/in/album-72157698903074851/ 
-->
<template>
    <div>
        <BlockHeader :buttons="false" title="Diversity" tall>
            <template v-slot:side-content>
            </template>
            <template v-slot:media>
                <img src="~assets/images/diversity-group.jpg?resize&size=899"/>
            </template>
            <template v-slot:content>
                <div class="header-content" id="Conference center">
                    <slot>
                    <p>
                        Our commitment to the JupyterCon community is to create an inclusive and respectful conference environment that invites participation of people from all backgrounds, including, but not limited to gender, age, ethnicity, religion, accessibility and sexual orientation.
                    </p>
                    </slot>
                </div>
            </template>
        </BlockHeader>

        <div class="diversity white-background">

                <p>An inclusive environment at JupyterCon is a common resource. It is like air and water. By using Jupyter, within its extensive ecosystem, we are all participants and contributors and have the potential to positively impact our environment, both within the conference and the greater community.</p>

                <p>D&I touches every aspect of the conference, and we have various initiatives to promote diversity and inclusivity at JupyterCon. Below are some examples:</p>

                <p>What <strong>we at JupyterCon</strong> are doing:</p>

                <ul>
                    <li>The <nuxt-link to="/codeofconduct/">Code of Conduct</nuxt-link> is strictly enforced</li>
                    <li>We are conducting outreach with community groups to involve participants from all backgrounds. If your group would like to partner with us, email the JupyterCon Diversity Committee at <a href="jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a></li>
                    <li>Diversity scholarships</li>
                    <!--<li>Resources for CFP Mentorship: TBD -->
                </ul>

                <p>What <strong>you</strong> can do:</p>

                <ul>
                    <li>Share and participate in the various ways: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzEoFUh6zb8liiWeP45PjyUtc0rlE-GPSR-UyNRnfR6WqayA/viewform">review talk/tutoria/poster/sprint proposals</a>, <nuxt-link to="/participate/">submit talk/tutoria/poster/sprint proposals</nuxt-link>, volunteer, attend</li>
                    <li>Share our information with affinity groups</li>
                    <li>Contact us with any accommodation needs</li>
                    <li>Share suggestions with us</li>
                </ul>

                <p>What <strong>speakers</strong> can do:</p>

                <ul>
                     <li>Set up space and headphones so that people can hear you <strong>at all times</strong></li>
                     <li>Repeat questions asked by an audience member in chat</li>
                     <li>Use color-blind accessible palettes in proposals, presentations and posters (<a href="https://usabilla.com/blog/how-to-design-for-color-blindness/">How to Design for Color Blindness</a>)</li>
                </ul>

                <p>What <strong>we all</strong> can do:</p>

                <ul>
                    <li>Follow our <nuxt-link to="/codeofconduct/">code of conduct</nuxt-link> and communicate any issues issues</li>
                    <li>Use inclusive language (<a href="https://www.recurse.com/social-rules">Inclusive language</a>, <a href="https://heyguys.cc/">Hey Guys</a>)</li>
                    <li><a href="https://www.ericholscher.com/blog/2017/aug/2/pacman-rule-conferences/">PacMan Rule</a>:  include others in discussion, leave space open in circle for others to join</li>
                </ul>

                <p>We invite you to share any thoughts and suggestions related to diversity by writing to <a href="mailto:jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a>.</p>
            
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
    .diversity {
        padding: 100px 120px;
    }
</style>
