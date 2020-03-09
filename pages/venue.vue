<template>
    <DesktopBackground class="venue">
        <DesktopHeader title="Venue"><img src="~assets/images/bcc_photo_exterior_view_4708_x_2648_pixel_350_dpi.webp"
                                          style="height: 516px;"/></DesktopHeader>
        <div class="over-circle"></div>
        <div class="head-text">
            <div class="venue-head">
                <h3>The Conference Hall</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus
                    vitae. Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus
                    scelerisque.</p>
            </div>
        </div>
        <div class="footer-venue">
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
        width: 334px
        height: 500px
        left: 122px
        top: 465px

    .over-circle
        position: absolute
        $dim: 411px
        width: #{$dim/2}
        height: $dim
        right: 0
        top: 350px
        background: url(~assets/svg/over-circle.svg)

    .footer-venue
        position: absolute
        top: 3244px
</style>