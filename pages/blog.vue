<template>
    <div>
        <BlockHeaderPlain title="JupyterCon Blog">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <div class="blog">
                <div v-for="url in urls">
                    <link-prevue class="blogpost" cardWidth="100%" :url="url"></link-prevue>
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
    .blog {
        display: flex;
        flex-wrap: wrap;
    }
    .blogpost {
        margin: 5px;
        width: 320px;
    }
</style>
