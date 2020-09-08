<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      //定义scrollTop参数，设置默认值，父组件按需传参
      param: {
        probeType: {
          type: Number,
          default: 0
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        },
        click: {
          type: Boolean,
          default: true
        }
      },
      //定义backTop的完成动作时间
      scrollToTime: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        //先定义scroll实例对象为null
        scroll: null,
      }
    },
    methods: {
      //定义backTop方法给父组件调用
      scrollTop() {
        this.scroll && this.scroll.scrollTo(0, 0, this.scrollToTime)
      },

      //定义上拉加载结束的方法给父组件加载数据完毕时调用
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },

      //定义图片加载完成事件时，刷新scroll组件事件
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      //获取滚动时Y的数据
      getScrollY() {
        return this.scroll.y ? this.scroll.y : 0
      },
      //定义scrollTo方法给父组件调用
      scrollTo(x,y,t) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, t)
      }
    },
    mounted() {
      //通过$refs来获取自己用ref标记为‘wrapper’的组件
      //导入父组件传的param参数，没有传参就使用设置的默认值
      this.scroll = new BScroll(this.$refs.wrapper, this.param)

      //监听滚动位置
      if (this.param.probeType === 2 || this.param.probeType === 3) {
        //scroll对象监听scroll事件，参数为position(位置)内容由坐标x,y组成
        this.scroll.on('scroll', (position) => {

          //监听位置，发送自定义事件触发父组件（home）触发backToTop事件
          this.$emit('scroll', position)
        })
      }

      //scroll事件监听pullingUp事件，即用户上拉加载事件
      if (this.param.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          //监听用户上拉动作，发送自定义事件触发父组件（home）加载数据事件
          this.$emit('pullingup')
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    width: 100%;
  }
</style>