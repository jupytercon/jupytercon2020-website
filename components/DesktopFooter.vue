<template>
    <div class="footer">
        <div class="logo"></div>
        <div class="footer-links">
            <MenuContent></MenuContent>
        </div>
        <div class="terms">Privacy Policy | Terms & Conditions</div>
    </div>
</template>

<script>
    import MenuContent from "./MenuContent";

    export default {
        name: "DesktopFooter",
        components: {MenuContent}
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'
    .footer
        position: relative
        height: 392px
        width: $page-width
        background: #4D4D4D

    .logo
        position: absolute
        width: 71px
        height: 84px
        left: 86px
        top: 87px
        background: url(~assets/svg/empty-icon.svg)

    .terms
        position: absolute
        left: 270px
        bottom: 65px
        font-family: $figma-font-ibm
        color: #9E9E9E
        font-size: 14px

    .footer-links
        padding-top: 87px
        margin-left: 270px
        margin-right: 100px
</style>

<style lang="sass">
    @import 'assets/scss/settings'
    .desktop
        .footer-links
            font-size: 15px
            font-family: $figma-font-ibm

            .menu-block
                width: 210px
                color: white

                a
                    color: inherit
                    padding: 0

                .no-title
                    line-height: 24px

                a:hover
                    text-decoration: underline

                h3
                    font-size: 24px
                    margin-bottom: 6px
                    color: $figma-orange

</style>