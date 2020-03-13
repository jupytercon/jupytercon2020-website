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

            <p>
                We believe that implementing some environmentally-friendly practices can have a <strong>positive impact</strong> and generate sustainable solutions.
            </p>
            <h2>Our Efforts To Reduce Environmental Footprint</h2>
            
                <h3>Some of the things we do</h3>

	                <p>
	                    JupyterCon 2020 is working towards having a limited impact on the environment through careful consumption of energy and resources.
	                </p>

	                <p>
	                    This includes, among others, electronically circulating meeting materials (online file sharing), not producing unnecessary conference material and products, choosing environmentally-friendly and socially-friendly products, as well as providing healthy food and hosting meetings and social events in central locations.
	                </p>

	                <p>
	                    These guidelines are provided for coordinators, committees and contractors to the conference and aim to educate and inspire a continued mitigation of environmental footprint.
	                </p>

                <h3>Some of the things you can do as a visitor</h3>

	                <ul>
	                    <li>
	                    Choose walking! The venue is located in the city center, all hotels and social venues are located by walking distance from each other – walk and explore the city, use the public transportations or the city bikes instead of taking taxis.
                        </li>

                        <li>
                            Please follow the waste separation instructions at the venue and at your accommodations when available.
                        </li>

                        <li>
                            Berlin tap water is of very high quality. Tap water stations will be available throughout the venue. Bring your own bottles and fill them up with tap water.
                        </li>
                    </ul>

                    <p>
                        If you have any questions or suggestions to the sustainability work for the conference you are most welcome to contact us on <a href="mailto:events@numfocus.org">events@numfocus.org</a>.
                    </p>

                    <p>
                        Please participate in an environmentally-friendly way!
                    </p>

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
