<template>
    <div class="header-plain">
        <MenuBar class="menubar"/>
        <div class="title float-left">
            <slot name="title">
                <h1>{{ title }}</h1>
            </slot>
        </div>
        <div class="extra float-left">
            <slot name="side-content">
            </slot>
            <img src="~assets/svg/circle-facing-left-white-orange.svg" class="halfcircle"/>
        </div>
    </div>
</template>


<script>
    import MenuBar from "../components/MenuBar";
    export default {
        name: "BlockHeader",
        components: {MenuBar},
        props: ['title', 'year'],
    }
</script>

<style scoped lang="scss">
    @import '~assets/scss/settings';
    .menubar {
        position: absolute;
        left: 0;
        right: 0;
        z-index: 1;
    }
    .header-plain {
        height: 298px;
        .title {
            h1 {
                line-height: 1;
            }
            background-color: white;
            width: 60%;
            height: 100%;
            font-size: 96px;
            font-family: $figma-font-gosha;
            color: $figma-orange;
            padding-left: 122px;
            padding-top: 122px;
        }
        .subtitle {
            margin-top: -30px;
            color: $figma-grey2;
        }
        .extra {
            padding-left: 122px;
            padding-top: 122px;
            position: relative;
            background-color: $figma-grey2;
            color: white;
            font-size: 24px;
            line-height: 30px;

            width: 40%;
            height: 100%;
            .halfcircle {
                position: absolute;
                right: 0;
                bottom: -200px;
            }
        }
    }


</style>
