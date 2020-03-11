<template>
    <div>
        <BlockHeaderPlain title="JUPYTERCON 2020 SPRINT DAY">
            <template  v-slot:side-content>
                <div>
                    <span class="grey">Date: 14th of August, 2020<br/></span>
                    <span class="grey">Location: HERE Technologies</br></span>
                    <span class="orange">10-11 August: Tutorials <br/>
                        12-13 August: Conference <br/>
                        14 August: Sprints
                    </span>
                </div>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>Header</h1>
            <hr/>
            <h2>Header</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                    Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                    malesuada pretium faucibus odio quis
                    congue.</p>
            <h2>Mentorship</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                    Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                    malesuada pretium faucibus odio quis
                    congue.</p>
        </div>
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";

    export default {
        name: "proposals",
        components: {BlockHeaderPlain},
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
        padding-left: 100px;
        padding-top: 100px;
    }
</style>
