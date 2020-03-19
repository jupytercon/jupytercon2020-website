<template>
    <div class="committee-panel">
        <h2>Committee</h2>
        <div class="grid-x">
            <div class="cell small-12 large-3" v-for="member in members">
                <div class="member">
                    <img :src="member.image"/>
                    <h5>{{ member.name }}</h5>
                    <p class="role">{{ member.role }}</p>
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
                    name: "Lorena Barba",
                    role: "General Chair",
                    bio: "Lorena is a computational scientist and professor of mechanical and aerospace engineering at the George Washington University. She is a long-time advocate of open-source software for research, and has adopted and promoted Jupyter for teaching since the project's beginnings. For the past five years, Lorena has been a member of the NumFOCUS Board of Director, and is now co-chairperson.",
                    image: require("~/assets/images/commitee/lorena.jpg?resize&size=508")
                },
                {
                    name: "Sylvain Corlay",
                    role: "Vice Chair",
                    bio: "Sylvain Corlay is the founder and CEO of QuantStack, an open-source scientific software development team in Paris and Berlin. As an open source developer, Sylvain contributes to Project Jupyter in the areas of interactive widgets, language kernels, and the Voilà dashboarding system.",
                    image: require("~/assets/images/commitee/sylvain.jpg?resize&size=508")
                },
                {
                    name: "Jason Grout",
                    role: "Technical Program Chair",
                    bio: "Jason Grout is a Jupyter community leader and developer working at Bloomberg in San Francisco. Jason works primarily on JupyterLab and the interactive widget system and                     associated projects. Jason has also contributed to the open source Sage mathematical software system for many years. Previously, Jason was an assistant professor of mathematics at Drake University in Des Moines, Iowa.",
                    image: require("~/assets/images/commitee/jason.jpg?resize&size=508")
                },
                {
                    name: "Reshama Shaikh",
                    role: "Diversity Chair",
                    bio: "Independent data scientist, based in New York City, NY, USA. Organizer of NYC PyLadies and NYC URGs (underrepresented groups) and Allies in Data Science. Served on the NumFOCUS Diversity and Inclusion in Scientific Computing Committee 2017 - 2019.",
                    image: require("~/assets/images/commitee/reshama.jpg?resize&size=508")
                },
                {
                    name: "Paco Nathan",
                    role: "Sponsorships Chair",
                    bio: "Known as a \"player-coach\", with core expertise in data science, natural language processing, machine learning, and cloud computing. 35+ years tech industry experience, ranging from Bell Labs to early-stage start-ups. Formerly Director of Community Evangelism at Databricks and Apache Spark. Cited in 2015 as one of the Top 30 People in Big Data and Analytics by Innovation Enterprise.", 
                    image: require("~/assets/images/commitee/paco.jpg?resize&size=508")
                },
                {
                    name: "Rosie Pongracz",
                    role: "Finance Chair",
                    bio: "Engineer by training, full stack marketer by practice. Launched over 50 products and companies. Currently lead Technical Go-to-Market for Data Science and AI at IBM, formerly Pivotal, Salesforce, VMWare (Thinstall), CollabNet. Google Android Challenge winner. Underwater photographer, pilot, citizen scientist. Carnegie Mellon BSEE.",
                    image: require("~/assets/images/commitee/rosie.jpg?resize&size=508")
                },
                {
                    name: "Joshua Patterson",
                    role: "Exhibits Chair",
                    bio: "Joshua Patterson is Director of Engineering for RAPIDS at NVIDIA. Previously, he spent four years as a Data Science Principal at Accenture Technology Labs and a year in government as a White House Presidential Innovation Fellow.",
                    image: require("~/assets/images/commitee/joshua.jpg?resize&size=508")
                },
                {
                    name: "Tania Allard",
                    role: "Tutorials Co-Chair",
                    bio: "Developer advocate at Microsoft with vast experience in academic research and industrial environments. Passionate about mentoring, open source, and its community. Contributor, maintainer, and developer of a number of open source projects and the founder of Pyladies NorthWest UK.",
                    image: require("~/assets/images/commitee/tania.jpg?resize&size=508")
                },
                {
                    name: "Gerard Gorman",
                    role: "Tutorials Co-Chair",
                    bio: "Reader (Associate Professor) in Computational Science and Director of the Applied Computational Science and Engineering MSc at Imperial College London. Director the Devito open source project, a domain-specific language for finite difference solutions of inverse problems. Gerard is also Research engagement consultant with Microsoft.",
                    image: require("~/assets/images/commitee/gerard.jpg?resize&size=508")
                },
                {
                    name: "Safia Abdalla",
                    role: "Sprints Co-Chair",
                    bio: "Safia is a maintainer in the nteract open source organization and a software engineer. She is passionate about bringing people together to build great things.",
                    image: require("~/assets/images/commitee/safia.jpg?resize&size=508")
                },
                {
                    name: "Kirstie Whitaker",
                    role: "Sprints Co-Chair",
                    bio: "Research fellow at the Alan Turing Institute in London, UK and co-chair for the JupyterCon 2020 Sprint Day (14th of August 2020). Working on making data science “open for all” by centering inclusive and ethical decision making in software development and community management practices.",
                    image: require("~/assets/images/commitee/kirstie.jpg?resize&size=508")
                },
                {
                    name: "Jeremy Tuloup",
                    role: "Local Organizing Committee Chair",
                    bio: "Scientific Software Developer at QuantStack. Contributor to JupyterLab, the Debugger extension, Voilà and various other projects within the Jupyter ecosystem.",
                    image: require("~/assets/images/commitee/jeremy.jpg?resize&size=508")
                },
                {
                    name: "Wolf Vollprecht",
                    role: "Local Sponsorships Liaison",
                    bio: "Wolf is a robotics engineer from Germany, working on Open Source projects QuantStack. He lives in Berlin, works on jupyter-ros and other jupyterlab extensions and hopes to help organize a really nice JupyterCon 2020!",
                    image: require("~/assets/images/commitee/wolf.jpg?resize&size=508")
                },
                {
                    name: "Laura Norén",
                    role: "Eco-friendly Event Chair",
                    bio: "Laura Nor&eacuten is VP of Privacy and Trust at Obsidian Security, a cybersecurity startup based in Newport Beach where she runs privacy operations. Norén is a frequent speaker on data ethics, privacy legislation, and the social impact of data-driven technologies. She continues to publish in academic journals as well as popular press locations. She holds undergraduate degrees from MIT and a PhD from NYU where she completed a Moore-Sloan postdoc at the Center for Data Science.",
                    image: require("~/assets/images/commitee/laura.jpg?resize&size=508")
                },
                {
                    name: "Amanda Casari",
                    role: "Speaker Management",
                    bio: "Engineering Manager at Google where she leads research and engineering to better understand open source systems.<br>Endlessly fascinated by the difference between the systems we aim to create and the ones that emerge.",
                    image: require("~/assets/images/commitee/amanda.png?resize&size=508")
                },
                {
                    name: "Jim Weiss",
                    role: "Logistics Chair",
                    bio: "Jim Weiss is the Events Manager for NumFOCUS, and Logistics Chair for JupyterCon 2020. Jim joined NumFOCUS in 2017, and has been supporting the open source scientific programing community through organizing programs like PyData. Prior to joining NumFOCUS, Jim worked in Washington, D.C., coordinating congressional hearings for the U.S. House of Representatives and managing events for the U.S. Air Force.",
                    image: require("~/assets/images/commitee/jim.jpg?resize&size=508")
                },
                {
                    name: "Dinu Gherman",
                    role: "Local Organizing Team",
                    bio: "Dinu Gherman works at HERE Technologies, has translated early Python books by O’Reilly and others into German, worked some time for ReportLab, and contributes to and advocates Open Source, Python and Jupyter in the local Python community he founded in Berlin and at work.",
                    image: require("~/assets/images/commitee/dinu.jpg?resize&size=508")
                },
                {
                    name: "Cristián Maureira-Fredes",
                    role: "Local Organizing Team",
                    bio: "Open Source enthusiast currently based in Berlin. Qt for Python maintainer, R&D Manager at The Qt Company, and former Astrophysicist at the Max-Planck-Institut für Gravitationsphysik.",
                    image: require("~/assets/images/commitee/cristian.jpg?resize&size=508")
                },
                {
                    name: "Carol Willing",
                    role: "Special Advisor to the General Chair",
                    bio: "Carol Naslund Willing serves on Project Jupyter’s Steering Council and works as a Core Developer on JupyterHub and mybinder.org. She serves as a co-editor of The Journal of Open Source Education (JOSE) and co-authored an open source book, Teaching and Learning with Jupyter.<br> She is a member of Python’s Steering Council and a core developer of CPython.",
                    image: require("~/assets/images/commitee/carol.jpg?resize&size=508")
                    
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

    .role
        font-family: $figma-font-gosha
        color: $figma-grey

</style>
