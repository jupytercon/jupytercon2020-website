<template>
    <div>
        <MenuBar />
        <div class="page-title">
            <h1><span>{{ title }}</span><br/><span class="year" v-if="year">2020</span></h1>
        </div>
        <div class="dates">
            <div>
                <span class="grey">Berlin, Germany <br/></span>
                <span class="orange">10-11 August: Tutorials <br/>
                    12-13 August: Conference <br/>
                    14 August: Sprints
                </span>
            </div>
        </div>
        <div class="image">
            <slot>
                <div class="placeholder"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    import MenuBar from "./MenuBar";
    export default {
        name: "DesktopHeader",
        components: {MenuBar},
        props: ['title', 'year'],
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .page-title
        position: absolute
        width: 862px
        height: 349px
        left: 116px
        top: 130px

        h1
            font-family: $figma-font-gosha

            font-style: normal

            font-weight: normal
            font-size: 96px
            line-height: 100%

            text-align: justify
            letter-spacing: -0.02em

            text-transform: capitalize

            /* orange */
            color: $figma-orange

            .year
                color: $figma-grey2
                letter-spacing: 0

    .dates
        position: absolute
        left: 960px
        top: 139px

        div
            font-size: 24px
            line-height: 31px
            font-family: $figma-font-gosha

            .grey
                color: $figma-grey
                font-family: $figma-font-ibm
                position: relative
                top: 2px

            .orange
                color: $figma-orange

    .menu-text
        position: absolute
        left: 1294px
        top: 37px

        /* body */

        font-family: $figma-font-ibm

        font-style: normal
        font-weight: 500
        font-size: 18px
        line-height: 24px
        color: #4D4D4D

    .image
        position: absolute
        width: 901px
        height: 516px
        left: 540px
        top: 296px
        overflow: hidden

        div
            width: 100%
            height: 100%

        .placeholder
            border: 1px dashed black
</style>
