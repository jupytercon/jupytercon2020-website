<template>
    <div class="committee-panel">
        <h2>Committee</h2>
        <div class="grid-x">
            <div class="cell small-12 large-3" v-for="member in members">
                <div class="member">
                    <img :src="member.image"/>
                    <h5>{{ member.name }}</h5>
                    <p v-html="member.bio"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Committee",
        data() {
            return {

                members: [
                {
                    name: "Jeremy Tuloup",
                    bio: "Scientific Software Developer at QuantStack. Contributor to JupyterLab, the Debugger extension, Voilà and various other projects within the Jupyter ecosystem.",
                    image: require("~/assets/images/commitee/jeremy.jpg")
                },
                {
                    name: "Jim Weiss",
                    bio: "Jim Weiss is the Events Manager for NumFOCUS, and Logistics Chair for JupyterCon 2020. Jim joined NumFOCUS in 2017, and has been supporting the open source scientific programing community through organizing programs like PyData. Prior to joining NumFOCUS, Jim worked in Washington, D.C., coordinating congressional hearings for the U.S. House of Representatives and managing events for the U.S. Air Force.",
                    image: require("~/assets/images/commitee/jim.jpg")
                },
                {
                    name: "Kirstie Whitaker",
                    bio: "Research fellow at the Alan Turing Institute in London, UK and co-chair for the JupyterCon 2020 Sprint Day (14th of August 2020). Working on making data science “open for all” by centering inclusive and ethical decision making in software development and community management practices.",
                    image: require("~/assets/images/commitee/kirstie.jpg")
                },
                {
                    name: "Paco Nathan",
                    bio: "Known as a \"player-coach\", with core expertise in data science, natural language processing, machine learning, and cloud computing. 35+ years tech industry experience, ranging from Bell Labs to early-stage start-ups. Co-chair of Rev. Lead committer on PyTextRank, richcontext.scholapi. Advisor for NYU Coleridge Initiative, IBM Data Science Community, Amplify Partners, Recognai, Primer. Formerly Director of Community Evangelism at Databricks and Apache Spark. Cited in 2015 as one of the Top 30 People in Big Data and Analytics by Innovation Enterprise.", 
                    image: require("~/assets/images/commitee/paco.jpg")
                },
                {
                    name: "Reshama Shaikh",
                    bio: "Independent data scientist, based in New York City, NY, USA. Organizer of NYC PyLadies and NYC URGs (underrepresented groups) and Allies in Data Science. Served on the NumFOCUS Diversity and Inclusion in Scientific Computing Committee 2017 - 2019.",
                    image: require("~/assets/images/commitee/reshama.jpg")
                },
                {
                    name: "Wolf Vollprecht",
                    bio: "Wolf is a robotics engineer from Germany, working on Open Source projects QuantStack. He lives in Berlin, works on jupyter-ros and other jupyterlab extensions and hopes to help organize a really nice JupyterCon 2020!",
                    image: require("~/assets/images/commitee/wolf.jpg")
                },
                {
                    name: "Tania Allard",
                    bio: "Research engineer at Hello Soda with vast experience in academic research and industrial environments. The main areas of expertise are within data-intensive applications, scientific computing, and machine learning with the focus on the improvement of processes, reproducibility and transparency in research, data science and artificial intelligence. Trained hundreds of people on scientific computing reproducible workflows and ML models testing, monitoring and scaling and delivered talks on the topic worldwide. Passionate about mentoring, open source, and its community and is involved in a number of initiatives aimed to build more diverse and inclusive communities. Contributor, maintainer, and developer of a number of open source projects and the founder of Pyladies NorthWest UK.",
                    image: require("~/assets/images/commitee/tania.jpg")
                },
                {
                    name: "Sylvain Corlay",
                    bio: "Sylvain Corlay is the founder and CEO of QuantStack, an open-source scientific software development team in Paris and Berlin. As an open source developer, Sylvain contributes to Project Jupyter in the areas of interactive widgets, language kernels, and the Voilà dashboarding system. He was honored with the rest of the Jupyter Steering Council with the 2017 ACM Software System Award for Jupyter.<br/>Besides Jupyter, Sylvain contributes to a number of scientific computing open-source projects such as xtensor, bqplot, and ipyleaflet.",
                    image: require("~/assets/images/commitee/sylvain.jpg")
                },
                {
                    name: "Jason Grout",
                    bio: "Jason Grout is a Jupyter community leader and developer working at Bloomberg in San Francisco. Jason works primarily on JupyterLab and the interactive widget system and                     associated projects. Jason has also contributed to the open source Sage mathematical software system for many years. Previously, Jason was an assistant professor of mathematics at Drake University in Des Moines, Iowa.",
                    image: require("~/assets/images/commitee/jason.jpg")
                },
                {
                    name: "Rosie Pongracz",
                    bio: "Engineer by training, full stack marketer by practice. Launched over 50 products and companies. Currently lead Technical Go-to-Market for Data Science and AI at IBM, formerly Pivotal, Salesforce, VMWare (Thinstall), CollabNet. Google Android Challenge winner. Underwater photographer, pilot, citizen scientist. Carnegie Mellon BSEE.",
                    image: require("~/assets/images/commitee/rosie.jpg")
                }]
            }
        }
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .committee-panel
        margin: 68px 112px
        background: #FFF
        .cell
            padding: 10px
    h2
        color: $figma-orange

    .member
        padding-left: 10px

    img
        height: 176px
        width: 254px
        object-fit: cover
        margin: 20px 0px

</style>