<template>
    <div class="committee-panel">
        <h2>Committee</h2>
        <div class="grid-x">
            <div class="cell small-12 large-3 grid-margin-x" v-for="member in members">
                <div class="member"><img :src="member.image"/>
                    <p>{{ member.bio }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Committee",
        data() {
            return {
                members: [1, 2, 3, 4].map(i => ({
                    name: "Name Surname",
                    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae. Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut",
                    image: require("~/assets/images/temp/portrait.png")
                })),
            }
        }
    }
</script>

<style scoped lang="sass">
    @import 'assets/scss/settings'

    .committee-panel
        margin: 68px 112px

    h2
        color: $figma-orange

    .grid-x
        width: 1000px

    .member
        padding-left: 10px
        border: 1px dashed green;

    img
        height: 176px
        width: 254px
        object-fit: cover
        border: 1px dashed black
        margin: 20px 20px

</style>