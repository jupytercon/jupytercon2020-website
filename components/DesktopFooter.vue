<template>
    <div class="jc-footer">
        <nuxt-link to="/"><div class="logo"></div></nuxt-link>
        <div class="footer-links">
            <MenuContent></MenuContent>
        </div>
        <nuxt-link to="/privacy/"><div class="terms">Privacy Policy</div></nuxt-link>
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
    @import 'assets/scss/footer'
</style>
