<template>
  <div class="grid-container sponsors">
    <div class="main-text">
      <div class="clearfix head">
        <div class="float-left">
          <h1>Sponsors</h1>
        </div>
        <div class="float-right">
          <nuxt-link class="button hollow" to="/sponsors/">View all</nuxt-link>
        </div>
      </div>
      <no-ssr placeholder="Loading...">
        <carousel class="logos" :perPage=3 :autoplay="true" :navigationEnabled="true">
          <slide class="small-3" :key="sponsor.link" v-for="sponsor in sponsors">
            <a :href="sponsor.link">
                <img class="sponsor" :src="sponsor.image"/>
            </a>
          </slide>
        </carousel>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopSponsors",
  data() {
      const sponsors = this.$store.state.sponsors;
      return {
          sponsors: Object.keys(sponsors).flatMap(sponsor => {
              if (sponsors.hasOwnProperty(sponsor)) {
                return sponsors[sponsor];
              }
              return [];
          })
      }
  },
};
</script>

<style scoped lang="sass">
@import 'assets/scss/settings'

.sponsors
    background-color: white

    .main-text
        padding-top: 200px

    .clearfix.head
        margin: 0 115px

        .button
            color: $figma-orange
            border-color: $figma-orange
            margin-top: 18px
            width: 170px

    h2
        color: $figma-orange

    .logos
        margin: 60px 120px 0
        padding-bottom: 120px

    .sponsor
        width: 230px
        height: 230px
        padding: 10px
        margin: 10px
        object-fit: scale-down
</style>
