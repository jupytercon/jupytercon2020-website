<template>
    <div>
        <BlockHeaderPlain title="JupyterCon Blog">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <div class="grid-x">
                <div class="cell small-4" v-for="url in urls">
                    <div class="blogpost">
                    <link-prevue cardWidth="100%" :url="url">
                        <template slot-scope="props">
                            <a v-bind:href="props.url" class="btn btn-primary card-link">
                            <img class="card-img-top" :src="props.img" :alt="props.title" />
                                <div class="card-block">
                                <h4 class="card-title">{{props.title}}</h4>
                                <p class="card-text">{{props.description}}</p>
                            </div>
                            </a>
                        </template>
                    </link-prevue>
                    </div>
                </div>
            </div>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "proposals",
        components: {DesktopFooter, BlockHeaderPlain},
        data() {
            return {
               urls: [
                   "https://blog.jupyter.org/benjamin-ragan-kelley-59a6bf015ea9",
                   "https://blog.jupyter.org/omoju-miller-435db40d347e",
                   "https://blog.jupyter.org/lucy-dagostino-mcgowan-13adbdedccf0",
                   "https://blog.jupyter.org/juan-klopper-c33c2fd0ed36",
                   "https://blog.jupyter.org/jeremy-howard-8dace7b4a34a",
                   "https://blog.jupyter.org/anima-anandkumar-274f2619c90d",
                   "https://blog.jupyter.org/jupytercon-online-more-than-a-conference-4677cf25a915",
                   "https://blog.jupyter.org/jupytercon-2020-is-a-go-47c82b281fa8"
               ]
            }
        } 
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    h1 {
        font-size: 36px;
    }
    h2 {
        font-size: 24px;
    }
    h1, h2 {
        color: $figma-orange;
    }
    .main {
        background-color: $figma-grey3;
        padding: 100px;
    }
    .blogpost {
        margin: 5px;
        padding: 5px;
        background: white;
    }
    .blogpost img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        margin: 20px 0px;
    }
    .card-block {
        padding: 0 14px;
        height: 200px;
        overflow: hidden;
    }
    .card-text.card-text {
        color: black;
        width: initial;
        text-align: left;
    }
</style>
