<template>
  <div class="loading-map__main-panel">
    <div class="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {
name: "LoadingMap"
}
</script>

<style lang="scss" scoped>

.loading-map__main-panel{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loader div {
    animation: loader-anim 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .loader div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
    margin: -4px 0 0 -4px;
  }
  .loader div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .loader div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .loader div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .loader div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .loader div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .loader div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .loader div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .loader div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .loader div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .loader div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .loader div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .loader div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .loader div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .loader div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .loader div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .loader div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
}

@keyframes loader-anim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>