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
                                <a v-if="typeof item === 'object' && item.url" :href="item.url" target="_blank"
                                >- {{ item.label }}</a>
                                <nuxt-link
                                        v-if="typeof item === 'object' && !item.url"
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
                        { label: 'COVID-19 Statement', to: '/covid-19-statement/' },
                        { label: 'Blog', to: '/blog/' },
                        { label: 'Shop', url: 'https://shop.spreadshirt.com/jupytercon/' }
                    ]
                }, {
                    label: 'Participate',
                    to: '/participate/',
                    items: [
                        { label: 'Register / Tickets', url: "https://www.eventbrite.com/e/jupytercon-2020-tickets-109183767588" },
                        'Call for proposals',
                        { label: 'Propose a talk or poster', to: "/talk-poster-cfp/" },
                        { label: 'Propose a tutorial', to: "/tutorial-cfp/" },
                        'Financial Aid',
                        { label: 'Technical Program Committee', to: '/participate/#tech-program-committee'},
                        { label: 'Community Reviewers', to: '/participate/#Reviewers'}

                    ]
                }, {
                    label: 'Program',
                    items: [
                        { label: 'Schedule - Talks', url: 'https://cfp.jupytercon.com/2020/schedule/general-sessions/' },
                        { label: 'Schedule - Tutorials', url: 'https://cfp.jupytercon.com/2020/schedule/tutorial-sessions/' },
                        { label: 'Speaker Guide', to: '/speaker-guide/' },
                        { label: 'Sprint projects', to: "/sprint/" },
                    ]
                }, {
                    label: 'Sponsors',
                    to: '/sponsors/',
                    items: [
                        'Sponsors',
                        'Sponsoring',
                        { label: 'Community Sponsors', to: "/community-sponsors/" },
                    ]
                }]
            }
        }
    }
</script>

<style lang="sass">


</style>
