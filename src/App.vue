<script setup>
import MainPage from './components/MainPage.vue'
import EditorPage from './components/EditorPage.vue'
// import { ref } from 'vue'

import { useEditorStore } from '@/stores/editor'

const editorStore = useEditorStore()
</script>

<template>
  <MainPage />
  <EditorPage v-if="editorStore.showEditor" />
</template>

<style scoped></style>
