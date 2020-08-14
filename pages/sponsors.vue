<template>
    <div>
        <BlockHeaderPlain title="Our Sponsors">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1 id="Sponsoring">Sponsoring</h1>
            <p>
                JupyterCon provides many unique opportunities for sponsors. On the one hand, the conference
                is certainly the best event in the world in which to engage the community that sustains
                and evolves Project Jupyter. Join us and become a participant in that dialogue. One the other
                hand, the conference provides access to a breadth of communities that leverage Project
                Jupyter:
                <ul>
                    <li>as standard tooling for research worldwide</li>
                    <li>widespread use cases throughout education</li>
                    <li>emerging use cases for interactive content in publishing</li>
                    <li>integration points for enterprise data infrastructure, and enterprise concerns:
                        collaboration, compliance, privacy, security, reproducibility, and so on</li>
                    <li>a place to reach practitioners, such as in data science</li>
                </ul>
                JupyterCon as a forum is pro-active on many important shared goals. To paraphrase from the
                <a href="https://sustainabledevelopment.un.org/?menu=1300">UN 2030 Agenda for Sustainable Development</a>,
                which many organizations have begun to adopt,
                Jupyter plays a growing role in resilient infrastructure (“Build resilient infrastructure, promote
                inclusive and sustainable industrialization and foster innovation”) and in education (“Ensure
                inclusive and equitable quality education and promote lifelong learning opportunities for all”).
                Moreover, the conference is committed to promoting exemplary practices for diversity and
                inclusion, gender equality, as well as innovating on sustainability practices in conferences. We
                welcome sponsors who can help our community support and demonstrate these practices
                through the event.
            </p>
            <p>
                If you are interested in sponsoring JupyterCon, email us at <a href="mailto:jupytercon-sponsor@numfocus.org">jupytercon-sponsor@numfocus.org</a> to receive a prospectus, which is also available <a href="/JupyterConOnline2020-SponsorProspectus.pdf">here</a>.
            </p>
            <h1 id="Sponsors" class="sponsors-title">Sponsors</h1>
            <div class="grid-container sponsors">
                <div class="grid-y">
                    <div class="cell sponsor-row" v-for="sponsor in sponsors">
                        <div class="grid-x sponsor-row-container">
                            <div class="cell small-4"><img class="sponsor-image" :src="sponsor.image"></div>
                            <div class="cell auto sponsor-text-plain">
                                <p>
                                    <a :href="sponsor.link">{{ sponsor.link }}</a>
                                </p>
                                <p>
                                    {{ sponsor.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 id="Community Sponsors" class="sponsors-title">Community Sponsors</h1>
                <p>If your affinity group would like to partner with us:  
                    <ul>   
                        <li>complete the <a href="https://forms.gle/3kQSGcChimkwuyhM8">Community Partner Form</a></li>  
                        <li>email us with any questions: <a href="mailto:jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a></li>
                    </ul>
                </p>
            <div class="grid-container sponsors">
                <div class="grid-y">
                    <div class="cell sponsor-row" v-for="sponsor in community_sponsors">
                        <div class="grid-x sponsor-row-container">
                            <div class="cell small-4">
                                <a :href="sponsor.website" target="_blank">
                                    <img class="sponsor-image" :src="sponsor.image">
                                </a>
                            </div>
                            <div class="cell auto sponsor-text-plain">
                                <a :href="sponsor.website" target="_blank">
                                    <h2>{{ sponsor.name }}</h2>
                                </a>
                                <p>{{ sponsor.location }}</p>
                                <p>
                                    <a v-if="sponsor.twitterLink" :href="sponsor.twitterLink" target="_blank">
                                        <img class="icon-twitter" src="@/assets/images/icon-twitter.png">
                                        {{ sponsor.twitterHandle }}
                                    </a>
                                </p>
                                <p>
                                    {{ sponsor.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "proposals",
        components: {DesktopFooter, BlockHeaderPlain},
        data() {
            return {
                sponsors: [
                    {
                        link: "https://www.ovh.com/",
                        description: "OVHcloud provides everything you need for a successful online project: web hosting, domain names, dedicated servers, CDN, cloud environments, big data, and more.",
                        image: require("~/assets/images/sponsors/OVH.png"),
                    },
                    {
                        link: "https://numfocus.org/",
                        description: "The mission of NumFOCUS is to promote open practices in research, data, and scientific computing by serving as a fiscal sponsor for open source projects and organizing community-driven educational programs.",
                        image: require("~/assets/images/sponsors/NumFocus.png")
                    }
                ],
                community_sponsors: [
                    {
                        twitterLink: "https://twitter.com/PyLadiesBer",
                        twitterHandle: "@PyLadiesBer",
                        name: "Berlin PyLadies",
                        location: "Berlin, Germany",
                        description: "We are the Berlin (Germany) chapter of PyLadies, an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_berlin.jpg"),
                        website: "https://www.pyladies.com",
                    },
                    {
                        twitterLink: "https://twitter.com/PyLadiesHH",
                        twitterHandle: "@PyLadiesHH",
                        description: "Hamburg (Germany) Chapter of PyLadies. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_hamburg.png")
                    },
                    {
                        twitterLink: "https://twitter.com/NYCPyLadies",
                        twitterHandle: "@NYCPyLadies",
                        description: "New York (NY, USA) Chapter of PyLadies. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_nyc.png")
                    },
                    {
                        twitterLink: "https://twitter.com/DataUmbrella",
                        twitterHandle: "@DataUmbrella",
                        description: "An inclusive community for under-represented persons in machine learning, artificial intelligence and data science.",
                        image: require("~/assets/images/sponsors/data_umbrella_full_logo.png")
                    },
                    {
                        twitterLink: "https://twitter.com/ChAnalyticsPyth",
                        twitterHandle: "@ChAnalyticsPyth",
                        description: "Mayor comunidad en Chile de Analítica y Python. Espacio para compartir conocimiento y aprender.",
                        image: require("~/assets/images/sponsors/analytics_python.png")
                    },
                    {
                        twitterLink: "https://womeninanalytics.com",
                        twitterHandle: "@",
                        description: "Women in Analytics is a global organization that brings together an international community of industry leaders, technical experts, entrepreneurs, and academia. Our mission is to provide visibility to the women making an impact in the analytics space and furnish a platform for them to lead the conversation around the advancements of analytical research, development, and application. WIA aims to be an extremely inclusive organization and welcomes participation from all genders.",
                        image: require("~/assets/images/sponsors/WIA-Secondary-RGB.png")
                    },
                    {
                        twitterLink: "https://berlin.pydata.org/",
                        twitterHandle: "@",
                        description: "PyData is an educational program of NumFOCUS. We provide a forum for the international community of users and developers of data analysis tools to share ideas and learn from each other. The global PyData network promotes discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization.",
                        image: require("~/assets/images/sponsors/pydata.png")
                    },
                    {
                        twitterLink: "https://www.meetup.com/Python-Users-Berlin-PUB",
                        twitterHandle: "@",
                        description: "Python Users Berlin is the oldest Python community in Berlin. We host monthly events with presentations and discussions about Python and Python-related software development.",
                        image: require("~/assets/images/sponsors/pub.jpeg")
                    },
                    {
                        twitterLink: "https://www.womenwhocode.com",
                        twitterHandle: "@",
                        description: "Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We provide an avenue into tech, empower women with skills needed for professional advancement, and provide environments where networking and mentorship are valued.",
                        image: require("~/assets/images/sponsors/wwcode_Final Logo.svg")
                    },
                    {
                        twitterLink: "https://www.meetup.com/python101",
                        twitterHandle: "@",
                        description: "Meetup py101 is one of the most actives Python communities in Chile. Our aim is to gather people interested on Python, from basic to advanced level.",
                        image: require("~/assets/images/sponsors/py101.png")
                    },
                    {
                        twitterLink: "https://twitter.com/pyladiescbba",
                        twitterHandle: "@pyladiescbba",
                        description: "We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_coch.png")
                    },
                    {
                        twitterLink: "https://www.meetup.com/Master-Data-Science/",
                        twitterHandle: "@",
                        description: "We are a community of AI, ML and Data Science practitioners & enthusiasts who believe we can work together to find solutions for various issues in our world.",
                        image: require("~/assets/images/sponsors/master_cohorts.jpg")
                    },
                    {
                        twitterLink: "https://www.meetup.com/rladies-miami/",
                        twitterHandle: "@",
                        description: "R-Ladies is an international organization aimed at enabling gender equity and gender parity within the R community. We are a chapter based in Miami, Florida.",
                        image: require("~/assets/images/sponsors/rladies_miami.png")
                    },
                    {
                        twitterLink: "http://ghana.pyladies.com",
                        twitterHandle: "@",
                        description: "We are a mentorship group in Ghana focused on helping more women become active participants and leaders in the Python open-source Community.",
                        image: require("~/assets/images/sponsors/pyladies_ghana.png")
                    },
                    {
                        twitterLink: "http://www.python.org.ar/",
                        twitterHandle: "@",
                        description: "PyAr is the local Argentinian community of Python users. It brings together all Python enthusiasts from around the country. Targets both users and companies and promotes the use of the language, the sharing of information and experience and aims to be a reference on the practice and discussion of the language.",
                        image: require("~/assets/images/sponsors/pyar.png")
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
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
    h1, h2 {
        color: $figma-orange;
    }
    .main {
        background-color: $figma-grey3;
        padding: 100px;
    }
    .sponsors-title {
        margin-top: 60px;
        margin-bottom: 30px;
    }
    .sponsors {
        background-color: white;
    }
    .sponsor-row {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .sponsor-row-container {
        align-items: center;
    }
    .sponsor-image {
        margin: 10%;
        width: 80%;
    }
    .sponsor-text-plain {
        margin: 30px;
    }

    .icon-twitter {
        height: 20px;
        margin-right: 4px;
        margin-bottom: 1px;
    }
</style>
