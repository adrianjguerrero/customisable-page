import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const showEditor = ref(false)
  // const doubleCount = computed(() => count.value * 2)

  function toggleShowEditor() {
    showEditor.value = !showEditor.value
  }

  return { showEditor, toggleShowEditor }
})
