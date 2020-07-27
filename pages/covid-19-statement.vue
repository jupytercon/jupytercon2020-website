<template>
  <div>
    <BlockHeaderPlain title="COVID-19 Statement">
      <template v-slot:side-content></template>
    </BlockHeaderPlain>
    <div class="main grey-background">
      <div class="et_pb_text_inner">
        <p>22 June 2020</p>
        <p>Given the unabating COVID-19 pandemic, and prioritizing the safety and well-being of our community members, JupyterCon 2020 will be held online October 5-17. We're working to make it as exciting and valuable as the in-person event.</p>
        
        <p>For those interested in more context, we had anticipated at least
        1,000 participants at the in-person conference scheduled in early
        August in Berlin, Germany. On April 15, German Chancellor Angela
        Merkel announced a gradual easing of lockdown measures in Germany, but
        declared large public gatherings would remain banned through the end
        of August (see the <a href="https://www.bbc.co.uk/news/world-europe-52299358">BBC notice</a>
        in English). Following this announcement, the city of Berlin issued an
        <a href="https://www.berlin.de/corona/en/measures/directive/large-events/">ordinance</a>
        that specifically banned public gatherings of more than 1000 people.
        After extensive negotiation with our contracted venue and planning
        a platform for online conference content, we are excited to announce
        the new online JupyterCon 2020.</p>

        <p>-The JupyterCon Organizing Committee</p>
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
