<template>
    <a :href="link">
        <slot>default slot content</slot>
    </a>
</template>

<script>
    export default {
        name: "NuxtLink",
        props: ['to'],
        mounted() {
            console.log(this.to)
        },
        computed: {
            link() {
                let to = this.to;
                if (typeof this.to !== 'string') {
                    to = `${this.to.path}/#${this.to.hash}`
                }

                if (to.startsWith('/')) {
                    return `https://heuristic-mclean-df145e.netlify.com${to}`;
                } else {
                    return this.to;
                }
            }
        }
    }
</script>

<style scoped>
</style>