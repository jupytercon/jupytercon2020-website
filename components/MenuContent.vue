<template>
    <div class="clearfix">
        <nav>
            <ul class="menu">
                <li class="menu-block float-left" v-for="block in menuData">
                    <h3>
                        <nuxt-link v-if="block.to" :to="block.to">{{ block.label }}</nuxt-link>
                        <div class="no-title" v-else="">{{ block.label }}</div>
                    </h3>
                    <div v-for="item in block.items">- {{ item }}</div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "MenuContent",
        data() {
            return {
                menuData: [{
                    label: 'About',
                    to: '/about/',
                    items: [
                        'What is it?',
                        'Past Events',
                        'Organizing Committee',
                        'Code of Conduct',
                        'Diversity',
                        'Eco-friendly efforts'
                    ]
                }, {
                    label: 'Participate',
                    to: '/participate/',
                    items: [
                        'Register / Tickets',
                        'Call for proposals',
                        'Propose a talk',
                        'Propose a tutorial',
                        'Propose a sprint',
                    ]
                }, {
                    label: 'Program',
                    items: [
                        'Schedule',
                        'Social events',
                        'Tips for attendees'
                    ]
                }, {
                    label: 'Venue',
                    to: '/venue/',
                    items: [
                        'Conference center',
                        'Hotel and local info',
                        'Child care',
                        'Things to do'
                    ]
                }, {
                    label: 'Sponsors',
                    items: [
                        'JupyterCon sponsors',
                        'Prospectus',
                        'Exhibits',
                        'Community Sponsors',
                        'Media partners'
                    ]
                }]
            }
        }
    }
</script>

<style lang="sass">


</style>