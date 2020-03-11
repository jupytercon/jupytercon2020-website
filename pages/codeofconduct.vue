<template>
    <div>
        <BlockHeaderPlain title="Code Of Conduct">
            <template  v-slot:side-content>
            </template>
        </BlockHeaderPlain>
        <div class="main">
            <h1>JupyterCon Code of Conduct and Reporting Guide</h1>
            <hr/>
            <h2>Code of Conduct</h2>
            <p>
                Project Jupyter is an engaged and respectful community made up of people from all over
                the world, committed to fostering a productive, harassment-free environment for everyone.
                Please read the full Project Jupyter <a href="https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md">Code of Conduct</a>.</p>

            <h2>At JupyterCon:</h2>
            <p>Fundamentally, we are committed to fostering a productive, harassment-free environment
                for everyone. Rather than considering this code an exhaustive list of things that you can’t
                do, take it in the spirit it is intended - a guide to make it easier to enrich all of us and the
                communities in which we participate.</p>

            <ul>
                <li><strong>Be friendly and patient.</strong></li>
                <li><strong>Be welcoming. </strong>We strive to be a community that welcomes and supports people
                    of all backgrounds and identities. This includes, but is not limited to, members of
                    any ethnicity, culture, national origin, color, immigration status, social and
                    economic class, educational level, sex, sexual orientation, gender identity and
                    expression, age, physical appearance, family status, technological or
                    professional choices, academic discipline, religion, mental ability, and physical
                    ability.
                </li>
                <li><strong>Be considerate.</strong> Your work will be used by other people, and you in turn will
                    depend on the work of others. Any decision you take will affect users and
                    colleagues, and you should take those consequences into account when making
                    decisions. Remember that we're a world-wide community. You may be
                    communicating with someone with a different primary language or cultural
                    background.
                </li>
                <li><strong>Be respectful.</strong> Not all of us will agree all the time, but disagreement is no excuse
                    for poor behavior or poor manners. We might all experience some frustration now
                    and then, but we cannot allow that frustration to turn into a personal attack. It’s
                    important to remember that a community where people feel uncomfortable or
                    threatened is not a productive one.
                </li>
                <li><strong>Be careful in the words that you choose. Be kind to others. Do not insult or
                    put down other community members. Harassment and other exclusionary
                    behavior are not acceptable.</strong> This includes, but is not limited to:
                    <ul>
                        <li>Violent threats or violent language directed against another person</li>
                        <li>Discriminatory jokes and language</li>
                        <li>Posting sexually explicit or violent material</li>
                        <li>Posting (or threatening to post) other people's personally identifying information ("doxing")</li>
                        <li>Personal insults, especially those using racist or sexist terms</li>
                        <li>Unwelcome sexual attention</li>
                        <li>Advocating for, or encouraging, any of the above behavior</li>
                        <li>Repeated harassment of others. In general, if someone asks you to stop, then stop</li>
                    </ul>
                </li>
                <li><strong>Moderate your expectations.</strong> Please respect that community members choose
                    how they spend their time on the project. A thoughtful question about your
                    expectations is preferable to demands for another person's time.
                </li>
                <li><strong>When we disagree, try to understand why.</strong> Disagreements, both social and
                    technical, happen all the time and Jupyter is no exception. Try to understand
                    where others are coming from, as seeing a question from their viewpoint may
                    help find a new path forward. And don’t forget that it is human to err: blaming
                    each other doesn’t get us anywhere, while we can learn from mistakes to find
                    better solutions.
                </li>
                <li><strong>A simple apology can go a long way.</strong> It can often de-escalate a situation, and
                    telling someone that you are sorry is an act of empathy that doesn’t automatically
                    imply an admission of guilt.
                </li>
            </ul>

            <h2>Reporting</h2>
            <p>
                If you believe someone is violating the code of conduct, please report this in a timely
                manner. Code of conduct violations reduce the value of the community for everyone
                and we take them seriously.

                <p>
                    <strong>You can make a personal report by:</strong>
                    <ul>
                        <li><strong>Phone:</strong> Call 617-499-7500 (TODO need a local number); this phone number will be monitored for the duration of the event.</li>
                        <li><strong>In person:</strong> Contact a JupyterCon staff member or visit the customer service desk at
                            conference registration.
                            When taking a personal report, event staff will ensure you are safe and cannot be
                            overheard. They may involve other event staff member to ensure your report is managed
                            properly. This can be uncomfortable, but we'll handle it respectfully and you can bring
                            someone to support you.
                        </li>
                        <li><strong>Email:</strong> Send a message to <a href="">conduct@numfocus.org</a>. Event organizers will respond promptly.</li>
                        <li><strong>Online Form:</strong> <a href="">TODO Missing link</a> (your name and contact information are not required)
                            Our team will help you contact hotel/venue security, local law enforcement, local support
                            (which could include services and transportation as available), or otherwise respectfully
                            assist you to feel safe for the duration of the event.
                        </li>
                    </ul>
                </p>

                <p>
                    Our team will help you contact hotel/venue security, local law enforcement, local support
                    (which could include services and transportation as available), or otherwise respectfully
                    assist you to feel safe for the duration of the event.
                </p>

                <p>
                    Contact information for the following will be provided at the event:
                    <ul>
                        <li>Email</li>
                        <li>Venue security</li>
                        <li>Law enforcement</li>
                        <li>Local sexual assault hot line</li>
                        <li>Non-emergency medical (e.g., urgent care, day clinic)</li>
                        <li>Taxi</li>
                    </ul>
                </p>
            </p>

            <h2>Enforcement</h2>
            <p>For more information about enforcement and what happens after a report is filed, see: <a href="https://numfocus.org/code-of-conduct">https://numfocus.org/code-of-conduct</a></p>

            <h2>Issue Log</h2>
            <p>A summary of reported incidents will be provided after the event.</p>

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
