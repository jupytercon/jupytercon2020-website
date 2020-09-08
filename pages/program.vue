
<template>
    <div>
        <BlockHeaderPlain title="Program">
            <template v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>List of Talks (preview)</h1>
            <p>
                <em>The full program and schedule will be available soon.</em>
            </p>
            <ul :key="talk.Number" v-for="talk in program">
                <li>{{ talk.Title }}</li>
            </ul>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "program",
        data() {
            return {
                program:                 [
                    {
                        "Number":8,
                        "Title":"fastpages - A new, open source Jupyter notebook blogging system."
                    },
                    {
                        "Number":9,
                        "Title":"Jupyter in the Wikimedia ecosystem"
                    },
                    {
                        "Number":11,
                        "Title":"Scaling Jupyter Notebooks for global scale security analysis"
                    },
                    {
                        "Number":12,
                        "Title":"From research to production in a snap using Jupyter Notebooks"
                    },
                    {
                        "Number":13,
                        "Title":"Using Jupyter Notebooks to Empower the Public with Climate and Environmental Justice Data"
                    },
                    {
                        "Number":16,
                        "Title":"Streamline your Data Science projects with Ploomber"
                    },
                    {
                        "Number":32,
                        "Title":"How to avoid 'Death by Jupyter Notebooks' - Towards more effective and educational notebooks"
                    },
                    {
                        "Number":33,
                        "Title":"\u00a1Bienvenido! Bienvenue! Welcome! JupyterLab and Language Extensions!"
                    },
                    {
                        "Number":37,
                        "Title":"Dr. Schmood's Notebook of Python Calisthenics and Orthodontia"
                    },
                    {
                        "Number":44,
                        "Title":"Getting Jupyter into classrooms to enable more schoolgirls to discover & enjoy Scientific Computing!"
                    },
                    {
                        "Number":46,
                        "Title":"Why develop a snippet library for Jupyter in your subject domain?"
                    },
                    {
                        "Number":48,
                        "Title":"Jupytext"
                    },
                    {
                        "Number":51,
                        "Title":"How Jupyter and geemap enable interactive mapping and analysis of large-scale geospatial datasets"
                    },
                    {
                        "Number":56,
                        "Title":"Teaching teenagers to understand Dark Energy with straight-off-the-telescope data & Jupyter."
                    },
                    {
                        "Number":62,
                        "Title":"IBM Quantum Experience Notebooks. Serving JupyterHub at scale for the Quantum Computing Community"
                    },
                    {
                        "Number":66,
                        "Title":"Introducing a simple notebook continuous integration workflow"
                    },
                    {
                        "Number":67,
                        "Title":"Electronic Examination using Jupyter Notebook with JupyterHub and nbgrader"
                    },
                    {
                        "Number":77,
                        "Title":"Apache Spark 3.0: Big Data Analytics with GPUs and Jupyter Notebooks"
                    },
                    {
                        "Number":79,
                        "Title":"The Care and Feeding of JupyterHub for Climate Solution Models"
                    },
                    {
                        "Number":80,
                        "Title":"Role of Jupyter Notebook in performing Data Science activities at Educational Institutes."
                    },
                    {
                        "Number":81,
                        "Title":"ipyannotator - the infinitely hackable annotation framework"
                    },
                    {
                        "Number":82,
                        "Title":"assert browserTest == True # Frontend Testing JupyterLab Extensions With Selenium"
                    },
                    {
                        "Number":82,
                        "Title":"JupyterHub \u2260 x, for all x: A tale of two JupyterHubs"
                    },
                    {
                        "Number":82,
                        "Title":"NotebookOps: A pattern for building notebook-centric data platforms"
                    },
                    {
                        "Number":82,
                        "Title":"A Notebook Style Guide"
                    },
                    {
                        "Number":82,
                        "Title":"Teaching an Active Learning class with Jupyter Book"
                    },
                    {
                        "Number":83,
                        "Title":"Interactive Knowledge Graph Visualization in Jupyter Notebook"
                    },
                    {
                        "Number":86,
                        "Title":"Jupyter as an Enterprise \u201cDo It Yourself\u201d (DIY) Analytic Platform"
                    },
                    {
                        "Number":87,
                        "Title":"Reproducible Exploration of Neuroimaging Data"
                    },
                    {
                        "Number":94,
                        "Title":"2i2c: sustaining open source through hosted Jupyter infrastructure for research and education"
                    },
                    {
                        "Number":99,
                        "Title":"ProvBook: Capturing and Visualizing Provenance in Jupyter Notebooks for Reproducibility"
                    },
                    {
                        "Number":100,
                        "Title":"The Littlest JupyterHub (TLJH) distribution  - trouble-free Jupyter Notebooks for your students"
                    },
                    {
                        "Number":101,
                        "Title":"The MariaDB Jupyter kernel"
                    },
                    {
                        "Number":101,
                        "Title":"Introducing QHub: How to Get Your Own Cloud Data Science Platform on the Cheap"
                    },
                    {
                        "Number":105,
                        "Title":"Help your plants to stay healthier with Machine Learning at home"
                    },
                    {
                        "Number":106,
                        "Title":"OperationHub - Enhanced JupyterHub for DevOps Engineers"
                    },
                    {
                        "Number":106,
                        "Title":"A Persistent BinderHub: Democratizing Access to Computational Resources in the Social Sciences"
                    },
                    {
                        "Number":108,
                        "Title":"From Papers to Notebooks-Submission, Review, Presentation & Publication of Notebooks at EarthCube'20"
                    },
                    {
                        "Number":112,
                        "Title":"Jupyter Notebook as a Medium for Experimentalist and Data Scientist Collaboration in neuroImaging"
                    },
                    {
                        "Number":113,
                        "Title":"Optimizing model performance with feature engineering and hyperparameter optimisation"
                    },
                    {
                        "Number":113,
                        "Title":"Automating biological network visualization with Jupyter Notebook"
                    },
                    {
                        "Number":116,
                        "Title":"Cloud Native Repositories for Big Scientific Data"
                    },
                    {
                        "Number":120,
                        "Title":"XVega : A C++ backend for the Vega-Lite visualisation system."
                    },
                    {
                        "Number":120,
                        "Title":".NET Jupyter Notebook: Lessoned we learned building  multi-language kernel"
                    },
                    {
                        "Number":121,
                        "Title":"Practical Enterprise JupyterHub Deployment and MLOps with PrimeHub"
                    },
                    {
                        "Number":123,
                        "Title":"Interactive Graph Visualization in Jupyter with ipycytoscape"
                    },
                    {
                        "Number":125,
                        "Title":"Advanced Robotics in Jupyter Notebooks and JupyterLab"
                    },
                    {
                        "Number":128,
                        "Title":"What is my GPU doing? Using PyNVML and the NVDashboard Jupyter Lab extension to access GPU metrics"
                    },
                    {
                        "Number":130,
                        "Title":"Redesigning Notebooks for Better Collaboration"
                    },
                    {
                        "Number":138,
                        "Title":"Creating JupyterLab extensions faster"
                    },
                    {
                        "Number":140,
                        "Title":"Building AI Pipelines with Elyra - A deep dive using COVID-19 Analytics Scenario"
                    },
                    {
                        "Number":141,
                        "Title":"Leap of faith: Transitioning from Excel to Jupyter-based applications"
                    },
                    {
                        "Number":141,
                        "Title":"To Jupyter and back again: Seamless interoperability between ipywidgets and Bokeh 2.0"
                    },
                    {
                        "Number":143,
                        "Title":"Using Qri (\u201cquery\u201d) to fetch, query, combine and publish datasets."
                    },
                    {
                        "Number":144,
                        "Title":"Debugging notebooks and python scripts in JupyterLab"
                    },
                    {
                        "Number":145,
                        "Title":"JupyterLab and GenePattern Notebook: Democratizing the accessibility of computational workflows"
                    },
                    {
                        "Number":146,
                        "Title":"FlyBrainLab: Interactive Computing in the Connectomic\/Synaptomic Era"
                    },
                    {
                        "Number":147,
                        "Title":"A Generic Metadata-Store for JupyterLab extensions"
                    },
                    {
                        "Number":148,
                        "Title":"sidestickies - Collaborative Annotation for Jupyter Notebook"
                    },
                    {
                        "Number":148,
                        "Title":"What's new on Elyra - A set of AI centric JupyterLab extensions"
                    },
                    {
                        "Number":148,
                        "Title":"Bridging Code and Interactive Visualization in Jupyter Notebooks with B2"
                    },
                    {
                        "Number":148,
                        "Title":"Explore and Extend AI Pipeline Runtimes with Elyra and JupyterLab"
                    },
                    {
                        "Number":149,
                        "Title":"pydeck: High-scale geospatial visualization for Python"
                    },
                    {
                        "Number":151,
                        "Title":"Using the Jupyterverse to power MADS"
                    },
                    {
                        "Number":151,
                        "Title":"Jupyter-enabled astrophysical analysis for researchers and students"
                    },
                    {
                        "Number":157,
                        "Title":"Exploring the Universe with ESASky's JupyterLab widget"
                    },
                    {
                        "Number":162,
                        "Title":"Exascale system management using Jupyter notebooks"
                    },
                    {
                        "Number":164,
                        "Title":"How we built\u00a0covid19dashboards.com"
                    },
                    {
                        "Number":167,
                        "Title":"After model.fit, before you deploy: Prototype with FastAPI in Jupyter!"
                    },
                    {
                        "Number":169,
                        "Title":"Intro to Elyra - an AI centric extension for JupyterLab"
                    },
                    {
                        "Number":170,
                        "Title":"A shared Python, R and Q (kdb+) Jupyter Notebook - A Quant Sandbox Dream"
                    },
                    {
                        "Number":172,
                        "Title":"Running non-jupyter applications on JupyterHub with jupyter-server-proxy"
                    },
                    {
                        "Number":174,
                        "Title":"Voil\u00e0 dashboards for policy support"
                    },
                    {
                        "Number":174,
                        "Title":"Jupyter Real Time Collaboration"
                    },
                    {
                        "Number":175,
                        "Title":"High performance Jupyter: faster workloads with Dask and RAPIDS"
                    },
                    {
                        "Number":180,
                        "Title":"Pulse Physiology Engine: An Interactive Human Physiology Simulator"
                    },
                    {
                        "Number":184,
                        "Title":"Advanced Visualization in Jupyter Notebooks"
                    },
                    {
                        "Number":185,
                        "Title":"The new Jupyter Book - beautiful, interactive, publication-quality books built with Jupyter"
                    },
                    {
                        "Number":190,
                        "Title":"LFortran: Interactive LLVM-based Fortran Compiler for Modern Architectures"
                    },
                    {
                        "Number":191,
                        "Title":"The Grail: A Github Process for Jupyter Notebooks that Just Works"
                    },
                    {
                        "Number":191,
                        "Title":"Building distributed pipelines with Jupyter Notebooks"
                    },
                    {
                        "Number":195,
                        "Title":"Jupyter Telemetry: structured event-logging for Jupyter Applications"
                    },
                    {
                        "Number":195,
                        "Title":"PayPal Notebooks: ML & Data Science experience"
                    },
                    {
                        "Number":199,
                        "Title":"Using and creating JupyterLab extensions"
                    },
                    {
                        "Number":199,
                        "Title":"Supercharging SQL Users with Jupyter Notebooks"
                    },
                    {
                        "Number":200,
                        "Title":"Structuring Notebooks Around Their Outputs"
                    },
                    {
                        "Number":202,
                        "Title":"The other kernel: managing browser resources in notebooks"
                    },
                    {
                        "Number":203,
                        "Title":"Production Notebooks"
                    },
                    {
                        "Number":204,
                        "Title":"jupyter-fs: the next generation Jupyter filesystem"
                    }
                ]
            }
        },
        components: {DesktopFooter, BlockHeaderPlain}
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 16px;
    }
    h1, h2, h3 {
        color: $figma-orange;
    }
    .main {
        background-color: $figma-grey3;
        padding: 100px;
    }
</style>
