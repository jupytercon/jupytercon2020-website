<template>
    <a :href="link">
        <slot>default slot content</slot>
    </a>
</template>

<script>
    export default {
        name: "NuxtLink",
        props: ['to'],
        computed: {
            link() {
                let to = this.to;
                if (typeof this.to !== 'string') {
                    to = `${this.to.path}/#${this.to.hash}`
                }

                if (to.startsWith('/')) {
                    return `${this.jupyterConBaseUrl}${to}`;
                } else {
                    return this.to;
                }
            }
        }
    }
</script>

<style scoped>
</style>
