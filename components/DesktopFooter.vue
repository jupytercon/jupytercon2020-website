<template>
    <div class="jc-footer">
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

<style lang="sass">
    @import 'assets/scss/footer'
</style>
