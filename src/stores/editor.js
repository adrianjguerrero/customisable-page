import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const showEditor = ref(true)
  const mainColor = ref('')
  const textColor = ref('')
  const jumbotronBackgroundColor = ref('')
  const jumbotronTextColor = ref('')

  function toggleShowEditor() {
    showEditor.value = !showEditor.value
  }

  return {
    toggleShowEditor,
    showEditor,
    mainColor,
    textColor,
    jumbotronBackgroundColor,
    jumbotronTextColor,
  }
})
