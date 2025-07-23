<script setup>
import { useEditorStore } from '@/stores/editor'

function camelCaseToParamCase(camelCaseString) {
  return camelCaseString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

const editorStore = useEditorStore()

function setValueonStore(e, stateProperty, elementSelector = ':root') {
  editorStore.setCustomStyles({ stateProperty: e.target.value })
  document
    .querySelector(elementSelector)
    .style.setProperty(`--${camelCaseToParamCase(stateProperty)}`, e.target.value)
}
</script>
<template>
  <div class="editor-container">
    <div>
      <label for="main-color">Color de fondo principal</label>
      <input id="main-color" type="color" @input="setValueonStore($event, 'mainColor')" />
    </div>
    <div>
      <label for="text-color">Color de texto principal</label>
      <input id="text-color" type="color" @input="setValueonStore($event, 'textColor')" />
    </div>
    <div>
      <label for="jumbotron-background-color">Color de fondo Header</label>
      <input
        id="jumbotron-background-color"
        type="color"
        @input="setValueonStore($event, 'jumbotronBackgroundColor', 'header .jumbotron')"
      />
    </div>
    <div>
      <label for="jumbotron-text-color">Color de texto header</label>
      <input
        id="jumbotron-text-color"
        type="color"
        @input="setValueonStore($event, 'jumbotronTextColor', 'header .jumbotron')"
      />
    </div>
  </div>
</template>

<style scoped>
.editor-container {
  display: flex;
  top: 0;
  flex-direction: column;
  color: white;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  padding: 1em;
}

.editor-container > div {
  margin-top: 1em;
  display: flex;
}
.editor-container > div > input {
  margin-left: auto;
}
</style>
