<template>
    <div class="main">
        <MenuBar class='menubar'/>
        <div class="background">
            <div :class="tall ? 'content-tall' : 'content'">
                <slot name="content">
                    <div class="tickets" v-if="buttons">
                        <a
                                class="button hollow"
                                href="https://www.eventbrite.com/e/jupytercon-2020-tickets-109183767588">
                            Register / Tickets
                        </a>
                        <nuxt-link class="button hollow" :to="{path: '/covid-19-statement/'}">COVID-19 Statement</nuxt-link>
                    </div>
                </slot>
            </div>
            <img src="~assets/svg/circle-dashed-orange.svg" class="halfcircle" v-if="!tall"/>
            <div class="movie">
                <slot name="media">
                    <img src="~assets/images/jupiterio.jpg"></img>
                    <div class="credit">
Credit: <a href="https://photojournal.jpl.nasa.gov/catalog/PIA02879">NASA/JPL/University of Arizona</a>
</div>
                </slot>
            </div>
        </div>
        <div class="top">
            <div class="page-title float-left">
                <h1><span>{{title}}</span><br/><span class="subtitle">{{subtitle}}</span></h1>
            </div>
            <div class="side-content float-left">
                <slot name="side-content">
                <div>
                    <span class="grey">Online Conference <br/></span>
                    <span class="orange">5-9 October: Tutorials <br/>
                        12-16 October: Conference <br/>
                        17 October: Sprints
                    </span>
                </div>
                </slot>
            </div>
        </div>
    </div>
</template>


<script>
    import MenuBar from "../components/MenuBar";
    export default {
        name: "BlockHeader",
        components: {MenuBar},
        props: {
            title: {
                type: String,
                default: 'Untitled'
            },
            subtitle: {
                type: String,
                default: null
            },
            buttons: {
                type: Boolean,
                default: true,
            },
            tall: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    .menubar {
        position: relative;
        z-index: 1;
    }
    .main {
        position: relative;
        background-color: white;
        width: 100%;
        height: 100%;
        height: 800px;
        .top {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin-left: 120px;
            height: 284px;
            .page-title {
                width: 60%;
                margin-top: 110px;
                color: $figma-orange;
                h1 {
                    line-height: 100%;
                    font-size: 96px;
                }
                .subtitle {
                    margin-top: -30px;
                    color: $figma-grey2;
                }
            }
            .side-content {
                z-index: -1;
                background-color: $figma-grey3;
                padding-top: 140px;
                padding-left: 30px;
                width: 40%;
                height: 100%;
                div {
                    font-size: 24px;
                    line-height: 31px;
                    font-family: $figma-font-gosha;

                    .grey {
                        color: $figma-grey;
                        position: relative;
                        top: 2px;
                    }

                    .orange {
                        color: $figma-orange
                    }
                }
            }

        }
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 800px;
            overflow: hidden;
            .content {
                position: absolute;
                background-color: $figma-orange;
                height: 212px;
                width: 541px;
                left: 0px;
                bottom: 0px;
                .tickets {
                    color: white;
                    margin-left: 250px;
                    margin-top: 30px;
                    .button {
                        color: white;
                        border-color: white;
                        width: 210px;
                    }

                }
            }
            .content-tall {
                position: absolute;
                background-color: $figma-orange;
                height: 434px;
                width: 541px;
                left: 0px;
                bottom: 0px;
            }
            .halfcircle {
                position: absolute;
                bottom: 0px;
                left: 0;
            }
            .movie {
                position: absolute;
                left: 541px;
                top: 284px;
                bottom: 0px;
                right: 0px;
                video, img {
                    height: 516px;
                    object-fit: cover;
                    width: 100%;

                }
                .credit {
                    position: absolute;
                    bottom: 0px;
                    right: 3px;
                    text-align: right;
                }
                .credit, .credit a {
                    font-size: 12px;
                    color: #a2a2a2;
                }
                .credit a {
                    text-decoration: underline;
                }

            }
        }
    }

</style>
