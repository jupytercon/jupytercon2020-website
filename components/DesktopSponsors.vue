<template>
    <div class="sponsors">
        <div class="main-text">
            <div class="clearfix head">
                <div class="float-left">
                    <h2>Sponsors</h2>
                </div>
                <div class="float-right"><a class="button hollow">View all</a></div>
            </div>

            <carousel :per-page="4" :mouse-drag="false" autoplay loop navigationEnabled :paginationEnabled="false" class="carousel">
                <slide v-for="sponsor in sponsors" :key="sponsor">
                    <div class="sponsor-placeholder">Sponsor {{ sponsor }}</div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesktopSponsors",
        data() {
            return {
                sponsors: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        }
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .sponsors
        background-color: white
        height: 800px

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

    .carousel
        margin-top: 60px
        margin-left: 120px
        margin-right: 120px

        .VueCarousel-navigation-button
            color: #9E9E9E

    .sponsor-placeholder
        width: 250px
        height: 250px
        background-color: #9E9E9E
</style>

<style lang="sass">
    .sponsors .carousel .VueCarousel-navigation-button
        color: #9E9E9E
</style>