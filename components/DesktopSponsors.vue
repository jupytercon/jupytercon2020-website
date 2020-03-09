<template>
    <div class="sponsors">
        <div class="main-text">
            <div class="clearfix head">
                <div class="float-left">
                    <h2>Sponsors</h2>
                </div>
                <div class="float-right"><a class="button hollow">View all</a></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DesktopSponsors"
  }
</script>

<style scoped lang="sass">
  @import 'assets/scss/settings'

  .sponsors
    position: absolute
    width: $page-width
    top: 2538px

    .clearfix.head
      margin: 0 115px

      .button
        color: $figma-orange
        border-color: $figma-orange
        margin-top: 18px
        width: 170px
    h2
      color: $figma-orange
</style>