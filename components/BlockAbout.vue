<template>
    <div class="about">
        <div class="background">
            <div class="block1"/>
            <div class="block2"/>
            <div class="circle"/>
        </div>
        <div class="overlay">
            <div class="content clearfix">
                <img :src="img" class="float-left"></img>
                <div class="main-text about-text float-left">
                    <h2>{{title}}</h2>
                    <slot>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis risus fames dolor volutpat risus vitae.
                        Malesuada elit nec nibh elementum at faucibus nisl. Scelerisque elit, vel cursus scelerisque. Sed ut
                        malesuada pretium faucibus odio quis
                        congue.</p>
                    </slot>
                    <nuxt-link class="button hollow" to="/about/">Learn More</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
        name: "BlockAbout",
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
            buttons: {
                type: Boolean,
                default: true,
            },
        },
  }
</script>

<style scoped lang="scss">
    @import 'assets/scss/settings';

    .about {
        position: relative;
        background-color: white;
        width: 100%;
        height: 100%;
        height: 800px;
        .background {
            // z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 541px;
            height: 800px;
            .block1 {
                background-color: $figma-orange;
                height: 50%;
            }
            .block2 {
                background-color: white;
                height: 50%;
            }
            .circle {
                position: absolute;
                top: 0;
                right: 0;
                background-color: $figma-grey2;
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
                margin-left: 225px;
                margin-top: 200px;
                .text {
                    width: 400px;
                }
                .about-text {
                    width: 50%;
                    padding-left: 50px;
                    padding-right: 50px;
                    margin-top: -25px;
                    h2 {
                        color: $figma-orange;
                    }
                }
                img {
                    // float: left;
                    // left: 140px;
                    width: 50%;
                    height: 420px;
                    object-fit: cover;
                    // left: 30%;
                    // margin-left: 140px;
                    // margin-top: 221px;
                    // margin-top: 100px;
                    // width: 500px;
                    background-color: transparent;
                }
            }
        }
    }


</style>