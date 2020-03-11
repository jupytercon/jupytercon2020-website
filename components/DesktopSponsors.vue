<template>
    <div class="sponsors">
        <div class="main-text">
            <div class="clearfix head">
                <div class="float-left">
                    <h2>Sponsors</h2>
                </div>
                <div class="float-right"><a class="button hollow">View all</a></div>
            </div>
            <div class="grid-x logos">
                <div class="cell large-4">
                    <img class="sponsor" src="~assets/images/sponsors/WIA-Secondary-RGB.png"/>
                </div>
                <div class="cell large-4">
                    <img class="sponsor" src="~assets/images/sponsors/wwcode_Final Logo.svg"/>
                </div>
                <div class="cell large-4">
                    <div class="sponsor">
                        Sponsor 3
                    </div>
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
            width: 250px
            height: 250px
            border: 1px solid $figma-grey2
            object-fit: scale-down
</style>
