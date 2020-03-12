<template>
    <div>
        <BlockHeaderPlain title="Sprints">
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
            <h1>Sprint with the Jupyter community!</h1>
            <hr/>
            <h2>What is the Sprint Day?</h2>
            <p>The JupyterCon 2020 Sprint Day is a day-long event following the conference. Attendees will
                have the opportunity to meet active contributors and maintainers of their favorite open source
                projects, exchange ideas, collaborate in real time, and create lasting connections.</p>

            <h2>Why should I join a sprint?</h2>
            <p>The best part of tech conferences is the people - and sprints are all about people. During the
                Sprint Day, you will have an opportunity to meet, learn and collaborate with peers from the
                Jupyter community. Not only will you be able to leave with a contributor badge, but you’ll also
                make new friends and contacts in the industry, public services, and academia.</p>

            <h2>How can I lead a project sprint?</h2>
            <p>If you’d like to represent a project from the Jupyter ecosystem at the Sprint Day, please
                complete this form by 17th of April, 2020.</p>

            <h2>How can I join the Sprint Day?</h2>
            <p>The Sprint Day is limited to 100 participants. We encourage and prioritize the participation of
                members from underrepresented groups within the tech community. Registration for the Sprint
                Day will open on 24th of April, 2020. Check back on this page or follow @JupyterCon on Twitter
                for updates.</p>

            <h2>What is the venue for the sprints?</h2>
            <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1371948589067!2d13.382089915807857!3d52.53095187981627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ec58a9dc71%3A0xf9cfe716cbe1ea43!2sInvalidenstra%C3%9Fe%20116%2C%2010115%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1583205258608!5m2!1sen!2sus" width="100%" height="480" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </p>

            <h2>How can I get to the venue?</h2>
            <p>[TO BE FILLED BY LOCAL TEAM]</p>
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
    .menubar {
        position: relative;
        z-index: 1;
    }
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
</style>
