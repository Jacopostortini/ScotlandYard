<template>
  <div class="player-label__main-panel"
       :class="{'player-label__admin-player': player.is_admin}"
       @mouseover="hover=true"
       @mouseleave="hover=false">
    <p class="kick-player-badge" v-if="hover && (currentPlayer ? currentPlayer.is_admin : false) && !isYou">kick</p>
    <img :src="player.is_mister_x ? require('@/assets/pawns/pawn_mister_x.png') : require('@/assets/pawns/pawn_'+player.color+'.png')"
         :class="{'kicked-player': fadeOut, 'hover-animation': hoverPlayerAnimation}"
         @click="kickPlayer">
    <div class="player-label__info-labels">
      <strong class="player-label__username-label">{{player.username}}</strong>
      <strong class="player-label__is-you-label" v-if="isYou">You</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerLabel",
  props: {
    player: {
      type: Object,
      required: true
    },
    currentPlayer: {
      required: true
    }
  },
  data(){
    return {
      fadeOut: false,
      hoverPlayerAnimation: true,
      hover: false
    }
  },
  methods: {
    kickPlayer(){
      if (!this.isYou && this.currentPlayer.is_admin){
        this.fadeOut = true;
        this.hoverPlayerAnimation = false;
        const sleep = (s) => {
          return new Promise(resolve => setTimeout(resolve, (s*1000)))
        }
        sleep(2).then(()=>{this.$emit("kickplayer", this.player.local_id)});
      }
    }
  },
  computed: {
    isYou: function(){
      if(this.currentPlayer){
        return this.currentPlayer.local_id === this.player.local_id;
      } else return false;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/global";

.player-label__main-panel {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100%;
  text-align: center;
  position: relative;
  margin: 0 2% 0 2%;

  .kick-player-badge{
    animation: fade-in 0.5s;
    position: absolute;
    top: -10%;
    margin: 0;
    font-size: 3vh;
    font-weight: lighter;
  }

  img {
    height: 60%;
    transition: transform 0.25s;

    &.hover-animation:hover{
      transform: scale(1.1);
    }
  }

  .kicked-player{
    animation: spin-and-zoom-out 2s ease-out;
  }

  @keyframes spin-and-zoom-out {
    100% {transform: translateY(-200px) rotate(1000deg) scale(0)}
  }

  .player-label__info-labels{
    height: 35%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 3vh;

    &>*{
      margin-bottom: 10%;
    }

    .player-label__is-you-label{
      color: white;
    }
  }

}

</style>