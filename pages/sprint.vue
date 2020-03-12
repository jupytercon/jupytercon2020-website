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
        <div class="main grey-background">
            <h1>Sprint with the Jupyter community!</h1>
            <hr/>
            <h3>What is the Sprint Day?</h3>
            <p>The JupyterCon 2020 Sprint Day is a day-long event following the conference. Attendees will
                have the opportunity to meet active contributors and maintainers of their favorite open source
                projects, exchange ideas, collaborate in real time, and create lasting connections.</p>

            <h3>Why should I join a sprint?</h3>
            <p>The best part of tech conferences is the people - and sprints are all about people. During the
                Sprint Day, you will have an opportunity to meet, learn and collaborate with peers from the
                Jupyter community. Not only will you be able to leave with a contributor badge, but you’ll also
                make new friends and contacts in the industry, public services, and academia.</p>

            <h3>How can I lead a project sprint?</h3>
            <p>If you’d like to represent a project from the Jupyter ecosystem at the Sprint Day, please
                complete this form by 17th of April, 2020.</p>

            <h3>How can I join the Sprint Day?</h3>
            <p>The Sprint Day is limited to 100 participants. We encourage and prioritize the participation of
                members from underrepresented groups within the tech community. Registration for the Sprint
                Day will open on 24th of April, 2020. Check back on this page or follow @JupyterCon on Twitter
                for updates.</p>

            <h3>What is the venue for the sprints?</h3>
            <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.1371948589067!2d13.382089915807857!3d52.53095187981627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ec58a9dc71%3A0xf9cfe716cbe1ea43!2sInvalidenstra%C3%9Fe%20116%2C%2010115%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1583205258608!5m2!1sen!2sus" width="100%" height="480" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </p>

            <h3>How can I get to the venue?</h3>
            <p>
                The venue is located right in the center of the city, not far from the conference venue (bcc Berlin Congress Center), and the central station, and is well connected to the public transport network.
                Here is some information to help you find your way.
            </p>
            <h4>From the central station (Hauptbahnhof)</h4>
            <p>
                At the central station reach the ground floor and follow the signs to the Europaplatz exit. Cross the street and take one of the following trams (all ca. 3 minutes):
            </p>
            <ul>
                <li>M5 (direction Hohenschönhausen, Zingster Str.)</li>
                <li>M8 (direction Ahrensfelde/Stadtgrenze)</li>
                <li>M10 (direction S+U Warschauer Str.)</li>
            </ul>
            <p>
                Get off after two stops at Naturkundemuseum, and walk two minutes to Invalidenstr. 116, ca. 100 meters.
            </p>
            <h4>From the conference venue</h4>
            <p>
                The two closest stops next to the sprint venue are Nordbahnhof and Naturkundemusem. The shortest connection from Alexanderplatz is the M5 to Naturkundemuseum:
            </p>
            <ul>
                <li>M5 (direction S+U Hauptbahnhof) – 11 minutes, 6 stops.
                <a href="https://wego.here.com/directions/publicTransport/BCC-Berlin-Congress-Center,-Alexanderstra%C3%9Fe,-Mitte,-10179-Berlin:276u33dc-49a0e6d2d9a84f7c96ef7a97d688de53/HERE-Berlin,-Invalidenstra%C3%9Fe-116,-Mitte,-10115-Berlin:276u33db-19451d85dbbe41b4a45ddcf4983e9c10?map=52.52543,13.39976,15,grey">
                    (Directions)
                </a>
                </li>
            </ul>
            <h3>Leaving Berlin after the sprint</h3>
            <p>
                After the sprint the central station is ideal to take your train back or take an airport shuttle to Berlin Tegel airport (TXL).
                If you take off from Berlin Schönefeld airport (SXF) you can reach a train from the central station there first.
            </p>
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
