<template lang="html">
  <div class="singer">
  </div>
</template>

<script>
import {getSingerList} from 'api/singer.js'
import {ERR_OK} from 'api/config'
export default {
  data(){
    return {
      singers:[],
      singerDetail:[]
    }
  },
  methods:{
    _getSingerList(){
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          // this.singers = this._normalizeSinger(res.data.list)
          console.log(res.data)
        }
      })
    }
  },
  created(){
    this._getSingerList()
    // this._getSingerDetail()
  }
}
</script>

<style lang="stylus" scoped>
</style>
