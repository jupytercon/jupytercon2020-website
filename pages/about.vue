<template>
    <div>
        <BlockHeader :buttons="false" title="About">
            <template v-slot:media>
                <img src="~assets/images/speed-network.jpg"/>
            </template>
        </BlockHeader>
        <BlockAbout title="What is JupyterCon?" :img="require('~/assets/images/explain.jpg')" id="What is it?">
            <p>
                JupyterCon brings together data scientists, business analysts, researchers, educators, developers, core Project contributors, and tool creators for in-depth training, insightful keynotes, networking events, and practical talks exploring the Project Jupyter platform. JupyterCon focuses on real-world practices and how to successfully implement interactive computation in your workflow and projects. In just four days you’ll discover the best practices for collaborative and reproducible data science; new use cases, and the expertise you need to transform your workflow with Jupyter.
            </p>

        </BlockAbout>
        <BlockGreyOrange id="Past Events">
            <div style="margin-top: -100px">
            <table style="margin-bottom: 10px;">
                <tr>
                    <td width="50%">
                        <h2>Past events</h2>
                    </td>
                    <td style="text-align: right">
                        <h5>A selection of talks<br/>from our previous editions</h5>
                    </td>
                </tr>
            </table>
            <iframe
                width="770px"
                height="500px" 
                src="https://www.youtube.com/embed/videoseries?list=PL055Epbe6d5b572IRmYAHkUgcq3y6K3Ae"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            </div>
        </BlockGreyOrange>
        <BlockAbout title="Experience" :hide_image="true" :has_button="false" id="Experience">
            <p>JupyterCon will educate and motivate by offering:</p>
            <ul>
                <li>Sessions that apply to the full range of Jupyter's languages and platforms</li>
                <li>Practical tutorials that go deep into technical skills, new features and applications, and best practices</li>
                <li>Visionary keynote presentations</li>
                <li>Immersive, hands-on training courses</li>
                <li>Unparalleled access to core Project contributors and tool creators</li>
                <li>A Sponsor Pavilion packed with related projects and products</li>
                <li>Community focused events, such as sprints, user testing, and birds-of-a-feather gatherings</li>
                <li>An evening Poster session featuring dozens of innovative Jupyter projects</li>
                <li>A vibrant "hallway track" where hundreds of programmers, data scientists, analysts, researchers, vendors, and users of all levels discuss important issues</li>
                <li>Fun evening events and plenty of informal networking</li>
            </ul>
        </BlockAbout>
        <Committee id="Organizing Committee">
        </Committee>
        <BlockGreyOrange id="conduct-diversity-eco" :right="false">
            <div class="grid-x grid-padding-x">
                <div class="coc cell small-12 medium-4">
                    <h2 class="ticket-number">Conduct</h2>
                    <div class="coc-caption">
                        Project Jupyter is an engaged and respectful community made up of people from all over the world.  We are committed to fostering a productive, professional and inclusive environment for everyone. All community members are expected to show respect and courtesy to other attendees throughout the conference, all conference events and online forums.  Our code of conduct is strictly enforced.
                    </div>
                    <nuxt-link class="coc-button button hollow" to="/codeofconduct/">Code of conduct</nuxt-link>
                </div>
                <div class="coc cell small-12 medium-4">
                    <h2 class="ticket-number">Diversity</h2>
                    <div class="coc-caption">
                        Our commitment to the JupyterCon community is to create an inclusive and respectful conference environment that invites participation of people from all backgrounds, including, but not limited to gender, age, ethnicity, religion, accessibility and sexual orientation. Any inquiries can be sent to <a href="mailto:jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a>.
                    </div>
                    <nuxt-link class="coc-button button hollow" to="/diversity/">Diversity</nuxt-link>
                </div>
                <div class="coc cell small-12 medium-4">
                    <h2 class="ticket-number">Eco friendly</h2>
                    <div class="coc-caption">
                        JupyterCon 2020 is working towards having a limited impact on the environment through careful consumption of energy and resources. This includes, among others, electronically circulating meeting materials (online file sharing), not producing unnecessary conference material and products, choosing environmentally-friendly and socially-friendly products, as well as providing healthy food and hosting meetings and social events in central locations.
                    </div>
                    <nuxt-link class="coc-button button hollow" to="/sustainability/">Sustainability</nuxt-link>
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
    import Committee from "../components/Committee";

    export default {
        name: "about",
        components: {DesktopFooter, BlockHeader, BlockAbout, BlockGreyOrange, Committee},
    }
</script>

<style lang="scss" scoped>
    @import 'assets/scss/settings';
    .comittee {
        height: 800px;
        padding: 100px 120px;
        background-color: white;
        h1 {
            color: $figma-orange;
        }
    }
    .coc {
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
    }
    .coc-caption {
        margin-bottom: 16px; 
    }
    .coc-button {
        margin-top: auto;
    }
</style>
