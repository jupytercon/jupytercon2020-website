<template>
    <div>
        <BlockHeaderPlain title="Our Sponsors">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>Community Sponsors</h1>
                <p>If your affinity group would like to partner with us:  
                    <ul>   
                        <li>complete the <a href="https://forms.gle/3kQSGcChimkwuyhM8">Community Partner Form</a></li>  
                        <li>email us with any questions: <a href="mailto:jupytercon-diversity@numfocus.org">jupytercon-diversity@numfocus.org</a></li>
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
                        name: "PyLadies Hamburg",
                        location: "Hamburg, Germany",
                        description: "Hamburg (Germany) chapter of PyLadies. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_hamburg.png"),
                        website: "https://www.pyladies.com",
                    },
                    {
                        twitterLink: "https://twitter.com/NYCPyLadies",
                        twitterHandle: "@NYCPyLadies",
                        name: "NYC PyLadies",
                        location: "New York, NY, USA",
                        description: "New York chapter of PyLadies. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_nyc.png"),
                        website: "https://nyc.pyladies.com",
                    },
                    {
                        twitterLink: "https://twitter.com/DataUmbrella",
                        twitterHandle: "@DataUmbrella",
                        name: "Data Umbrella",
                        location: "New York, NY, USA",
                        description: "An inclusive community for under-represented persons in machine learning, artificial intelligence and data science.",
                        image: require("~/assets/images/sponsors/data_umbrella_full_logo.png"),
                        website: "https://www.dataumbrella.org/",
                    },
                    {
                        twitterLink: "https://twitter.com/ChAnalyticsPyth",
                        twitterHandle: "@ChAnalyticsPyth",
                        name: "Analytics & Python Santiago",
                        location: "Santiago, Chile",
                        description: "Mayor comunidad en Chile de Analítica y Python. Espacio para compartir conocimiento y aprender.",
                        image: require("~/assets/images/sponsors/analytics_python.png"),
                        website: "https://www.meetup.com/es-ES/Analytics-y-Python/",
                    },
                    {
                        twitterLink: "https://womeninanalytics.com",
                        twitterHandle: "@wia_community",
                        name: "Women in Analytics",
                        location: "Columbus, OH, USA",
                        description: "Women in Analytics is a global organization that brings together an international community of industry leaders, technical experts, entrepreneurs, and academia. Our mission is to provide visibility to the women making an impact in the analytics space and furnish a platform for them to lead the conversation around the advancements of analytical research, development, and application. WIA aims to be an extremely inclusive organization and welcomes participation from all genders.",
                        image: require("~/assets/images/sponsors/WIA-Secondary-RGB.png"),
                        website: "https://womeninanalytics.com",
                    },
                    {
                        twitterLink: "https://twitter.com/pydataberlin",
                        twitterHandle: "@pydataberlin",
                        name: "PyData Berlin",
                        location: "Berlin, Germany",
                        description: "PyData is an educational program of NumFOCUS. We provide a forum for the international community of users and developers of data analysis tools to share ideas and learn from each other. The global PyData network promotes discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization.",
                        image: require("~/assets/images/sponsors/pydata.png"),
                        website: "https://berlin.pydata.org/",
                    },
                    {
                        twitterLink: "https://twitter.com/PyBerlin",
                        twitterHandle: "@PyBerlin",
                        name: "Python Users Berlin",
                        location: "Berlin, Germany",
                        description: "Python Users Berlin is the oldest Python community in Berlin. We host monthly events with presentations and discussions about Python and Python-related software development.",
                        image: require("~/assets/images/sponsors/pub.jpeg"),
                        website: "https://www.meetup.com/Python-Users-Berlin-PUB/",
                    },
                    {
                        twitterLink: "https://twitter.com/WomenWhoCode",
                        twitterHandle: "@WomenWhoCode",
                        name: "Women Who Code",
                        location: "Global",
                        description: "Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We provide an avenue into tech, empower women with skills needed for professional advancement, and provide environments where networking and mentorship are valued.",
                        image: require("~/assets/images/sponsors/wwcode_Final Logo.svg"),
                        website: "https://www.womenwhocode.com",
                    },
                    {
                        twitterLink: "",
                        twitterHandle: "",
                        name: "Python 101",
                        location: "Santiago, Chile",
                        description: "Meetup py101 is one of the most actives Python communities in Chile. Our aim is to gather people interested on Python, from basic to advanced level.",
                        image: require("~/assets/images/sponsors/py101.png"),
                        website: "https://www.meetup.com/python101",
                    },
                    {
                        twitterLink: "https://twitter.com/pyladiescbba",
                        twitterHandle: "@pyladiescbba",
                        name: "PyLadies Cochabamba",
                        location: "Cochabamba, Bolivia",
                        description: "We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings.",
                        image: require("~/assets/images/sponsors/pyladies_coch.png"),
                        website: "https://www.facebook.com/PyladiesCbba/",
                    },
                    {
                        twitterLink: "",
                        twitterHandle: "",
                        name: "Master Cohorts",
                        location: "Nairobi, Kenya",
                        description: "We are a community of AI, ML and Data Science practitioners & enthusiasts who believe we can work together to find solutions for various issues in our world.",
                        image: require("~/assets/images/sponsors/master_cohorts.jpg"),
                        website: "https://www.meetup.com/Master-Data-Science/",
                    },
                    {
                        twitterLink: "https://twitter.com/RLadiesMiami",
                        twitterHandle: "@rladiesmiami",
                        name: "R-Ladies Miami",
                        location: "Miami, FL, USA",
                        description: "R-Ladies is an international organization aimed at enabling gender equity and gender parity within the R community. We are a chapter based in Miami, Florida.",
                        image: require("~/assets/images/sponsors/rladies_miami.png"),
                        website: "https://www.meetup.com/rladies-miami/",
                    },
                    {
                        twitterLink: "https://twitter.com/PyLadiesGhana",
                        twitterHandle: "@pyladiesghana",
                        name: "PyLadies Ghana",
                        location: "Ghana",
                        description: "We are a mentorship group in Ghana focused on helping more women become active participants and leaders in the Python open-source Community.",
                        image: require("~/assets/images/sponsors/pyladies_ghana.png"),
                        website: "http://ghana.pyladies.com",
                    },
                    {
                        twitterLink: "https://twitter.com/PythonArgentina/",
                        twitterHandle: "@pythonargentina",
                        name: "Python Argentina",
                        location: "Argentina",
                        description: "PyAr is the local Argentinian community of Python users. It brings together all Python enthusiasts from around the country. Targets both users and companies and promotes the use of the language, the sharing of information and experience and aims to be a reference on the practice and discussion of the language.",
                        image: require("~/assets/images/sponsors/pyar.png"),
                        website: "http://www.python.org.ar/",
                    },
                    {
                        twitterLink: "https://twitter.com/spain_ai_",
                        twitterHandle: "@spain_ai_",
                        name: "Spain AI",
                        location: "Spain",
                        description: "Spain AI's mission is to foster AI at all levels, by creating a community covering networking, education, events and expert advice on AI, and becoming the largest AI community in Spain to date.",
                        image: require("~/assets/images/sponsors/spainAI-logo-fondoTransparente.png"),
                        website: "http://www.spain-ai.com/",
                    },
                    {
                        twitterLink: "https://twitter.com/pydataparis",
                        twitterHandle: "@pydataparis",
                        name: "PyData Paris",
                        location: "Paris",
                        description: "The Paris chapter of the PyData meetup is a growing community of enthusiasts for open-source scientific computing.",
                        image: require("~/assets/images/sponsors/pydata.png"),
                        website: "https://www.meetup.com/PyData-Paris/",
                    },
                    {
                        twitterLink: "https://twitter.com/JuliaLanguage",
                        twitterHandle: "@JuliaLanguage",
                        name: "The Julia Language",
                        location: "Global",
                        description: "Julia is a high-level, high-performance, dynamic programming language. While it is a general purpose language and can be used to write any application, many of its features are well-suited for numerical analysis and computational science.",
                        image: require("~/assets/images/sponsors/julia-logo-color.png"),
                        website: "https://julialang.org",
                    },                    
                    {
                        twitterLink: "https://twitter.com/pydatasw",
                        twitterHandle: "@pydatasw",
                        name: "PyData Südwest",
                        location: "Southwest Germany",
                        description: "Southwest Germany chapter [Karlsruhe, Mannheim, Heidelberg, Stuttgart] with a unique mix of academia and industry.",
                        image: require("~/assets/images/sponsors/pydata-sudwest.png"),
                        website: "https://sw.pydata.de",
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
    .title {
        margin-top: 60px;
        margin-bottom: 30px;
    }
    .sponsors {
        background-color: white;
    }
    .sponsor-category {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .sponsor-row {
        margin-top: 10px;
        margin-bottom: 10px;
        min-height: 240px;
        display: flex;
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
