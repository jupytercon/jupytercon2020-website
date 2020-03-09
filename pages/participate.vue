<template>
    <DesktopBackground class="participate">
        <DesktopHeader title="Participate"><img src="~assets/images/participate.jpg" style="height: 516px;"/>
        </DesktopHeader>
        <div class="over-circle"></div>
        <div class="head-text">
            <div class="venue-head">
                <h3>Get involved</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus
                    vitae. Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus
                    scelerisque.</p>
            </div>
        </div>
        <div class="footer-participate">
            <DesktopFooter></DesktopFooter>
        </div>
    </DesktopBackground>
</template>

<script>
    import DesktopBackground from "../components/DesktopBackground";
    import DesktopHeader from "../components/DesktopHeader";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        components: {DesktopFooter, DesktopHeader, DesktopBackground},
    }
</script>

<style lang="sass" scoped>
    .head-text
        position: absolute
        width: 390px
        height: 500px
        left: 122px
        top: 451px

    .over-circle
        position: absolute
        $dim: 411px
        width: #{$dim/2}
        height: $dim
        right: 0
        top: 350px
        background: url(~assets/svg/over-circle.svg)

    .footer-participate
        position: absolute
        top: 2425px

</style>
