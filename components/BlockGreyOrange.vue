<template>
    <div class="participate">
        <div class="background">
            <div :class="right ? 'halfcircle' : 'halfcircle-alt'"/>
            <img src="~assets/svg/circle-dashed-white.svg"  :class="right ? 'quartercircle' : 'quartercircle-alt'"/>
        </div>
        <div class="overlay">
            <div class="content clearfix">
                <slot>
                    <div class="main-text participate-text float-left">
                        <h2>Participate</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                            Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                            malesuada pretium faucibus odio quis
                            congue.</p>
                        <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
                    </div>
                    <img src="~assets/images/speed-network.jpg" class="float-left"></img>
                </slot>
            </div>
        </div>
    </div>
 </template>


<script>
  export default {
        name: "BlockGreyOrange",
        props: {
            title: {
                type: String,
                default: 'Untitled'
            },
            subtitle: {
                type: String,
                default: null
            },
            img: {
                type: String,
                default: null
            },
            right: {
                type: Boolean,
                default: true,
            },
        },
  }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';
    .participate {
        position: relative;
        background-color: $figma-grey2;
        width: 100%;
        height: 100%;
        height: 800px;

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 800px;
            overflow: hidden;
            .quartercircle {
                position: absolute;
                bottom: -212px;
                left: 0;
            }
            .quartercircle-alt {
                visibility: hidden; // TODO
            }
            .halfcircle {
                position: absolute;
                top: 0;
                right: 0;
                background-color: $figma-orange;
                border-top-right-radius: 400px;
                border-bottom-right-radius: 400px;
                height: 800px;
                width: 400px;
            }
            .halfcircle-alt {
                position: absolute;
                top: 0;
                left: 0;
                background-color: $figma-orange;
                border-top-left-radius: 400px;
                border-bottom-left-radius: 400px;
                height: 800px;
                width: 400px;
            }
        }
        .overlay {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            .content {
                margin-right: 122px;
                margin-left: 120px;
                margin-top: 200px;
                color: white;
                .text {
                    width: 400px;
                }
                .button {
                    color: white;
                    border-color: white;
                }
                .participate-text {
                    width: 50%;
                    padding-right: 50px;
                    margin-top: -25px;
                }
                img {
                    width: 50%;
                    height: 420px;
                    object-fit: cover;
                    background-color: transparent;
                }
            }
        }
    }

</style>