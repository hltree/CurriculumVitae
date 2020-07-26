<template lang="pug">
    #app
        #top
        router-view
        a(href="#top", v-smooth-scroll).l-totop
</template>

<script>
  export default {
    head: {
      meta() {
        return [{name: 'application-name', content: 'vue-router-project'}]
      }
    },
    name: 'App'
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap');
    $font_color: #333;
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend {
        background: none repeat scroll 0 0;
        border: 0 none;
        font-family: 'Noto Sans JP', sans-serif;
        margin: 0;
        outline: 0 none;
        padding: 0;
        position: relative;
        vertical-align: baseline;
    }


    html {
        font-size: 16px;
    }
    body {
        position: relative;
        font-size: 100%;
        color: $font_color;
        line-height: 1.75;
        overflow-wrap: break-word;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
    }

    table, caption, tbody, tfoot, thead {
        margin: 0;
        outline: 0 none;
        padding: 0;
    }

    th, td {
        vertical-align: top;
        background: none repeat scroll 0 0;
        margin: 0;
        outline: 0 none;
        padding: 0;
    }

    p, span, div {
        line-height: inherit;
    }

    a {
        color: $font_color;
        text-decoration: none;

        img {
            border: none;
            outline: 0 !important;
        }
    }

    a:hover {
        text-decoration: none;
    }

    button:focus {
        outline: 0 !important;
    }

    button:active {
        outline: none;
    }

    a, p, img, div {
        &:focus {
            outline: none;
        }
    }

    ol, ul {
        list-style: none outside none;
    }

    fieldset, img {
        vertical-align: bottom;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: none;
    }

    ins {
        text-decoration: none;
    }

    del {
        text-decoration: line-through;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    br {
        letter-spacing: 0;
    }

    hr {
        border: 0 none;
        height: 0;
        visibility: hidden;
    }

    select, input, textarea {
        font-size: 99%;
    }

    pre, code {
        font: 100% monospace;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    input, textarea {
        outline: none;
    }

    input[type="submit"], input[type="text"], textarea {
        -webkit-appearance: none;
    }

    /*clearfix*/
    .clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        line-height: 0;
        visibility: hidden;
    }

    .clearfix {
        *zoom: 1;
    }

    .l-totop {
        bottom: 20px;
        display: block;
        height: 40px;
        position: fixed;
        right: 20px;
        transition: transform .3s;
        width: 40px;
        &:before, &:after {
            border-color: transparent transparent #000;
            border-style: solid;
            border-width: 0 22px 30px 22px;
            content: "";
            display: block;
            height: 0;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 0;
        }
        &:after {
            border-bottom-color: #fff;
            margin-top: 7px;
        }
        &:hover {
            transform: translateY(-6px);
        }
    }
    .l-section {
        padding: 60px 20px;
        &-inner {
            margin-left: auto;
            margin-right: auto;
            max-width: 960px;
            width: 100%;
        }
    }

    .c-section-header {

    }
</style>
