<template>
    <div>
        <BlockHeaderPlain title="Our Sponsors">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>JupyterCon is brought to you by</h1>
	             <div class="grid-container">
	                 <div class="grid-y">
	                     <div class="cell core-row" v-for="sponsor in core">
	                         <div class="grid-x sponsor-row sponsor-row-container">
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
            <h1 class="title">Sponsors</h1>
                <h2 class="sponsor-category" id="platinum">Platinum</h2>
	             <div class="grid-container sponsors">
	                 <div class="grid-y">
	                     <div class="cell sponsor-row" v-for="sponsor in platinum">
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
                <h2 class="sponsor-category "id="gold">Gold</h2>
	             <div class="grid-container sponsors">
	                 <div class="grid-y">
	                     <div class="cell sponsor-row" v-for="sponsor in gold">
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
                <h2 class="sponsor-category "id="gold">Silver</h2>
	             <div class="grid-container sponsors">
	                 <div class="grid-y">
	                     <div class="cell sponsor-row" v-for="sponsor in silver">
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
                <h2 class="sponsor-category "id="bronze">Bronze</h2>
	             <div class="grid-container sponsors">
	                 <div class="grid-y">
	                     <div class="cell sponsor-row" v-for="sponsor in bronze">
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
            <h1 id="Sponsoring" class="title">Sponsoring</h1>
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
            <h1>Legal</h1>
                   <p>IBM and the IBM logo are trademarks of International Business Machines Corp., registered in many jurisdictions worldwide.</p>
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
            return { ...this.$store.state.sponsors }
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
