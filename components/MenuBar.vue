<template>
    <div class="clearfix menu-bar">

        <div class="float-left">
            <div class="jupyter-logo">
                <nuxt-link to="/" aria-label="home"><img src="~assets/svg/logo.svg" alt="JupyterCon logo"/></nuxt-link>
            </div>
        </div>

        <div class="float-right">
            <div class="clearfix right">
                <div class="float-right menu-btn" :class="menuOpen?'opened':'closed'" @click="toggleMenu()"></div>
                <div class="float-right menu-text">Menu</div>
            </div>

            <div class="menu-wrapper" ref="menuWrapper">
                <div class="menu-overlay" :class="menuOpen?'opened':'closed'" ref="menuOverlay"  @click="toggleMenu()">
                    <div class="social-icons">
                        <a href="https://twitter.com/JupyterCon"><div class="social-icon twitter-icon"></div></a>
                        <a href="https://www.youtube.com/channel/UCk4mxleDfaMqdm5kHISD3qA/about"><div class="social-icon youtube-icon"></div></a>
                    </div>
                    <nuxt-link to="/privacy/"><div class="terms">Privacy Policy</div></nuxt-link>
                    <div class="menu-columns">
                        <MenuContent></MenuContent>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MenuContent from "./MenuContent";
    export default {
        name: "MenuBar",
        components: {MenuContent},
        mounted() {
            this.$refs.menuOverlay.addEventListener('transitionend', (e) => {
                if (e.target.classList.contains('closed')) {
                    this.$refs.menuWrapper.style.height = '0';
                }
            });
        },
        data() {
            return {
                menuOpen: false,
            }
        },
        methods: {
            toggleMenu() {
                if (!this.menuOpen) {
                    this.$refs.menuWrapper.style.height = '700px';
                }
                this.menuOpen = !this.menuOpen
            }
        }
    }
</script>

<style lang="scss">
    @import '~assets/scss/menubar';
</style>
