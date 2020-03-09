<template>
    <DesktopBackground class="home">
        <div class="grid-x" v-for="row in Array.from({length: 200}, (x,i) => i)">
            <div class="cell small-1">1</div>
            <div class="cell small-1">2</div>
            <div class="cell small-1">3</div>
            <div class="cell small-1">4</div>
            <div class="cell small-1">5</div>
            <div class="cell small-1">6</div>
            <div class="cell small-1">7</div>
            <div class="cell small-1">8</div>
            <div class="cell small-1">9</div>
            <div class="cell small-1">10</div>
            <div class="cell small-1">11</div>
            <div class="cell small-1">12</div>
        </div>
    </DesktopBackground>
</template>

<script>
    import DesktopBackground from "../components/DesktopBackground";

    export default {
        name: "test",
        components: {DesktopBackground}
    }
</script>

<style scoped lang="sass">
    .cell.small-1
        height: 810px
        border-left: 1px dashed black
        border-bottom: 1px dashed black

</style>
