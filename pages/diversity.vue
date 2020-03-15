<template>
    <div>
        <BlockHeader :buttons="false" title="Diversity" tall>
            <template v-slot:side-content>
                <div>Diversity</div>
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
                    <li>Code of Conduct: is strictly enforced.</li>
                    <li>Community outreach: we are conducting outreach partnering with community groups to involve participants from all backgrounds.  If your group would like to partner, email us.</li>
                    <li>Diversity scholarships.</li>
                    <!--<li>Resources for CFP Mentorship: TBD -->
                </ul>

                <p>What <strong>you</strong> can do:</p>

                <ul>
                    <li>share and participate in the various ways: CFP reviewer, CFP submission, volunteer, attend</li>
                    <li>share our information with affinity groups</li>
                    <li>contact us with any accommodation needs</li>
                    <li>share suggestions with us</li>
                </ul>

                <p>What <strong>speakers</strong> can do:</p>

                <ul>
                     <li>use microphone when speaking <strong>at all times</strong></li>
                     <li>repeat questions asked by an audience member</li>
                     <li>use color-blind accessible palettes in proposals, presentations and posters (<a href="https://usabilla.com/blog/how-to-design-for-color-blindness/">How to Design for Color Blindness</a>)</li>
                </ul>

                <p>What <strong>we all</strong> can do:</p>

                <ul>
                    <li>follow our code of conduct and communicate any issues issues</li>
                    <li>use inclusive language (<a href="https://www.recurse.com/social-rules">Inclusive language</a>, <a href="https://heyguys.cc/">Hey Guys</a>)</li>
                    <li><a href="https://www.ericholscher.com/blog/2017/aug/2/pacman-rule-conferences/">PacMan Rule</a>:  include others in discussion, leave space open in circle for others to join</li>
                    <li>use reduced perfume / cologne for asthmatic attendees</li>
                </ul>

                <p>We invite you to share any thoughts and suggestions related to diversity by writing to <a href="mailto:jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a>.</p>
            
        </div>

<!--        <BlockGreyOrange :right="false" id="Child care">
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

        <div class="white-background " id="Things to do">

        </div> -->

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
