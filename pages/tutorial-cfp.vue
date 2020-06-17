<template>
    <div>
        <BlockHeaderPlain title="Propose a tutorial">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>

        <div class="main grey-background">

            <p>
                Do you think that you would be able to assemble 3 hours of material and lead a classroom full of JupyterCon attendees through learning a new skill, library, or technology? Then you might want to apply to be one of our tutorial instructors for JupyterCon 2020!
            </p>

            <p>
                The tutorials will be open October 5-9, 2020.
            </p>
            <a class="button" :href="pyDataBaseUrl">Submit</a>

            <h2>Guidelines for proposal submission</h2>

                <p>
                    As with the talks, we are looking for tutorials that will advance the Jupyter ecosystem, foster this community, and shape its future. Each tutorial session runs for 3 full hours plus a break for coffee or tea. There is both a morning tutorial session and an afternoon tutorial session on the 2 days  preceding the main conference. This year, the tutorial days are on Monday, 10th of August, 2020 and Tuesday, 11th of August, 2020 in the same venue that hosts the main conference days that follow.
                </p>

                <p>
                    Please note: Each presenter is limited to giving two tutorials only, either as the main lead or a co-lead/assistant.
                </p>

            <h2>Proposing a tutorial</h2>

                <p>Your proposal should include the following:</p>

                <ol>
                    <li>
                        <strong>Title:</strong> Give your tutorial a title that accurately describes its content and focus to the potential participants.
                    </li>
                    <li>
                        <strong>Submitting author(s):</strong> Provide the names of the main presenters or facilitators.
                    </li>
                    <li>
                        <strong>Brief summary:</strong> Submit a high-level description of the tutorial, limited to ~400 characters. The description will be included in the conference program announcements, should it be selected
                    </li>
                    <li>
                        <strong>Audience:</strong> Describe what level of programming/coding and other topic-specific knowledge, experience or expertise your tutorial is aiming for. Will the attendees need multiple skills or proficiency in tools other than Jupyter notebooks?<br>
                        ‘Advanced’, ‘Intermediate’, and ‘Beginner’ may mean different things to different people. Feel free to include any additional details regarding prerequisites for your tutorial, as well as what audience may benefit from it.
                    </li>
                    <li>
                        <strong>Format:</strong> List what instructional tools you will use in the proposed tutorial. Describe what instructional methods you intend to employ to best facilitate active learning for the entire duration of the tutorial.
                    </li>
                    <li>
                        <strong>Outline:</strong> List the topics and activities you will guide the participants through during your 3-hour tutorial. Please err on the side of ‘too much detail’ rather than ‘not enough’. Include timing notes, estimating what portion of your tutorial you’ll dedicate to each major topic (usually there are 2-5 of those). The outline will not be shared with conference attendees but will provide the reviewers with greater insight on your tutorial content.
                    </li>
                    <li>
                        <strong>Past experience:</strong> Please summarize your teaching or public speaking experience, your experience with the subject of the tutorial, and share anything else that would help us understand and gauge your abilities as an instructor. If available, include a link to a video and slides from the tutorial itself (if it’s been presented before), or your other professional presentations. This section is for the reviewers’ benefit only and will not be published on the JupyterCon website.
                    </li>
                    <li>
                        <strong>Requests:</strong> Let us know if you have specific needs or special requests. We are prepared to accommodate requests that involve accessibility, audio, or restrictions on when your tutorial can be scheduled.
                    </li>
                    <li>
                        <strong>Accessibility:</strong> We will accommodate disability-related needs wherever possible. The merit of your tutorial will be judged independently from any request made here. This section will not be visible to attendees.
                    </li>
                    <li>
                        <strong>Assistance</strong> We’re considering making tutorial assistants available to the JupyterCon 2020 instructors. This would be volunteers with Jupyter experience who will provide one-on-one help during the tutorial when participants are working on exercises. Would you prefer having assistants during your tutorial? If so, what participant-assistant ratio would be optimal?
                    </li>
                </ol>
            <h2>Tutorial proposal submission FAQs</h2>
                <ol>
                    <li>
                        <p class="question">
                            What can I do to increase the likelihood of my tutorial being accepted?
                        </p>
                        <p>
                            Things we like to see included:
                            <ul>
                                <li>
                                    A clear description of the target audience. This helps our attendees know if the tutorial is right for their level of knowledge and skills, and allows us to assess how well the presenter knows the audience he is targeting with his material.
                                </li>

                                <li>
                                    Reasonable learning goals. These should demonstrate what the attendees will learn and be able to do after attending the tutorial.
                                </li>

                                <li>
                                    Readability counts. We like outlines that are easy to understand. Markdown is a great tool for giving your submission clear formatting, allowing us to distinguish, at first glance, between topics and sub-topics. (If you are new to Markdown, <a href="https://guides.github.com/features/mastering-markdown/">this tutorial</a> is great!) After submitting your proposal, please make sure your submission is rendered properly.
                                </li>

                                <li>
                                    Readability counts. We like outlines that are easy to understand. Markdown is a great tool for giving your submission clear formatting, allowing us to distinguish, at first glance, between topics and sub-topics. (If you are new to Markdown, <a href="https://guides.github.com/features/mastering-markdown/">this tutorial</a> is great!) After submitting your proposal, please make sure your submission is rendered properly.
                                </li>

                                <li>
                                    Material that clearly should be presented as a tutorial (rather than a talk). Tutorial spaces are limited, and if the material can be presented more concisely, and to a bigger audience by turning it into a talk, we prefer that.
                                </li>

                                <li>
                                    Thoughtfulness regarding time. We like to see that submitters have considered how much is reasonable to cover in a given time period and how the material might change based on the audience. To demonstrate this, you may choose to include what topics could run over, how you’ll provide buffer time (if you need it), and what topics you might adjust if things go unexpectedly fast or slow.
                                </li>
                            </ul>
                        </p>
                    </li>
                    <li>
                        <p class="question">
                            What should I avoid in my tutorial proposal?
                        </p>
                        <p>
                            Your tutorial is less likely to be accepted if:

                            <ul>
                                <li>
                                    It requires to download large packages or tools on the day. Ideally, the install/set-up instructions should be made available in advance to allow participants to prepare
                                </li>

                                <li>
                                    It requires using commercial or proprietary tools.
                                </li>

                                <li>
                                    It criticizes other programming languages, platforms, and paradigms.
                                </li>
                            </ul>

                            We will not accept any tutorial that violates the Code of Conduct.
                        </p>
                    </li>
                    <li>
                        <p class="question">
                            What should my timing notes look like? How precise do I need to be?
                        </p>
                        <p>
                            We request you provide a rough estimate of how much time (or percentage of the tutorial) you’ll dedicate to each major topic (not subtopics). We recommend these timings to be no more precise than 30-minute increments. Even though some leeway is allowed, please don’t give your timings down to the minute!<br>
                            Alternatively, you are welcome to provide the portion of the time you expect to spend on each major topic. Please indicate whether you are using percentages or minutes.
                        </p>
                    </li>
                    <li>
                        <p class="question">
                            Why an outline with timings?
                        </p>
                        <p>
                            It will help the reviewers to assess what topics your tutorial will focus most, as well as the level of knowledge and experience it suits best. For example, a tutorial that spends 2.5 hours on basic concepts and ends with a brief tour of advanced features is more appropriate for a beginner audience than one with the opposite structure.<br>
                            Furthermore, it will help the first-time tutorial presenters to better prepare and assess beforehand if their planned instructional material can be realistically presented in the allotted time.<br>
                            It’s fine if these timings slightly change when you give the tutorial.
                        </p>
                    </li>
                    <li>
                        <p class="question">
                            Who should apply?
                        </p>
                        <p>
                            While we don’t speak in absolutes, we’d like to see that presenters have experience in instruction and public speaking. This will give us a certain level of assurance that you’re prepared to deliver on what you are proposing.
                        </p>
                    </li>
                </ol>
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
    .question {
        padding-top: 2em;
        font-weight: bold;
    }
</style>
