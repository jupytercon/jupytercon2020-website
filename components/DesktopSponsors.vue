<template>
    <div class="grid-container sponsors">
        <div class="main-text">
            <div class="clearfix head">
                <div class="float-left">
                    <h1>Sponsors</h1>
                </div>
                <div class="float-right"><nuxt-link class="button hollow" to="/sponsors/">View all</nuxt-link></div>
            </div>
            <div class="grid-x logos">
                <div class="cell small-4">
                    <a href="https://www.ovh.com/">
                        <img class="sponsor" src="~assets/images/sponsors/OVH.png"/>
                    </a>
                </div>
                <div class="cell small-4">
                    <a href="https://numfocus.org/">
                        <img class="sponsor" src="~assets/images/sponsors/NumFocus.png"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesktopSponsors",
    }
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
            border: 1px solid $figma-grey2
            object-fit: scale-down
</style>
