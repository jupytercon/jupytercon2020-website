<template>
    <div>
        <div class="image1">
            <slot name="image1">
                <div class="placeholder"></div>
            </slot>
        </div>
        <div class="text1">
            <slot name="text1">
                <p>
                    <Lorem>ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus
                        vitae. Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus
                        scelerisque. Sed ut malesuada pretium faucibus odio quis
                        congue.
                    </Lorem>
                </p>
            </slot>
        </div>
        <div class="image1">
            <slot name="image2">
                <div class="placeholder"></div>
            </slot>
        </div>
        <div class="text1">
            <slot name="text2">
                <p>
                    <Lorem>ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus
                        vitae. Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus
                        scelerisque. Sed ut malesuada pretium faucibus odio quis
                        congue.
                    </Lorem>
                </p>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesktopContent"
    }
</script>

<style scoped lang="sass">

</style>