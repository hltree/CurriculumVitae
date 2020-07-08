<template lang="pug">
    table.c-table
        tbody
            tr(v-for="tr in table" v-if="'object' === typeof tr")
                th(v-if="tr.th") {{ tr.th }}
                td(v-if="tr.td") {{ tr.td }}
</template>

<script>
  export default {
    props: {
      table: {
        type: Array,
        default: () => {
          return [
            {th: 'default th 1', td: 'default td 1'},
            {th: 'default th 2', td: 'default td 2'},
            {th: 'default th 3', td: 'default td 3'}
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
    .c-table {

    }
</style>
