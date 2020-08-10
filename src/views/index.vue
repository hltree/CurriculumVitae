<template lang="pug">
    section
        section.l-section
            .l-section-inner
                .p-mv
                    h1.p-mv-title {{jsonData.basics.name}} ({{jsonData.basics.id}})
                .p-main-nav-area.js-floatPosition
                    nav.p-main-nav.js-floatNav
                        ul.p-main-nav-list
                            li(v-for="json in jsonData").p-main-nav-list-item
                                a(:href="'#' + json.title", v-smooth-scroll)
                                    span {{json.title}}
        section.l-section(v-for="(json, key) in jsonData", :id="json.title")
            .l-section-inner
                header.c-section-header
                    h2.c-section-header-title {{json.title}}

</template>

<script>
  import jsonData from '../assets/json/data'
  import $ from 'jquery';

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
    },
    mounted() {
      const position = $('.js-floatPosition');
      const floatNav = $('.js-floatNav');

      if (floatNav && position && 0 < floatNav.length && 0 < position.length) {
        $(window).on('scroll', function () {
          const positionTop = position.offset().top;
          if(positionTop <= $(this).scrollTop()) {
            floatNav.addClass('_is-fixed')
          } else {
            if (floatNav.hasClass('_is-fixed')) {
              floatNav.removeClass('_is-fixed')
            }
          }
        })
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
        position: absolute;
        top: 0;
        width: 960px;
        z-index: 100;
        &._is-fixed {
            position: fixed;
        }
        &-area {
            margin-top: 40px;
            padding-top: 40px;
            position: relative;
        }
        &-list {
            display: flex;
            justify-content: space-between;
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
                    padding: 5px 10px;
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
