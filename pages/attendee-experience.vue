
<template>
    <div>
        <BlockHeaderPlain title="Attendee Experience">
            <template v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <p>
                <a href="https://jupytercon.com">JupyterCon 2020</a> brings you packed programming of tutorials and conference tracks,
                designed from the ground up for an online experience. The vision is a convergence between virtual conference and online learning.
                To implement this vision, the JupyterCon leadership and NumFOCUS devised a plan to deploy a number of interconnected systems and services:
            </p>
            <ul>
                <li>A course platform designed for massive open online courses (MOOCs), using the <a href="https://open.edx.org">Open edX</a> software—the only fully open source modern learning platform.</li>
                <li>A JupyterHub service, integrated with the course platform.</li>
                <li>A self-hosted chat server using Mattermost, the open source Slack alternative, also integrated with the course platform.</li>
                <li>A system to build online courses from content written as Jupyter notebooks, contributed by the community and selected via the tutorials Call for Proposals (CFP).</li>
            </ul>
            <p>
                The conference <a href="https://cfp.jupytercon.com/2020/schedule/tutorial-sessions/">tutorials run on the week starting October 5</a>, and the conference <a href="https://cfp.jupytercon.com/2020/schedule/general-sessions/">regular tracks run on the week starting October 12</a>.
                Most of the presentations are pre-recorded, and the video will be released following the official schedules, and be available for on-demand watching in the course platform thereafter.
                (Videos will become public on the JupyterCon YouTube channel at least two weeks after the conference ends.)
            </p>
            <p>
                The tutorials, presented as online courses, will be complemented by live "office hours" with the speakers, peppered throughout the week.
                These will be held using Webex Meetings, with great care to ensure the safe participation by all attendees.
                Only ticket holders will have access to the online courses and the Webex meetings.
            </p>
            <p>
                Throughout the week, participants are invited and encouraged to engage in the online chat.
                The scheduled release of pre-recorded videos aims to give some time structure to the conversations,
                but the forum is open and will remain open for continued discussion after the scheduled events.
            </p>
            <p>
                Registered participants will have continued access to all the online courses for a minimum of two months after the conference.
                This includes the ability to launch an interactive JupyterHub session from within each course, with the notebooks created by the presenters.
            </p>
            <p>
                Regular conference talks are also pre-recorded—except for keynotes. The talks for JupyterCon are organized in the following tracks,each of which is a (video-based) online course in the platform:
            </p>
            <ol>
                <li>Enterprise Jupyter infrastructure</li>
                <li>Jupyter in education</li>
                <li>Jupyter in scientific research</li>
                <li>Data science applications</li>
                <li>Jupyter community tools</li>
                <li>Jupyter community practices</li>
                <li>Core Jupyter (invited)</li>
                <li>Poster session</li>
            </ol>
            <p>
                The keynote talks are live on Webex Events. We thought long and hard about the security measures to take to protect our community from things like bombing and trolling. The live portions of the programming are available to ticket holders, but the recordings will be made public after the conference has ended.
            </p>
            <a href="http://jupytercon.com/blog">Read about our fabulous keynote speakers in the Jupyter blog!</a>
            <p>
                We are really excited about the way we integrated Jupyter into the authoring and delivery of the conference content. This is just the beginning, and we're sure improvements will be imagined and applied, but what is on offer starting today is a celebration of Jupyter, using Jupyter as the medium!
            </p>
            <blockquote>
                <p>
                    There's still time to join us! Check out the terrific learning opportunities that start with
                    <a href="https://academy.numfocus.org/jupytercon-tutorials/">JupyterCon Tutorials</a>
                </p>
            </blockquote>
            <h2>Instructions for participants</h2>
            <ol>
                <li>Purchase your ticket through Eventbrite</li>
                <li>Create an account in the <a href="https://academy.numfocus.org/">NumFOCUS Academy</a> platform—and this is important—using the <em>same email address</em> you registered with in Eventbrite.</li>
                <li>Your ticket will give you eligibility to enroll in each online course—click the "Enroll" button from each course's About page in the Catalog.</li>
                <li>The courses are open to enroll, but start (i.e., the content is released) on the first day they appear on the schedule.</li>
                <li>Inside each course, the first section will usually be an overview, and include a Launch-in-Binder button, giving you access to an interactive Jupyter session. You log in with the user credentials you created in the NumFOCUS Academy site.</li>
                <li>Each course has a Forum tab that takes you to the correct team and channel for that course. You can view Mattermost inside the course, or open in a new browser tab.</li>
                <li>If you encounter any technical issues, email <a href="mailto:academy-support@numfocus.org">academy-support@numfocus.org</a></li>
            </ol>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "attendee-experience",
        components: {DesktopFooter, BlockHeaderPlain},
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
    h3 {
        font-size: 16px;
    }
    h1, h2, h3 {
        color: $figma-orange;
    }
    .main {
        background-color: $figma-grey3;
        padding: 100px;
    }
</style>
