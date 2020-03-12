<template>
    <div>
        <BlockHeaderPlain title="---">
            <template  v-slot:title>
                <h1><span>Sustainability</span><br/></h1><h3><span class="subtitle">We take it seriously</span></h3>
            </template>
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main grey-background">
            <h2>Our Efforts To Reduce Environmental Footprint</h2>
            <p>
                We believe that implementing some environmentally-friendly practices can have a positive impact and generate sustainable solutions.
            </p>
            <h3>The venue</h3>
            <p>
                TDB
            </p>
            <hr/>
            <h3>Some of the things we do </h3>
            <p>JupyterCon 2020 is working towards having a limited impact on the environment through careful consumption of energy and resources.</p>

            <p>This includes, among others, electronically circulating meeting materials (online file sharing), not producing unnecessary conference material and products, choosing environmentally-friendly and socially-friendly products, as well as providing healthy food and hosting meetings and social events in central locations.</p>

            <p>These guidelines are provided for coordinators, committees and contractors to the conference and <b>aim to educate and inspire</b> a continued mitigation of environmental footprint.</p>


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
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
    .menubar {
        position: relative;
        z-index: 1;
    }
    .main {
        padding: 100px;
    }
</style>
