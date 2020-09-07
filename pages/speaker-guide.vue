<template>
    <div>
        <BlockHeaderPlain title="Speaker Guide">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>JupyterCon Speaker Guide</h1>
            <hr/>
            <p>
                Below you will find important information you will need as a speaker.
                Please read through this information carefully and note the deadlines especially.
                In particular, the final deadline for submitting recorded talks is Friday, Sep 18, though we encourage
                you to upload your talk early to give us much-needed time to post-process videos before the conference.
            </p>

            <h2>Recording Equipment</h2>
            <p>
                The audio and video quality of the prerecorded talks and live sessions is important.
                The easiest and best way to improve the audio and video recording quality is to use a separate microphone
                (we suggest a lapel/lavalier mic) and to use a video light (we suggest a ring light).
                We put together a list of suggested products in a <a href="https://docs.google.com/spreadsheets/d/1dFg0zg8aJa4PfupsiZsIEiXUu3ta748JFztcpsmjPPQ/edit?ts=5f480527&pli=1#gid=0">Google spreadsheet</a>.
            </p>

            <h2>Speaker Coaching</h2>
            <p>
                We will be hosting a series of one-hour Speaker Coaching Sessions.
                You are invited to join us at one of the available time slots below to learn tips and tricks for how to make a quality online talk,
                or have a coach look at your recording setup. For those who are unable to join one of these time slots,
                a session will be recorded and sent out to speakers afterward. Note that the session times given below are in UTC,
                and the local time for you may not be on the same day as listed.
            </p>

            <ul>
                <li>Monday, September 7, 1600-1700 UTC (<a href="https://www.starts-at.com/e/?t=1600&d=2020-09-07&tz=UTC">Local Time</a>)</li>
                <li>Monday, September 7, 2300-2400 UTC (<a href="https://www.starts-at.com/e/?t=2300&d=2020-09-07&tz=UTC">Local Time</a>)</li>
                <li>Tuesday, September 8, 1500-1600 UTC (<a href="https://www.starts-at.com/e/?t=1500&d=2020-09-08&tz=UTC">Local Time</a>)</li>
                <li>Wednesday, September 9, 0230-0330 UTC (<a href="https://www.starts-at.com/e/?t=0230&d=2020-09-09&tz=UTC">Local Time</a>)</li>
            </ul>

            <h2>Recording your talk</h2>
            <p>
                You may record your talk in a variety of ways. Some suggestions:
            </p>

            <ul>
                <li> Use Webex (see below) or Zoom to record yourself giving your talk. You can share your screen and have a separate window showing you on your computer or phone camera. See below for more information about recording in Webex through our Webex account.</li>
                <li> On a Mac, use Quicktime to create a screen recording with audio.</li>
                <li> On Windows 10, use the Windows Game Bar (Win + G) to create a screen recording with audio.</li>
                <li> Use Keynote or Powerpoint to record your presentation with slides and audio.</li>
                <li> Use <a href="https://obsproject.com/">OBS</a>. This popular cross-platform open-source software is slightly more technical to use, but is very flexible to arrange a screen recording and your camera on the same screen, and can create high-quality recordings. </li>
                <li> Use commercial screen recording software such as Camtasia.</li>
            </ul>

            <p>
                It is important that you make sure your recording length is within the time limit set for your talk and does not go over
                (it may be shorter than the time limit, though). Recorded talks that go over the time limit may be cut off.
            </p>

            <h3>Using JupyterCon’s recording room on Webex</h3>

            <p>
                We have dedicated a Webex account available for speakers to record their presentations, if they would like to use Webex.
                To use our Webex account, please first reserve a time on the <a href="https://docs.google.com/spreadsheets/d/1tDxi0sBSFKJUogVZlqd2-o0ms_LnSbCYtH3DJfUIgQ8/edit#gid=0">Google Sheet</a>
                listing your name in all the blocks you will reserve (blocks are in increments of 30 minutes).
            </p>

            <p>
                Then, log in to Webex during your reserved time slot(s) using the credentials you received by email,
                and start a new meeting. Before setting up, review our <a href="https://drive.google.com/file/d/1TwR0-0xFOiwVYe0r9tE8Jc7VtghjVWjb/view?usp=sharing">suggestions</a>
                for recording a webcast.
                Once in the Webex meeting room, run a check by recording a few minutes of your presentation locally and reviewing the recording for quality.
                You may record your talk locally or on the cloud, but note that cloud recordings may not be available for immediate play-back
                (could take up to 24 hours to populate). See the instructions for <a href="https://help.webex.com/en-us/jfgavq/Record-a-Cisco-Webex-Meeting-on-Your-Computer">local recording</a>
                and instructions for <a href="https://help.webex.com/en-us/7xerlg/Record-a-Cisco-Webex-Meeting-in-the-Cloud-Slow-Channel">cloud recording</a>.
            </p>

            <h2>Uploading your talk</h2>

            <p>
                Once your talk/poster/tutorial is recorded, please upload it and any other supporting documents to our Dropbox.
                Files are due no later than <strong>September 18</strong> (note that this is a week later than we originally requested),
                but we ask that you upload as soon as your files are ready and do not wait until that deadline.
                This will allow us time for video post-processing before the conference.
            </p>

            <p>
                In addition to the video, you may upload supplementary files, such as your slides or a Jupyter notebook.
                Uploaded files should be named with the proposal submission number and your last name, separated by a dash
                (append numerals if you have more than one file of the same type).
            </p>

            <p>
                For example:
            </p>

            <ul>
                <li>proposalNumber-LastName.mp4</li>
                <li>proposalNumber-LastName.ipynb</li>
                <li>proposalNumber-LastName.pdf</li>
            </ul>

            <p>
                It is very important that you name your files correctly and consistently.
            </p>

            <p>
                Once your files are properly named, use the links we provided via email and upload them to the file drop corresponding to your talk track or proposal type.
            </p>

            <p>
                Thank you again for all your contribution to the JupyterCon program. We are excited to see your talks, tutorials, and posters!
            </p>

            <p>
                -The JupyterCon Organizing Committee
            </p>
        </div>
        <DesktopFooter />
    </div>
</template>

<script>
    import BlockHeaderPlain from "../components/BlockHeaderPlain";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "speaker-guide",
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
