<template>
    <div class="clearfix">
        <nav>
            <ul class="menu">
                <template v-for="block in menuData">
                    <li class="menu-block float-left" v-if="!block.disabled" :key="block.label">
                        <h3>
                            <nuxt-link v-if="block.to" :to="block.to">{{ block.label }}</nuxt-link>
                            <div class="no-title" v-else="">{{ block.label }}</div>
                        </h3>
                            <div v-for="item in block.items" :key="typeof item === 'string' ? item : item.label" class="anchor-link">
                                <nuxt-link
                                        v-if="typeof item === 'string'"
                                        :to="{ path: block.to, hash: item }"
                                >- {{ item }}</nuxt-link>
                                <nuxt-link
                                        v-if="typeof item === 'object'"
                                        :to="{ path: (item.to || block.to), hash: item.anchor }"
                                >- {{ item.label }}</nuxt-link>
                            </div>
                    </li>
                </template>
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
                        'Experience',
                        'Organizing Committee',
                        { label: 'Code of Conduct', to: '/codeofconduct/' },
                        { label: 'Diversity', to: "/diversity/" },
                        { label: 'Eco-friendly efforts', to: '/sustainability/' },
                        { label: 'COVID-19 Statement', to: '/covid-19-statement/' }
                    ]
                }, {
                    label: 'Participate',
                    to: '/participate/',
                    items: [
                        'Register / Tickets',
                        'Call for proposals',
                        { label: 'Propose a talk', to: "/talk-poster-cfp/" },
                        { label: 'Propose a tutorial', to: "/tutorial-cfp/" },
                        { label: 'Propose a sprint', to: "/sprint/" },
                    ]
                }, {
                    label: 'Program',
                    disabled: true,
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
                        'Getting there',
                        'Hotel and local info',
                        'Child care',
                        'Things to do'
                    ]
                }, {
                    label: 'Sponsors',
                    to: '/sponsors/',
                    items: [
                        'Sponsoring',
                        'Sponsors',
                        'Community Sponsors'
                    ]
                }]
            }
        }
    }
</script>

<style lang="sass">


</style>
