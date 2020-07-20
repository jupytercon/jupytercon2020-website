<!-- Other possible pics:

https://www.flickr.com/photos/oreillyconf/35997076364/in/album-72157687931834596/
https://www.flickr.com/photos/oreillyconf/36691643061/in/album-72157687931834596/
https://www.flickr.com/photos/oreillyconf/36951297996/in/album-72157687931834596/
https://www.flickr.com/photos/oreillyconf/30341560138/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/30341563328/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/29272808917/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/29272824647/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/44209104421/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/42422716290/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/44237793982/in/album-72157698903074851/
https://www.flickr.com/photos/oreillyconf/44286557691/in/album-72157698903074851/
-->

<template>
    <div>
            <BlockHeader :buttons="false" title="Tutorials" tall>
            <template v-slot:media>
                <img src="~assets/images/tutorial.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                <h2>Propose a tutorial</h2>
                    <slot> The JupyterCon organizing committee would like to invite all commmunity members to submit a tutorial for JupyterCon 2020. 
                    </slot>
                    <slot>
                                <a class="button" style="border-color: white; color: white; margin-top: 20px"  :href="pyDataBaseUrl">Submit Tutorial Proposal</a>
                                </slot>
                </div>

            </template>
        </BlockHeader>



        <div class="main maincontent grey-background">
            <h2>Dates to remember</h2>
            <p>
            Authors submit proposals by <s>Monday, July 20, 2020</s> Wednesday, July 22, 2020 (<a href="https://en.wikipedia.org/wiki/Anywhere_on_Earth">Anywhere on Earth</a>)<br/>
            Authors receive proposal accept/decline decision August 10-12, 2020<br/>
            Authors upload talks by September 11, 2020<br/>
            </p>

            <a class="button" :href="pyDataBaseUrl">Submit Tutorial Proposal</a>

            <h2>Guidelines for proposal submission</h2>

                <p>
                    As with the talks, we are looking for tutorials that will advance the Jupyter ecosystem, foster this community, and shape its future. All the content will be streamed online and should cover 3 hours with a mixture of video presentation, hands-on exercises and knowledge checks/ self-assessment (e.g. using nbgrader). Conference attendees will be able to access the tutorial contents on-demand. 
                    In addition, we will set a 1 hour office hour over the main conference days (day and time to be scheduled around tutorial leader availability).
                </p>

                <p>
                    Please note: Each presenter is limited to giving two tutorials only, either as the main lead or a co-lead/assistant. Tutorial presenters will receive a free conference tutorial week pass. Tutorial presenters will also receive a speaker kit, including a quality microphone, halo light, branded t-shirt, and other swag.
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
                        <strong>Past experience:</strong> Please summarize your teaching or public speaking experience, your experience with the subject of the tutorial, and share anything else that would help us understand and gauge your abilities as an instructor. If available, include a link to a video and slides from the tutorial itself (if it’s been presented before), or your other professional presentations. This section is for the reviewers’ benefit only and will not be published on the JupyterCon website. We also would like to know if you have past experience creating recorded or video content. This will help us to better support tutorial leads and plan our speaker packs accordingly.
                    </li>
                    <li>
                        <strong>Requests:</strong> Let us know if you have specific needs or special requests. We are prepared to accommodate requests that involve accessibility or restrictions on when your office hour can be scheduled. 
                    </li>
                    <li>
                        <strong>Accessibility:</strong> We will accommodate disability-related needs wherever possible. The merit of your tutorial will be judged independently from any request made here. This section will not be visible to attendees.
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
                                    Material that clearly should be presented as a tutorial (rather than a talk). Tutorial spaces are limited, and if the material can be presented more concisely, and to a bigger audience by turning it into a talk, we prefer that.
                                </li>

                                <li>
                                    Thoughtfulness regarding time. We like to see that submitters have considered how much is reasonable to cover in a given time period and how the material might change based on the audience. To demonstrate this, you may choose to include what topics could run over as well a time for hands-on exercises and self-assesment.
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
    import BlockHeader from "../components/BlockHeader";
    import DesktopFooter from "../components/DesktopFooter";

    export default {
        name: "proposals",
        components: {DesktopFooter, BlockHeader},
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    @import 'assets/scss/common';
                .header-content {
        margin: 80px 100px;
        color: white;
        h2 {
            font-size: 30px;
        }
    }


    .menubar {
        position: relative;
        z-index: 1;
    }
    .maincontent {
        padding: 100px;
    }
    .question {
        padding-top: 2em;
        font-weight: bold;
    }
</style>
