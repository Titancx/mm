<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(item,index)" v-for="(item,index) in songs" class="item">
        <div class="rank">
          <span></span>
          <div class="content">
            <h2 class="name">{{item.name}}</h2>
            <p class="desc">{{getDesc(item)}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  props:{
    songs:{
      type:Array,
      default:[]
    },
    rank:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    selectItem(item,index){
      this.$emit('select',item,index)
    },
    getDesc(song){
      return `${song.singer}。${song.album}`
    }
  }
}
</script>
<style lang="stylus" scoped>
.song-list
    .item
      display: flex
      align-items: center
      box-sizing: border-box
      height: 64px
      font-size: $font-size-medium
      .content
        flex: 1
        line-height: 20px
        overflow: hidden
        .name
          no-wrap()
          color: $color-text
        .desc
          no-wrap()
          margin-top: 4px
          color: $color-text-d
</style>
