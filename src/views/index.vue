<template lang="pug">
    section
        section.l-section
            .l-section-inner
                .p-mv
                    h1.p-mv-title {{jsonData.basics.name}} ({{jsonData.basics.id}})
                nav.p-main-nav
                    ul.p-main-nav-list
                        li(v-for="json in jsonData").p-main-nav-list-item
                            a(:href="'#' + json.title", v-smooth-scroll)
                                span {{json.title}}
        section.l-section(v-for="json in jsonData", :id="json.title")
            .l-section-inner
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

        &-title {
            font-size: 1.5rem;
        }
    }
    .p-main-nav {
        &-list {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            &-item {
                width: percentage(1 / 7);
                & + & {
                    border-left: 1px solid;
                }
                a {
                    align-items: center;
                    background: #e8e8e8;
                    display: flex;
                    font-size: .9rem;
                    height: 100%;
                    justify-content: center;
                    overflow: hidden;
                    position: relative;
                    transition: opacity .6s;
                    width: 100%;
                    &:before {
                        content: "";
                        display: block;
                        height: 100%;
                        left: 0;
                        position: absolute;
                        top: 0;
                        transition: width .3s;
                        width: 0;
                    }
                    &:hover {
                        color: #fff;
                        &:before {
                            background-color: green;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
