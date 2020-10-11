
<template>
    <div>
        <BlockHeaderPlain title="Sponsor Exhibit Schedule">
            <template v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <p>
                <em>(Times in UTC)</em>
            </p>

            <h2>Monday, October 12</h2>
            <h3>Google | 15:30-16:00</h3>

            <p>
                <strong>Interactive development with Apache Beam & Dataflow</strong><br>
                Speaker: Reza Rokni
            </p>

            <h2>Tuesday, October 13</h2>
            <h3>Google | 15:30-16:00</h3>
            <p>
                <strong>TensorFlow on GCP</strong><br>
                Speaker: Karl Weinmeister
            </p>

            <h3>Google | 18:00-18:30</h3>
            <p>
                <strong>Scaling up data analysis from notebooks using BigQuery</strong><br>
                Speaker: Lak Lakshmanan
            </p>

            <h2>Wednesday, October 14</h2>
            <h3>Google | 15:30-16:00</h3>
            <p>
                <strong>CTO Discussion</strong><br>
                Speaker: Jeff Sternberg
            </p>

            <h2>Thursday, October 15</h2>
            <h3>Google | 18:00-18:30</h3>
            <p>
                <strong>ML Ops with Kubeflow Pipelines from a notebook</strong><br>
                Speaker: Amy Unruh
            </p>

            <h3>Facebook | 18:00-18:30</h3>
            <p>
                <strong>Notebook Authoring - Language Experiences (LSP). Come learn how we're improving notebook authoring experiences with LSP!
5-10 presentation with 10 minutes Q&A</strong><br>
                Hosts: Omer Dunay and Daniel Cheng, Software Engineers
            </p>

            <h3>Facebook | 18:00-18:30</h3>
            <p>
                <strong>Designing Notebooks at Facebook. Come learn how we're designing the user experience for notebooks at Facebook!
5-10 presentation with 10 minutes Q&A</strong><br>
                Hosts: JP Hennessy, Product Designer, and Jordan Eschler, User Experience Researcher
            </p>

            <h2>Friday, October 16</h2>
            <h3>InfuseAi | 00:00-01:00</h3>
            <p>
                <strong>Introduction to Primehub; Notebook-native workflow – submitting jobs within PrimeHub with Q&A</strong><br>
                Host: Engineering Team
            </p>
            <h3>InfuseAi | 09:00-10:00</h3>
            <p>
                <strong>Introduction to Primehub; Notebook-native workflow – submitting jobs within PrimeHub with Q&A</strong><br>
                Host: Engineering Team
            </p>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "sponsors-schedule",
        components: {DesktopFooter, BlockHeaderPlain},
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
