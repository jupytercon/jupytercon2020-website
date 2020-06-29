<template>
    <div>
            <BlockHeader :buttons="false" title="Sprint" tall>
            <template v-slot:media>
                <img src="~assets/images/sprint.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                <h2>Sprint with the Jupyter Community!</h2>
                    <slot>The JupyterCon 2020 Sprint Event is a 24-hour digital event following the conference. Attendees will have the opportunity to meet online active contributors and maintainers of their favorite open source projects, exchange ideas, collaborate in real time, and create lasting connections.
                    </slot>
                </div>

            </template>
        </BlockHeader>

        <div class="main maincontent grey-background">
            <h3>Why should I join a sprint?</h3>
            <p>The best part of tech conferences is the people - and sprints are all about people. During the Sprint Event, you will have an opportunity to meet online, learn, and collaborate with peers from the Jupyter community. Not only will you be able to leave with a contributor badge, but you’ll also make new friends and contacts in the industry, public services, and academia.</p>

            <h3>How can I lead a project sprint?</h3>
            <p>If you’d like to represent a project from the Jupyter ecosystem at the Sprint Event, please complete <a href="https://forms.gle/Dzy1A1x9N8SHHu6r7">this form</a> by 20th of July, 2020. Projects will undergo a selection process to ensure that participating projects are prepared to provide an inclusive and engaging experience for sprint participants.</p>

            <h3>How can I join the Sprint Event?</h3>
            <p>Once we’ve selected projects that will be eligible to participate, we’ll open sign-ups for sprint participants. To receive an email notification when participation forms open, you can select to be notified when you purchase your ticket for the conference on Eventbrite.</p>

            <h3>What is the venue for the sprints?</h3>
            <p>Sprints will be online, with the aim of connecting people from all over the world, so you will be able to join from anywhere!</p>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeader from "../components/BlockHeader";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "sprint",
        components: {DesktopFooter, BlockHeader},
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
        .header-content {
        margin: 100px 120px;
        color: white;
        h2 {
            font-size: 30px;
        }
    }

    .maincontent {
        padding: 100px;
    }

</style>
