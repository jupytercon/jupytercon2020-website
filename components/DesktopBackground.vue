<template>
    <div class="background desktop">
        <div class="dev">
            <div class="blocks">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesktopBackground",
        props: ['page']
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .background.desktop
        position: relative
        width: 1440px
        margin-left: auto
        margin-right: auto
        background-color: white

        &.dev
            .blocks
                background: unset

            &.home
                background: url(~assets/images/bg/home.png) no-repeat
                background-size: cover

            &.about
                background: url(~assets/images/bg/about.png) no-repeat

            &.venue
                background: url(~assets/images/bg/venue.png) no-repeat

            &.participate
                background: url(~assets/images/bg/participate.png) no-repeat

    div.dev
        background-color: rgba(255, 255, 255, 0.7)
        height: 100%
</style>
