<template>
    <div>
            <BlockHeader :buttons="false" title="Talks and Posters" tall>
            <template v-slot:media>
                <img src="~assets/images/talk.jpg"/>
                <img class="overlay-circle" src="~assets/svg/circle-dashed-white-facing-left.svg">
            </template>
            <template v-slot:content>
                <div class="header-content">
                <h2>Propose a talk or poster</h2>
                    <slot>What lessons do you have to share with the Jupyter community? Have you developed good workflows using Jupyter? Have you solved tricky Jupyter deployment challenges? Do you have a great tool for the Jupyter community? Do you have an interesting application using Jupyter? What do you wish you would have known when starting to use Jupyter?  Propose a talk or poster at the JupyterCon!
                    </slot>
                    <slot>
                                <a class="button" style="border-color: white; color: white; margin-top: 20px"  :href="pyDataBaseUrl">Submit Talk or Poster Proposal</a>
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

            <a class="button" :href="pyDataBaseUrl">Submit Talk or Poster Proposal</a>

            <h2>Talks at JupyterCon 2020</h2>

                <p>
                    JupyterCon talks are 30 minutes long. Talks will be pre-recorded and posted online throughout the week of October 12-16. "Watch parties" may be organized throughout the week to view selected talks with live chat. Some time after a group of talks are posted, join a live speaker panel for a Q&A with several speakers. Talks will be available to watch after the conference.
                </p>

                <p>
                 Talk presenters will receive a free main conference pass. Talk presenters will also receive a speaker kit, including a quality microphone, halo light, branded t-shirt, and other swag.
                </p>

                <p>
                    Talks are organized into the following tracks:
                </p>

                <h4>Enterprise Jupyter Infrastructure</h4>

                    <p>
                        Talks that address deploying Jupyter and JupyterHub at scale in industry, government, high-performance computing, science, education, and other settings. Topics include DevOps, scaling services, security concerns, regulation compliance, and more.
                    </p>

                <h4>Jupyter in Education</h4>

                    <p>
                        Talks that address how to teach and learn using Jupyter in a variety of settings.
                    </p>

                <h4>Jupyter in scientific research</h4>

                    <p>
                        Talks that address how Jupyter is used in specific scientific research fields, such as medical research, astronomy, physics, climate change, meteorology, and more.
                    </p>

                <h4>Data science applications</h4>

                    <p>
                        Talks that address how Jupyter is used by data science practitioners in industry, government, and elsewhere.
                    </p>

                <h4>Jupyter community: tools and practices</h4>

                    <p>Talks that address the community tooling and best practices in the Jupyter ecosystem. Community tools include frontends, kernels, extensions, and other tools in the Jupyter ecosystem. Community practices include how Jupyter is used in a workflow and introspection into the Jupyter community itself.</p>

            <h2>Posters at JupyterCon 2020</h2>
    <img src="~assets/images/poster.jpg" class="float-right" style="margin-left:30px;"/>
                <p>
                    The poster session is a forum for ideas to be presented in a concise, visually appealing way. Posters can be work in progress or the highlights of a project you would like to share and discuss. Posters are shared as a static pdf file. We also encourage you to consider linking to an ‘executable’ and ‘interactive’ poster, such as a <a href="https://voila.readthedocs.io/en/stable/">Voilà dashboard</a>. Show us how you tell stories with Jupyter.
                </p>

                <p>Anyone is welcome to submit a poster, including researchers, practitioners, enthusiasts, and students.</p>

                <p>
                    A poster presentation consists of:
                </p>

                <ul>
                    <li> A small thumbnail image (JPG or PNG) for our poster gallery</li>
                    <li> A poster pdf file</li>
                    <li> A short description, which may include a link to an interactive site, such as a Voilà dashboard</li>
                    <li> A short video (at most 2 minutes) introducing your project</li>
                </ul>

            <h2>Guidelines for proposing a talk or poster</h2>

                <h3>Speaker Profile</h3>

                    <p>
                        To propose a talk or poster, you will first need to create a speaker profile. This includes information such as your name (as you would like it to appear in the conference program), and the following optional information, which will be published as a part of the conference program if your talk is accepted:
                    </p>

                    <ul>
                        <li>a short biography telling the audience a little about you</li>
                        <li>a photo</li>
                        <li>a GitHub and/or Twitter handles to connect with you</li>
                    </ul>

                    <p>
                        The primary presenter should submit the proposal, and afterwards the proposal can be edited to add other authors.
                    /p>

                <h3>Proposal</h3>

                    <p>
                        A talk or poster proposal must include the following information that will be listed publicly in the conference program for accepted talks or posters.
                    </p>

                    <ol>
                        <li>
                            <strong>Title:</strong> Give your talk a title that accurately describes its content and focus to the potential attendees.
                        </li>
                        <li>
                            <strong>Audience:</strong> Describe what level of programming/coding and other topic-specific knowledge, experience or expertise your talk is aiming for. Will the attendees need multiple skills or proficiency in tools other than Jupyter notebooks?<br>
                            ‘Advanced’, ‘Intermediate’, and ‘Beginner’ may mean different things to different people. Feel free to include any additional details regarding prerequisites for your talk, as well as what audience may benefit from it. 
                        <li>
                            <strong>Brief summary:</strong> Submit a short paragraph describing the topic and key takeaways for attendees. The description will be included in the conference program announcements, should it be selected.
                        </li>
                        <li>
                            <strong>A detailed outline:</strong> This is a self-contained statement that summarises the objective of the talk or poster, its outline, central thesis, and key takeaways. After reading the description, the audience should have an idea of the overall presentation and know what to expect. The description should also make clear what background knowledge is expected from the attendees. Include links to relevant source code, articles, videos, or other information that add context to your proposal.
                        </li>
                        <li>
                            <strong>Your affiliation:</strong> for the purposes of this talk or poster.
                        </li>
                    </ol>

            <h2>Talk and poster proposal submission FAQs</h2>

                <ol>
                    <li>
                        <p class="question">
                            What can I do to increase the likelihood of my talk/poster being accepted?
                        </p>
                        <p>
                            Here are some common pitfalls that could lead to the proposal being rejected:
                        </p>
                        <ul>
                            <li>Submit early. Submissions can be modified up until the submission deadline.</li>
                            <li>Ensure your talk will appeal to the wider Jupyter community. If your talk topic addresses a narrow segment of issues, users, or applications, consider shifting focus or highlighting best practices and themes that apply to a more general audience, or consider submitting a more narrowly-focused poster. People from many fields and backgrounds attend JupyterCon, which can lead to rich discussions among attendees that would not normally have a chance to interact with each other. What lessons have you learned that can benefit others in the Jupyter community that may not be from your specific field or application?</li>
                            <li>Take a look at the <a href="https://conferences.oreilly.com/jupyter/jup-ny-2017/public/schedule/grid/public">JupyterCon 2017</a> and <a href="https://conferences.oreilly.com/jupyter/jup-ny/public/schedule/full/public">JupyterCon 2018</a> conference schedules for previously accepted talks.</li>
                            <li>Clearly identify who your target audience is, what background is required for attendees to benefit from your presentation, and what the key takeaways are.</li>
                            <li>Get feedback, especially from those in your target audience.</li>
                        </ul>
                    </li>
                    <li>
                        <p class="question">
                            What should I avoid in my talk proposal?
                        </p>

                        <p>
                            Here are some common pitfalls that could lead to the proposal being rejected:
                        </p>

                        <ul>
                            <li><strong>Overly long proposal</strong> Keep it simple, clear and focused. Good proposals provide the most important information within the brief summary.</li>
                            <li><strong>Future work</strong> While talking about future work is interesting and could be mentioned in your talk, the core content of the talk should already be shaped, and you should be able to describe it in your proposal.</li>
                            <li><strong>Sales pitches</strong> We are a community of open source developers and users of open source scientific computing tools. You can reference your closed-source product or platform, but the audience will find the talk more interesting if they can try your techniques within the Jupyter ecosystem. Your problem definition, proposed techniques, broad issues you solved, and business domain might be interesting, but sales pitches and "how to use our product" talks are typically rejected.</li>
                            <li><strong>Repeated Talk</strong> We have a strong preference for new material and fresh faces, and as such, if your talk is already available online it is unlikely to be accepted for the conference.</li>
                        </ul>
                    </li>
                    <li>
                        <p class="question">
                            I don't have a good microphone/light/setup for recording a talk.
                        </p>

                        <p>
                            We will be sending a speaker kit to accepted talk presenters that will include a light, microphone, and tips for how to record a good talk. We are happy to review an early iteration of your recording and give you feedback on the recording as well.
                        </p>
                    </li>

                </ol>

                <p>
                    The tips above were adapted from the PyData resources. We also recommend checking out blog posts by <a href="http://www.craigkerstiens.com/2012/06/19/pro-tips-for-conference-talks/">Craig Kerstiens</a> and <a href="https://hynek.me/articles/speaking/">Hynek Schlawack</a> for more great advice on this topic.
                </p>

            <h2>Review Process</h2>

                <p>
                    Talks and posters will each be reviewed by several community reviewers in open reviews (i.e. identities of the submitters and reviewers are known to each other). The proposals and reviews will be submitted to the co-chairs of each track, who then will make a decision on which talks and posters should be accepted in the JupyterCon 2020 program. Lastly, the JupyterCon 2020 Organizing Committee will review the selected proposals for the final approval. All the submitters will be notified of the outcome. Those whose talks and posters have been accepted will be invited to confirm their participation. The Program Committee will prepare a schedule of the accepted talks.
                </p>

                <p>
                    Reviewers play an essential role in creating great JupyterCon programming. Sign up to be a reviewer <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzEoFUh6zb8liiWeP45PjyUtc0rlE-GPSR-UyNRnfR6WqayA/viewform">here</a>.
                </p>

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
