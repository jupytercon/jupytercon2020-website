<template>
    <div>
        <BlockHeaderPlain title="Sprints">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <img src="~assets/images/sprint.jpg" class="float-right"/>
        <div class="main grey-background">
            <h1>Sprint with the Jupyter community!</h1>
            <hr/>
            <h3>What is the Sprint Event?</h3>
            <p>The JupyterCon 2020 Sprint Event is a 24-hour digital event following the conference. Attendees will have the opportunity to meet online active contributors and maintainers of their favorite open source projects, exchange ideas, collaborate in real time, and create lasting connections.</p>

            <h3>Why should I join a sprint?</h3>
            <p>The best part of tech conferences is the people - and sprints are all about people. During the Sprint Event, you will have an opportunity to meet online, learn, and collaborate with peers from the Jupyter community. Not only will you be able to leave with a contributor badge, but you’ll also make new friends and contacts in the industry, public services, and academia.</p>

            <h3>How can I lead a project sprint?</h3>
            <p>If you’d like to represent a project from the Jupyter ecosystem at the Sprint Event, please complete <a href="https://forms.gle/Dzy1A1x9N8SHHu6r7">this form</a> by 15th of July, 2020. Projects will undergo a selection process to ensure that participating projects are prepared to provide an inclusive and engaging experience for sprint participants.</p>

            <h3>How can I join the Sprint Event?</h3>
            <p>Once we’ve selected projects that will be eligible to participate, we’ll open sign-ups for sprint participants. To receive an email notification when participation forms open, you can select to be notified when you purchase your ticket for the conference on Eventbrite.</p>

            <h3>What is the venue for the sprints?</h3>
            <p>Sprints will be online, with the aim of connecting people from all over the world, so you will be able to join from anywhere!</p>
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
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
    .menubar {
        position: relative;
        z-index: 1;
    }
    .main {
        padding: 100px;
    }
</style>
