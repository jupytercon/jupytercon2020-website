<template>
    <div class="jc-footer">
        <nuxt-link to="/"><div class="logo"></div></nuxt-link>
        <div class="footer-links">
            <MenuContent></MenuContent>
        </div>
        <div class="links">
            <div class="social-icons">
                <a href="https://twitter.com/JupyterCon"><div class="social-icon twitter-icon"></div></a>
                <a href="https://www.youtube.com/c/jupytercon"><div class="social-icon youtube-icon"></div></a>
            </div>
            <nuxt-link to="/privacy/"><div class="terms">Privacy Policy</div></nuxt-link>
        </div>
    </div>
</template>

<script>
    import MenuContent from "./MenuContent";

    export default {
        name: "DesktopFooter",
        components: {MenuContent}
    }
</script>

<style lang="sass">
    @import '~assets/scss/footer'
</style>
