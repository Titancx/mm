<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bgImage="bgImage"></music-list>
  </transition>
</template>


<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {createSong} from 'common/js/song'
import {ERR_OK} from 'api/config'
import MusicList from 'components/music-list/music-list'
export default {
  data(){
    return {
      songs:[]
    }
  },
  computed:{
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  components:{MusicList},
  created(){
    this._getDetail()
  },
  methods:{
    _getDetail(){
      if(!this.singer.id){
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then((res)=>{
        if(res.code === ERR_OK){
          this.songs=this._normalizeSongs(res.data.list)
          console.log(res.data.list)
          console.log(this.songs)
        }
      })
    },
    _normalizeSongs(list){
      let ret=[]
      list.forEach((item)=>{
        let {musicData}=item
        if(musicData.songid&&musicData.albumid){
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer-detail
    position:fixed
    top:0
    left:0
    right:0
    bottom:0
    background:red
    z-index:105
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
