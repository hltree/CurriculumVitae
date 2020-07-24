<template lang="pug">
    section
        section.l-section
            .p-mv
                h1 {{jsonData.basics.name}} ({{jsonData.basics.id}})
            nav
                li(v-for="json in jsonData")
                    a(:href="'#' + json.title", v-smooth-scroll) {{json.title}}
        section.l-section(v-for="json in jsonData", :id="json.title")
            header.c-section-header
                h2.c-section-header-title {{json.title}}
</template>

<script>
  import jsonData from '../assets/json/data'

  export default {
    head: {
      title() {
        return {
          inner: 'Web Engineer NaokiNishida (hltree)',
          separator: '|',
          complement: 'Home',
        }
      },
      meta() {
        return [
          {name: 'title', content: 'Home'},
          {name: 'description', content: 'ウェブエンジニア ニシダナオキ (hltree)のポートフォリオサイトです。'}
        ]
      },
    },
    data() {
      return {
        jsonData
      }
    }
  }
</script>

<style lang="scss">
    .p-mv {
        text-align: center;

        h1 {
            font-size: 1.5rem;
        }
    }
</style>
