<template>
    <div>
        <BlockHeader :buttons="false" title="About">
            <template v-slot:media>
                <img src="~assets/images/speed-network.jpg"/>
            </template>
        </BlockHeader>
        <BlockAbout title="What is JupyterCon?" :img="require('~/assets/images/explain.jpg')">
            <p>
                JupyterCon brings together data scientists, business analysts, researchers, educators, developers, and core Project contributors and tool creators for in-depth training, insightful keynotes, networking events, and practical talks exploring the Project Jupyter platform. JupyterCon focuses on real-world practices and how to successfully implement interactive computation in your workflow and projects. In just four days you’ll discover the best practices for collaborative and reproducible data science; new use cases, and the expertise you need to transform your workflow with Jupyter.
            </p>

        </BlockAbout>
        <BlockGreyOrange>
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
        <BlockAbout title="Experience" :hide_image=true :has_button=false>
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
        <Committee>
        </Committee>
        <BlockGreyOrange id="conduct-diversity-eco" :right="false">
            <div class="grid-x grid-padding-x">
                <div class="cell small-12 medium-4">
                    <h2 class="ticket-number">Conduct</h2>
                    <p>Code of conduct</p>
                    <nuxt-link class="button hollow" to="/codeofconduct/">Code of conduct</nuxt-link>
                </div>
                <div class="cell small-12 medium-4">
                    <h2 class="ticket-number">Diversity</h2>
                    <p>TBD</p>
                    <a class="button hollow">Diversity</a>
                </div>
                <div class="cell small-12 medium-4">
                    <h2 class="ticket-number">Eco friendly</h2>
                    <p>TDB</p>
                    <nuxt-link class="button hollow" to="/sustainability/">Sustainability</nuxt-link>
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
</style>
