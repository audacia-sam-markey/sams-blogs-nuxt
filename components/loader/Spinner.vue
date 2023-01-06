<template>
  <div>
    <div class="spinner-container">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.spinner-container {
  width: 80px;
  height: 80px;
  position: relative;
  div {
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    border: solid 8px;
    border-color: rgb(0, 0, 0) transparent transparent transparent;
    animation: rotateShrink 1s cubic-bezier(0.5, 0.2, 0.55, 1) infinite;
    &:nth-child(1) {
      animation-delay: -200ms;
    }
    &:nth-child(2) {
      animation-delay: -100ms;
    }
  }
}
@keyframes rotateShrink {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
