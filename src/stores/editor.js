import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const showEditor = ref(true)
  const customStyles = ref({
    mainColor: '',
    textColor: '',
    jumbotronBackgroundColor: '',
    jumbotronTextColor: '',
  })

  function toggleShowEditor() {
    showEditor.value = !showEditor.value
  }

  function setCustomStyles(newStyles) {
    customStyles.value = { ...customStyles.value, ...newStyles }
  }

  return {
    toggleShowEditor,
    showEditor,
    customStyles,
    setCustomStyles,
  }
})
