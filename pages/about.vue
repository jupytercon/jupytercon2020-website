<template>
    <DesktopBackground class="about">
        <DesktopHeader title="About">
            <div class="img-about"></div>
        </DesktopHeader>
        <div class="what-image"></div>
        <div class="main-text what-text" id="what-is-it">
            <h2>What is <br/> JupyterCon?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                malesuada pretium faucibus odio quis congue.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                malesuada pretium faucibus odio quis congue.</p>
        </div>
        <div class="main-text past">
            <h2 id="past-events">Past Events</h2>
        </div>
        <div class="main-text past-sub">A selection of talks from <br/> our previous editions
        </div>
        <div class="widget"><span>Widget placeholder</span></div>
        <div class="committee-pos">
            <Committee></Committee>
        </div>
        <div class="footer-about">
            <DesktopFooter></DesktopFooter>
        </div>
    </DesktopBackground>
</template>

<script>
    import DesktopBackground from "../components/DesktopBackground";
    import DesktopHeader from "../components/DesktopHeader";
    import DesktopFooter from "../components/DesktopFooter";
    import Committee from "../components/Committee";

    export default {
        components: {Committee, DesktopFooter, DesktopHeader, DesktopBackground},
    }
</script>

<style lang="sass" scoped>
    @import 'assets/scss/settings'

    .img-about
        background: url(~assets/about.webp)
        background-size: cover

    .what-image
        position: absolute
        width: 527px
        height: 424px
        left: 223px
        top: 1004px
        background: url(~assets/images/explain.jpg)
        background-size: cover

    .what-text
        position: absolute
        width: 470px
        left: 855px
        top: 986px

        h2
            @import 'assets/scss/settings'
            color: $figma-orange

    .past
        position: absolute
        left: 120px
        top: 1686px
        color: white

    .past-sub
        position: absolute
        left: 584px
        top: 1696px
        font-size: 24px
        line-height: 30px

        color: white

    .widget
        position: absolute
        width: 1060px
        height: 520px
        left: 120px
        top: 1828px
        border: 1px dashed black

    .committee-pos
        position: absolute
        top: 1618px + 810px
        width: $page-width


    .footer-about
        position: absolute
        top: 4052px
</style>


