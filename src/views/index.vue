<template lang="pug">
    v-app
        v-card-title
            h1.display-1 テスト
</template>

<script>
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
        background: #fff;
        left: 50%;
        position: fixed;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: 100;
        &-list {
            display: flex;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;
            width: 960px;
            &-item {
                align-items: center;
                display: flex;
                width: percentage(1 / 7);
                & + & {
                    &:before {
                        border-left: 1px solid #8e8e8e;
                        content: "";
                        display: block;
                        height: 50%;
                        width: 0;
                    }
                }
                a {
                    align-items: center;
                    display: flex;
                    font-size: .9rem;
                    height: 100%;
                    justify-content: center;
                    overflow: hidden;
                    padding: 5px 10px;
                    position: relative;
                    transition: opacity .6s;
                    width: 100%;
                    &:hover {
                        opacity: .6;
                    }
                }
            }
        }
    }
</style>
