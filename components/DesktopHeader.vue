<template>
    <div>
        <div class="jupyter-logo">
            <nuxt-link to="/" aria-label="home"><img src="~assets/svg/logo.svg" alt="JupyterCon logo"/></nuxt-link>
        </div>
        <div class="menu-text">Menu
        </div>
        <div class="menu-btn" :class="menuOpen?'opened':'closed'" @click="menuOpen = !menuOpen"></div>
        <div class="menu-wrapper">
            <div class="menu-overlay" :class="menuOpen?'opened':'closed'">
                <div class="social-icons"></div>
                <div class="terms">Privacy Policy | Terms & Conditions
                </div>
                <MenuContent></MenuContent>
            </div>
        </div>
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
    import MenuContent from "./MenuContent";

    export default {
        name: "DesktopHeader",
        components: {MenuContent},
        props: ['title', 'year'],
        data() {
            return {
                menuOpen: false,
            }
        },
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .temp-nav
        a
            margin: 20px

    .temp-menu
        a
            margin: 20px
            color: white
            border-color: white

    .jupyter-logo
        position: absolute
        width: 169px
        height: 45px
        left: 54px
        top: 27px

        img
            width: 168px
            height: 45px

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

    .menu-btn
        position: absolute
        width: 44px
        height: 50px
        left: 1354px
        top: 26px

        transition: background .3 s ease-in-out
        cursor: pointer

        &.closed
            background: url(~assets/svg/menu-icon.svg)

        &.opened
            background: url(~assets/svg/menu-close-icon.svg)

    .menu-overlay, .menu-wrapper
        width: 1440px
        height: 712px

    .menu-wrapper
        position: absolute
        left: 0
        top: 100px
        overflow: hidden

    .menu-overlay
        background-color: #F37626
        position: relative

        transition: left 0.2s ease
        z-index: 10

        &.closed
            left: 1440px

        &.opened
            left: 0;


        .social-icons
            position: absolute
            left: 100px
            bottom: 100px
            width: 240px
            height: 53px
            background: url(~assets/svg/social-icons.svg) no-repeat

        .terms
            position: absolute
            right: 100px
            bottom: 100px
            color: white
            font-family: $figma-font-ibm

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

<style lang="sass">
    .menu-overlay
        .clearfix
            padding-top: 100px
            margin-left: 100px
            margin-right: 100px
        .menu-block
            width: 246px
            color: white

            .no-title
                line-height: 36px

            a
                color: white
                padding: 0

            a:hover
                text-decoration: underline

            h3
                margin-bottom: 36px

</style>
