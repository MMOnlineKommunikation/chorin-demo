<template>
  <div class="controls-bar">
    <div class="controls-arrows">
      <span @click="$store.dispatch('changeSteinIndex', -1)"><i class="material-icons">keyboard_arrow_left</i></span>
      <span @click="$store.dispatch('changeModus', 'detail')">zu diesem Stein</span>
      <span @click="$store.dispatch('changeSteinIndex', 1)"><i class="material-icons">keyboard_arrow_right</i></span>
      <span>{{ $store.state.modus }}</span>
    </div>
  </div>
</template>

<style>
  .controls-bar {
    background-color: #666;
    color: #eee;
    padding: 8px;
  }
</style>
