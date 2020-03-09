<template>
    <DesktopBackground class="home">
        <DesktopHeader title="JupyterCon" year="true">
            <video class="autoplay" id="autoplay-video" autoplay="false" muted="true" loop="" style="height: 516px;">
                <source src="https://ak8.picdn.net/shutterstock/videos/7925128/preview/stock-footage-berlin-nov-timelpase-view-of-the-berlin-tv-tower-and-skyline-one-of-the-citys-main-tourist.mp4"
                        type="video/mp4"/>
            </video>
        </DesktopHeader>
        <div
                class="tickets">
            <div><a class="button hollow">Buy tickets</a></div>
            <div><a class="button hollow">Submit a talk
            </a></div>
        </div>
        <div class="about-image"><img src="~assets/images/flickr/batman.jpg"/></div>
        <div class="main-text about-text">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                malesuada pretium faucibus odio quis
                congue.</p>
            <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
        </div>
        <div class="participate-image"><img src="~assets/images/flickr/poster-session.jpg"/></div>
        <div class="main-text participate-text">
            <h2>Participate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut</p>
            <nuxt-link class="button hollow"
                       to="/participate/">Learn More
            </nuxt-link>
        </div>
        <DesktopSponsors></DesktopSponsors>
        <div class="footer-home">
            <DesktopFooter></DesktopFooter>
        </div>
    </DesktopBackground>
</template>

<script>
    import DesktopBackground from "../components/DesktopBackground";
    import DesktopHeader from "../components/DesktopHeader";
    import DesktopFooter from "../components/DesktopFooter";
    import DesktopSponsors from "../components/DesktopSponsors";

    export default {
        name: "index",
        components: {DesktopSponsors, DesktopFooter, DesktopHeader, DesktopBackground},
    }
</script>

<style lang="sass" scoped>
    @import 'assets/scss/settings'
    .img-berlin
        background: url(~assets/images/image-berlin.webp)

    .tickets
        position: absolute
        left: 270px
        top: 626px

        .button
            color: white
            border-color: white
            width: 210px
            margin-bottom: 35px

    div.about-image
        color: white
        position: absolute
        width: 675px
        height: 420px
        left: 225px
        top: 1007px

        img
            height: 100%
            width: 100%
            object-fit: cover

    div.about-text
        position: absolute
        width: 347px
        height: 72px
        left: 957px
        top: 990px

        h2
            color: $figma-orange

        .button
            width: 170px
            margin-top: 34px

    div.participate-image
        position: absolute
        width: 675px
        height: 417px
        left: 645px
        top: 1820px

        background: url(~assets/images/image-berlin.webp)
        background-size: cover

    div.participate-text
        position: absolute
        width: 488px
        height: 106px
        left: 120px
        top: 1800px

        color: white

        .button
            color: white
            border-color: white
            width: 170px
            margin-top: 34px

    .footer-home
        position: absolute
        top: 3088px
        height: 392px
</style>
