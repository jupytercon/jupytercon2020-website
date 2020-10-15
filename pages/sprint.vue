<template>
    <div>
            <BlockHeader :buttons="false" title="Sprint" tall>
            <template v-slot:media>
                <img src="~assets/images/sprint.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                <h2>Join the Community!</h2>
                    <slot>The JupyterCon 2020 Sprint Event is a 24-hour digital event following the conference. Attendees will have the opportunity to meet online active contributors and maintainers of their favorite open source projects, exchange ideas, collaborate in real time, and create lasting connections.
                    <br/><br/>
                    <h4><a href="#sprint-projects" style="border: 1px solid white;padding: 5px;background-color: #ececec;">Projects</a>
                        <a href="#sprint-schedule" style="border: 1px solid white;padding: 5px;background-color: #ececec;">Schedule</a></h4>
                    </slot>
                </div>

            </template>
        </BlockHeader>

        <div class="main maincontent grey-background">
            <h3>Why should I join a sprint?</h3>
            <p>The best part of tech conferences is the people - and sprints are all about people. During the Sprint Event, you will have an opportunity to meet online, learn, and collaborate with peers from the Jupyter community. Not only will you be able to leave with a contributor badge, but you’ll also make new friends and contacts in the industry, public services, and academia.</p>

            <h3>How can I join the Sprint Event?</h3>
            <p>The sign-ups for sprint participants is still open in our <a href="https://www.eventbrite.com/e/jupytercon-2020-tickets-109183767588">tickets store</a> and they are <b>Free!</b>. We will email the intructions to join the platforms, and the schedule for the event a couple of days before the sprint day.</p>

            <h3>What is the venue for the sprints?</h3>
            <p>Sprints will be online, with the aim of connecting people from all over the world, so you will be able to join from anywhere!</p>
            <h1 id="sprint-projects">Sprint Projects</h1>
            <div class="grid-container projects">
                <div class="grid-y">
                    <div class="cell project-row" v-for="project in sprint_projects">
                        <div class="grid-x project-row-container">
                            <div class="cell small-4">
                                <a :href="project.website" target="_blank">
                                    <img class="project-image" :src="project.image">
                                </a>
                            </div>
                            <div class="cell auto project-text-plain">
                                <a :href="project.website" target="_blank">
                                    <h2>{{ project.name }}</h2>
                                </a>
                                <p><b>Timezone</b>: {{ project.timezone }}</p>
                                <p>
                                    <a v-if="project.githubLink" :href="project.githubLink" target="_blank">
                                        <img class="icon-github" src="@/assets/images/icon-github.png">
                                        {{ project.githubLinkText }}
                                    </a>
                                    <br/>
                                    <a v-if="project.docLink" :href="project.docLink" target="_blank">
                                        <img class="icon-doc" src="@/assets/images/icon-doc.png">
                                        {{ project.docLinkText }}
                                    </a>
                                </p>
                                <p>
                                    {{ project.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 id="sprint-schedule">Sprint Schedule</h1>
            <div class="grid-container schedule">
            <p>
            Due to the online aspect of our sprint session, we are having a <i>kick-off</i> and <i>wrap-up</i> call for two different time zones groups:
            </p>
            <ul>
                <li><b>Block A:</b> European/African time zones.</li>
                <li><b>Block B:</b> Americas time zones.</li>
            </ul>

            <p>
            What about the transmissions?
            </p>
            <ul>
                <li><b>Kick-off:</b> General introduction to our sprint day, and Projects will be doing short presentation for all the participants.</li>
                <li><b>Wrap-up:</b> What have we done during the day? Let's share our experiences!</li>
            </ul>
            </p>
            <p>
            Everyone is encouraged to participate in the full-day event! the transmissions are only to enable more people to hear about
            the projects and the progress during the day.

            Instructions to join our Mattermost server and to watch the transmission on YouTube will be send by email!
            </p>
            <table>
                <tr>
                    <td><b>Time UTC</b> <a style="color: gray;" href="https://time.is/UTC">check it now</a>!</td>
                    <td><b>Activity</b></td>
                </tr>
                <tr>
                    <td style="text-align: center;">07:00h</td>
                    <td>Kick-off (Block A)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">15:00h</td>
                    <td>Wrap-up (Block A)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">16:00h</td>
                    <td>Kick-off (Block B)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">23:59h</td>
                    <td>Wrap-up (Block B)</td>
                </tr>
            </table>
            </div>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "sprint",
        components: {DesktopFooter, BlockHeader},
        data() {
            return {
sprint_projects: [
                    {
                        githubLink: "https://github.com/callysto/hackathon",
                        githubLinkText: "github.com/callysto/hackathon",
                        name: "Data Literacy for the Common Good",
                        timezone: "Americas UTC-7",
                        description: "Callysto, a federally-funded program, supports Grades 5-12 students and teachers in Canada with building digital workforce skills through incorporating data science (coding, data analysis, and visualization) into everyday classroom lessons. Since the program began in 2018, Callysto has supported over 39,000 students and 1,900 teachers across Canada. Callysto’s goal is to help teachers and students across Canada become confident technology explorers, innovators, and problem solvers.",
                        image: require("~/assets/images/sprints/logo-callysto.png"),
                        website: "https://callysto.ca/",
                    },
                    {
                        githubLink: "https://github.com/elyra-ai/elyra",
                        githubLinkText: "github.com/elyra-ai/elyra",
                        name: "Elyra",
                        timezone: "Americas UTC-7, UTC-4",
                        description: "Elyra is a set of AI centric extensions to JupyterLab. It aims to help data scientists, machine learning engineers and AI developer’s through the model development life cycle complexities.",
                        image: require("~/assets/images/sprints/logo-elyra.png"),
                        website: "https://github.com/elyra-ai/elyra",
                    },
                    {
                        githubLink: "https://github.com/jupyter-widgets/ipyleaflet",
                        githubLinkText: "github.com/jupyter-widgets/ipyleaflet",
                        name: "ipyleaflet",
                        timezone: "Europe UTC+2",
                        description: "A Jupyter / Leaflet bridge enabling interactive maps in the Jupyter notebook. Currently, ipyleaflet is a Jupyter subproject which aims at providing interactive tools for GIS in the Jupyter Notebook. Since ipyleaflet is an interactive widgets library, it is based on ipywidgets. This means that everything in ipyleaflet (e.g. the Map, TileLayers, Markers…) is interactive: you can dynamically update attributes from Python or from the Notebook interface. ipywidgets is powered by traitlets, this brings an observer pattern implementation which allows you to react on widget attribute changes.",
                        image: require("~/assets/images/sprints/empty.png"),
                        website: "https://ipyleaflet.readthedocs.io",
                    },
                    {
                        githubLink: "https://github.com/quantumblacklabs/kedro",
                        githubLinkText: "github.com/quantumblacklabs/kedro",
                        name: "Kedro",
                        timezone: "Europe UTC+1",
                        description: "Kedro is an opinionated Python framework that makes it easy to build robust and scalable data pipelines by providing uniform project templates, data abstraction, configuration and pipeline assembly. It is with empathy that we want to tweak your workflow so your team can work better.",
                        image: require("~/assets/images/sprints/logo-kedro.png"),
                        website: "https://kedro.readthedocs.io/en/stable/",
                    },
                    {
                        githubLink: "https://github.com/python/python-docs-es",
                        githubLinkText: "github.com/python/python-docs-es",
                        name: "Python Docs ES",
                        timezone: "Europe UTC+2",
                        description: "The python-docs-es initiative started early 2020 and it was motivated by the translation initiative by south american communities. After being accepted as the official Spanish documentation, spanish speaking people is now able to select 'Spanish' on the official Python documentation page. After join python-docs-es, you will have the opportunity to translate, review translations, learn about different aspects of Python, but the most important thing is to be an official contributor to Python! Join us to learn together and enable Python to Spanish speaking people.",
                        image: require("~/assets/images/sprints/logo-python_docs_es.png"),
                        website: "https://python-docs-es.readthedocs.io/es/3.8/",
                    },
                    {
                        githubLink: "https://github.com/charlesaverill/satyrn",
                        githubLinkText: "github.com/charlesaverill/satyrn",
                        name: "Satyrn",
                        timezone: "Americas UTC-5",
                        description: "Satyrn is an alternative to Jupyter notebooks that supports branching code cells and network collaboration. Code in Satyrn is executed in 'Cells', which are small blocks of code that should perform a few small functions, but share variables, functions, imports, etc. Splitting code into these Cells allows users to run lots of 'setup' cells and then play around with a cell that depends on the setup to function. This prevents users from having to run lengthy code over and over again. A similar application is Jupyter's Notebook.",
                        image: require("~/assets/images/sprints/logo-satyrn.png"),
                        website: "https://github.com/charlesaverill/satyrn",
                    },
                    {
                        githubLink: "https://github.com/alan-turing-institute/the-turing-way",
                        githubLinkText: "github.com/alan-turing-institute/the-turing-way",
                        docLink : "https://hackmd.io/@turingway/JC2020-sprint",
                        docLinkText: "hackmd.io/@turingway/JC2020-sprint",
                        name: "The Turing Way",
                        timezone: "Europe UTC+1",
                        description: "The Turing Way is an open source community-driven guide to reproducible, ethical, inclusive and collaborative data science. Our goal is to provide all the information that data scientists in academia, industry, government and in the third sector need at the start of their projects to ensure that they are easy to reproduce and reuse at the end.",
                        image: require("~/assets/images/sprints/logo-the_turing_way.png"),
                        website: "https://the-turing-way.netlify.app/welcome",
                    },
                    {
                        githubLink: "https://github.com/executablebooks/thebe",
                        githubLinkText: "github.com/executablebooks/thebe",
                        name: "Thebe",
                        timezone: "Europe UTC+2, Americas UTC-7",
                        description: "Have a static HTML page with code snippets? Your readers can edit and execute them right there. All it takes is: (1) A brief header in the HTML page, (2) The Thebe javascript library (which can be fetched from the web), and (3) A computing backend (typically binder). Thebe is a based on the Jupyter technology, and thus supports a wealth of programming languages. The original implementation, called Thebe was a fork of the Jupyter code base.",
                        image: require("~/assets/images/sprints/empty.png"),
                        website: "https://github.com/executablebooks/thebe",
                    },
                    {
                        githubLink: "https://github.com/terminusdb/terminusdb-client-python",
                        githubLinkText: "github.com/terminusdb/terminusdb-client-python",
                        name: "TerminusDB",
                        timezone: "Europe UTC+1",
                        description: "TerminusDB is an open-source full-featured in-memory graph database management system that stores data like git. The Python client looks to improve the interactive knowledge graph visualization in Jupyter notebook. Make user experience better.",
                        image: require("~/assets/images/sprints/logo-terminusdb.png"),
                        website: "https://terminusdb.com/",
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
    .header-content {
        margin: 100px 120px;
        color: white;
        h2 {
            font-size: 30px;
        }
    }
    .maincontent {
        padding: 100px;
    }

    .menubar {
        position: relative;
        z-index: 1;
    }
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 24px;
    }
    .main {
        background-color: $figma-grey3;
    }
    .title {
        margin-top: 60px;
        margin-bottom: 30px;
    }
    .projects {
        background-color: white;
    }

    .schedule {
        background-color: white;
        padding: 20px;
    }
    .schedule table {
        border-collapse: collapse;
    }
    .schedule table, th, td {
        border: 1px solid #dddddd;
        padding: 10px;
    }
    .schedule b {
        color: #f37626;
    }
    .project-category {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .project-row {
        margin-top: 10px;
        margin-bottom: 10px;
        min-height: 240px;
        display: flex;
    }
    .project-row-container {
        align-items: center;
    }
    .project-image {
        margin: 10%;
        width: 200px;
    }
    .project-text-plain {
        margin: 30px;
    }
    .icon-github {
        height: 20px;
        margin-right: 4px;
        margin-bottom: 1px;
        margin-left: 2px;
    }
    .icon-doc {
        height: 22px;
        margin-right: 4px;
        margin-bottom: 1px;
    }
</style>
