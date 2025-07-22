<script setup>
import { useEditorStore } from '@/stores/editor'

function camelCaseToParamCase(camelCaseString) {
  return camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

const editorStore = useEditorStore()

function setValueonStore(e, stateProperty, elementSelector = ':root') {
  editorStore[stateProperty] = e.target.value
  document
    .querySelector(elementSelector)
    .style.setProperty(`--${camelCaseToParamCase(stateProperty)}`, e.target.value)
}
</script>
<template>
  <div>
    <input type="color" @input="setValueonStore($event, 'mainColor')" />
    <input type="color" @input="setValueonStore($event, 'textColor')" />
    <input
      type="color"
      @input="setValueonStore($event, 'jumbotronBackgroundColor', 'header .jumbotron')"
    />
    <input
      type="color"
      @input="setValueonStore($event, 'jumbotronTextColor', 'header .jumbotron')"
    />
  </div>
</template>

<style></style>
